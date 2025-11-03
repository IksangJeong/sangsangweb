import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// 게시글 상세 조회
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })

    if (!post) {
      return NextResponse.json(
        { error: '게시글을 찾을 수 없습니다' },
        { status: 404 }
      )
    }

    // 조회수 증가
    await prisma.post.update({
      where: { id: parseInt(params.id) },
      data: { views: { increment: 1 } },
    })

    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json(
      { error: '게시글을 불러오는데 실패했습니다' },
      { status: 500 }
    )
  }
}

// 게시글 수정
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다' },
        { status: 401 }
      )
    }

    const { title, content } = await request.json()

    // 작성자 확인
    const post = await prisma.post.findUnique({
      where: { id: parseInt(params.id) },
    })

    if (!post) {
      return NextResponse.json(
        { error: '게시글을 찾을 수 없습니다' },
        { status: 404 }
      )
    }

    if (post.userId !== parseInt(session.user.id)) {
      return NextResponse.json(
        { error: '수정 권한이 없습니다' },
        { status: 403 }
      )
    }

    const updatedPost = await prisma.post.update({
      where: { id: parseInt(params.id) },
      data: { title, content },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json(updatedPost)
  } catch (error) {
    return NextResponse.json(
      { error: '게시글 수정에 실패했습니다' },
      { status: 500 }
    )
  }
}

// 게시글 삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다' },
        { status: 401 }
      )
    }

    // 작성자 확인
    const post = await prisma.post.findUnique({
      where: { id: parseInt(params.id) },
    })

    if (!post) {
      return NextResponse.json(
        { error: '게시글을 찾을 수 없습니다' },
        { status: 404 }
      )
    }

    if (post.userId !== parseInt(session.user.id)) {
      return NextResponse.json(
        { error: '삭제 권한이 없습니다' },
        { status: 403 }
      )
    }

    await prisma.post.delete({
      where: { id: parseInt(params.id) },
    })

    return NextResponse.json({ message: '게시글이 삭제되었습니다' })
  } catch (error) {
    return NextResponse.json(
      { error: '게시글 삭제에 실패했습니다' },
      { status: 500 }
    )
  }
}
