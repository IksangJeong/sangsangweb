'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHome, FaAngleRight } from 'react-icons/fa'

interface GalleryItem {
  id: number
  title: string
  filename: string
  filepath: string
  createdAt: string
  userId: number
  user: {
    name: string
  }
}

interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export default function GalleryPage() {
  const { data: session } = useSession()
  const [gallery, setGallery] = useState<GalleryItem[]>([])
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
  })
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  useEffect(() => {
    fetchGallery(1)
  }, [])

  const fetchGallery = async (page: number) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/gallery?page=${page}&limit=12`)
      const data = await response.json()
      setGallery(data.gallery)
      setPagination(data.pagination)
    } catch (error) {
      console.error('Failed to fetch gallery:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    try {
      const response = await fetch(`/api/gallery/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        alert('사진이 삭제되었습니다')
        fetchGallery(pagination.page)
        setSelectedImage(null)
      } else {
        const data = await response.json()
        alert(data.error || '삭제에 실패했습니다')
      }
    } catch (error) {
      alert('삭제 중 오류가 발생했습니다')
    }
  }

  return (
    <div id="sh_container">
      <div id="sh_container_wrapper">
        {/* 서브 비주얼영역 */}
        <div id="sub_main_banner">
          <div id="sh_content_tit">
            <h3>갤러리</h3>
            <p>
              <Link href="/">
                <FaHome className="inline" />
                <span className="sr-only">홈으로</span>
              </Link>
              <FaAngleRight className="inline mx-2" />
              갤러리
              <FaAngleRight className="inline mx-2" />
              활동사진
            </p>
          </div>
        </div>

        <div className="container-custom py-12">
          <div className="flex gap-8">
            {/* 서브메뉴 */}
            <div id="sh_aside" className="w-64 flex-shrink-0">
              <div id="sh_aside_wrapper">
                <ul id="sh_snb">
                  <li className="l_menu_ON">
                    <Link href="/gallery">활동사진</Link>
                  </li>
                  <li className="l_menu_OFF">
                    <Link href="/gallery">동영상</Link>
                  </li>
                  <li className="l_menu_OFF">
                    <Link href="/gallery">포토갤러리</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 콘텐츠영역 */}
            <div id="sh_content" className="flex-1">
              <div className="flex justify-end mb-6">
                {session && (
                  <Link
                    href="/gallery/upload"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
                  >
                    사진 업로드
                  </Link>
                )}
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <p className="text-slate-600">로딩 중...</p>
                </div>
              ) : (
                <>
                  {gallery.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-slate-600">사진이 없습니다</p>
                    </div>
                  ) : (
                    <>
                      {/* 갤러리 그리드 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {gallery.map((item) => (
                          <div
                            key={item.id}
                            className="card card-hover cursor-pointer"
                            onClick={() => setSelectedImage(item)}
                          >
                            <div className="relative h-56 bg-gray-200">
                              <Image
                                src={item.filepath}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="font-semibold text-slate-800 truncate">
                                {item.title}
                              </h3>
                              <p className="text-sm text-slate-600 mt-1">
                                {item.user.name}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">
                                {new Date(item.createdAt).toLocaleDateString('ko-KR')}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* 페이지네이션 */}
                      {pagination.totalPages > 1 && (
                        <div className="flex justify-center mt-8 gap-2">
                          <button
                            onClick={() => fetchGallery(pagination.page - 1)}
                            disabled={pagination.page === 1}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-slate-700 transition-all"
                          >
                            이전
                          </button>
                          {Array.from(
                            { length: pagination.totalPages },
                            (_, i) => i + 1
                          ).map((page) => (
                            <button
                              key={page}
                              onClick={() => fetchGallery(page)}
                              className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                                page === pagination.page
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                  : 'border-gray-300 text-slate-700 hover:bg-gray-50'
                              }`}
                            >
                              {page}
                            </button>
                          ))}
                          <button
                            onClick={() => fetchGallery(pagination.page + 1)}
                            disabled={pagination.page === pagination.totalPages}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-slate-700 transition-all"
                          >
                            다음
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}

            </div>
          </div>
        </div>

        {/* 이미지 모달 */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96">
                <Image
                  src={selectedImage.filepath}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-slate-600 mb-4">
                  작성자: {selectedImage.user.name} |{' '}
                  {new Date(selectedImage.createdAt).toLocaleDateString('ko-KR')}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-medium"
                  >
                    닫기
                  </button>
                  {session?.user?.id === selectedImage.userId.toString() && (
                    <button
                      onClick={() => handleDelete(selectedImage.id)}
                      className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all font-medium"
                    >
                      삭제
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
