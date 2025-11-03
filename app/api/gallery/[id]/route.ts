import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { unlink } from 'fs/promises'
import path from 'path'

// 갤러리 삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { error: '로그인이 필요합니다' },
        { status: 401 }
      )
    }

    const { id } = await params

    // 작성자 확인
    const galleryItem = await prisma.gallery.findUnique({
      where: { id: parseInt(id) },
    })

    if (!galleryItem) {
      return NextResponse.json(
        { error: '갤러리를 찾을 수 없습니다' },
        { status: 404 }
      )
    }

    if (galleryItem.userId !== parseInt(session.user.id)) {
      return NextResponse.json(
        { error: '삭제 권한이 없습니다' },
        { status: 403 }
      )
    }

    // 파일 삭제
    try {
      const filepath = path.join(process.cwd(), 'public', galleryItem.filepath)
      await unlink(filepath)
    } catch (error) {
      console.error('File deletion error:', error)
    }

    // DB에서 삭제
    await prisma.gallery.delete({
      where: { id: parseInt(id) },
    })

    return NextResponse.json({ message: '사진이 삭제되었습니다' })
  } catch (error) {
    return NextResponse.json(
      { error: '사진 삭제에 실패했습니다' },
      { status: 500 }
    )
  }
}
