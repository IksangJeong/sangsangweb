'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  content: string
  views: number
  createdAt: string
  userId: number
  user: {
    name: string
    email: string
  }
}

export default function PostDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { data: session } = useSession()
  const router = useRouter()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const [postId, setPostId] = useState<string>('')

  useEffect(() => {
    params.then(p => {
      setPostId(p.id)
      fetchPost(p.id)
    })
  }, [])

  const fetchPost = async (id: string) => {
    try {
      const response = await fetch(`/api/posts/${id}`)
      const data = await response.json()

      if (response.ok) {
        setPost(data)
      } else {
        alert('게시글을 불러올 수 없습니다')
        router.push('/board')
      }
    } catch (error) {
      console.error('Failed to fetch post:', error)
      alert('게시글을 불러오는 중 오류가 발생했습니다')
      router.push('/board')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    setDeleting(true)
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        alert('게시글이 삭제되었습니다')
        router.push('/board')
      } else {
        const data = await response.json()
        alert(data.error || '삭제에 실패했습니다')
      }
    } catch (error) {
      alert('삭제 중 오류가 발생했습니다')
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center">로딩 중...</p>
      </div>
    )
  }

  if (!post) {
    return null
  }

  const isAuthor = session?.user?.id === post.userId.toString()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* 헤더 */}
          <div className="border-b border-gray-200 px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h1>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="space-x-4">
                <span>작성자: {post.user.name}</span>
                <span>조회수: {post.views}</span>
                <span>
                  작성일: {new Date(post.createdAt).toLocaleDateString('ko-KR')}
                </span>
              </div>
            </div>
          </div>

          {/* 내용 */}
          <div className="px-6 py-8">
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap text-gray-700">{post.content}</p>
            </div>
          </div>

          {/* 버튼 */}
          <div className="border-t border-gray-200 px-6 py-4 flex justify-between">
            <Link
              href="/board"
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              목록
            </Link>
            {isAuthor && (
              <div className="space-x-2">
                <Link
                  href={`/board/${post.id}/edit`}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  수정
                </Link>
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg disabled:opacity-50"
                >
                  {deleting ? '삭제 중...' : '삭제'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
