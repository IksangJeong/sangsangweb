import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// 관리자 권한 확인 함수
async function checkAdmin() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return { authorized: false, status: 401, error: '로그인이 필요합니다' }
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(session.user.id) },
    select: { role: true },
  })

  if (!user || user.role !== 'admin') {
    return { authorized: false, status: 403, error: '관리자 권한이 필요합니다' }
  }

  return { authorized: true, userId: parseInt(session.user.id) }
}

// 회원 목록 조회
export async function GET() {
  try {
    const auth = await checkAdmin()
    if (!auth.authorized) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        _count: {
          select: {
            posts: true,
            gallery: true,
          },
        },
      },
    })

    return NextResponse.json({ users })
  } catch (error) {
    return NextResponse.json(
      { error: '회원 목록을 불러오는데 실패했습니다' },
      { status: 500 }
    )
  }
}

// 회원 권한 변경
export async function PATCH(request: NextRequest) {
  try {
    const auth = await checkAdmin()
    if (!auth.authorized) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { userId, role } = await request.json()

    if (!userId || !role) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다' },
        { status: 400 }
      )
    }

    if (role !== 'user' && role !== 'admin') {
      return NextResponse.json(
        { error: '올바르지 않은 권한입니다' },
        { status: 400 }
      )
    }

    // 본인 권한은 변경 불가
    if (userId === auth.userId) {
      return NextResponse.json(
        { error: '본인의 권한은 변경할 수 없습니다' },
        { status: 400 }
      )
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json(
      { error: '권한 변경에 실패했습니다' },
      { status: 500 }
    )
  }
}

// 회원 삭제
export async function DELETE(request: NextRequest) {
  try {
    const auth = await checkAdmin()
    if (!auth.authorized) {
      return NextResponse.json({ error: auth.error }, { status: auth.status })
    }

    const { userId } = await request.json()

    if (!userId) {
      return NextResponse.json(
        { error: '사용자 ID가 필요합니다' },
        { status: 400 }
      )
    }

    // 본인은 삭제 불가
    if (userId === auth.userId) {
      return NextResponse.json(
        { error: '본인은 삭제할 수 없습니다' },
        { status: 400 }
      )
    }

    // 사용자 삭제 (cascade로 관련 데이터도 자동 삭제)
    await prisma.user.delete({
      where: { id: userId },
    })

    return NextResponse.json({ message: '사용자가 삭제되었습니다' })
  } catch (error) {
    return NextResponse.json(
      { error: '사용자 삭제에 실패했습니다' },
      { status: 500 }
    )
  }
}
