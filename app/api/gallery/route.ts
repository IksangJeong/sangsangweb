import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

// 갤러리 목록 조회
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const skip = (page - 1) * limit

    const [gallery, total] = await Promise.all([
      prisma.gallery.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      }),
      prisma.gallery.count(),
    ])

    return NextResponse.json({
      gallery,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: '갤러리를 불러오는데 실패했습니다' },
      { status: 500 }
    )
  }
}

// 사진 업로드
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다' },
        { status: 401 }
      )
    }

    const formData = await request.formData()
    const title = formData.get('title') as string
    const file = formData.get('file') as File

    if (!title || !file) {
      return NextResponse.json(
        { error: '제목과 파일을 입력해주세요' },
        { status: 400 }
      )
    }

    // 파일 저장
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // uploads 디렉토리 생성
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    try {
      await mkdir(uploadsDir, { recursive: true })
    } catch (error) {
      // 디렉토리가 이미 존재하는 경우 무시
    }

    // 고유한 파일명 생성
    const timestamp = Date.now()
    const filename = `${timestamp}-${file.name}`
    const filepath = path.join(uploadsDir, filename)

    await writeFile(filepath, buffer)

    // DB에 저장
    const galleryItem = await prisma.gallery.create({
      data: {
        title,
        filename,
        filepath: `/uploads/${filename}`,
        userId: parseInt(session.user.id),
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    })

    return NextResponse.json(galleryItem, { status: 201 })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: '사진 업로드에 실패했습니다' },
      { status: 500 }
    )
  }
}
