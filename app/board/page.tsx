'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BoardPage() {
  const router = useRouter()

  useEffect(() => {
    // /board로 접근 시 /board/notice로 리다이렉트
    router.replace('/board/notice')
  }, [router])

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-center">페이지를 이동합니다...</p>
    </div>
  )
}
