'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaHome, FaAngleRight, FaRss, FaSearch } from 'react-icons/fa'

interface Post {
  id: number
  title: string
  content: string
  category: string
  views: number
  createdAt: string
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

export default function NoticePage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  })
  const [loading, setLoading] = useState(true)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchType, setSearchType] = useState('wr_subject')

  useEffect(() => {
    fetchPosts(1)
  }, [])

  const fetchPosts = async (page: number) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/posts?page=${page}&limit=10&category=notice`)
      const data = await response.json()
      setPosts(data.posts)
      setPagination(data.pagination)
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = (page: number) => {
    fetchPosts(page)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 검색 기능 구현
    console.log('검색:', searchType, searchKeyword)
  }

  return (
    <div id="sh_container">
      <div id="sh_container_wrapper">
        {/* 서브 비주얼영역 */}
        <div id="sub_main_banner">
          <div id="sh_content_tit">
            <h3>커뮤니티</h3>
            <p>
              <Link href="/">
                <FaHome className="inline" />
                <span className="sr-only">홈으로</span>
              </Link>
              <FaAngleRight className="inline mx-2" />
              커뮤니티
              <FaAngleRight className="inline mx-2" />
              공지사항
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
                    <Link href="/board/notice">공지사항</Link>
                  </li>
                  <li className="l_menu_OFF">
                    <Link href="/board/free">자유게시판</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 콘텐츠영역 */}
            <div id="sh_content" className="flex-1">
              <div id="sh_bo_list">
                <div className="list_top flex justify-between items-center mb-4">
                  <a href="/board/notice/rss" className="text-sm text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                    <FaRss />
                    RSS
                  </a>

                  {/* 검색 폼 */}
                  <fieldset id="sh_bo_sch">
                    <legend className="sr-only">게시물 검색</legend>
                    <form name="fsearch" onSubmit={handleSearch} className="flex gap-2 items-center">
                      <label htmlFor="sfl" className="sr-only">검색대상</label>
                      <select
                        name="sfl"
                        id="sfl"
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      >
                        <option value="wr_subject">제목</option>
                        <option value="wr_content">내용</option>
                        <option value="wr_subject||wr_content">제목+내용</option>
                        <option value="wr_name">글쓴이</option>
                      </select>
                      <label htmlFor="stx" className="sr-only">검색어<strong className="sr-only"> 필수</strong></label>
                      <input
                        type="text"
                        name="stx"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        id="stx"
                        className="sch_input px-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                        placeholder="검색어를 입력하세요"
                        size={25}
                        maxLength={20}
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
                      >
                        <FaSearch />
                        검색
                      </button>
                    </form>
                  </fieldset>
                </div>

                {loading ? (
                  <div className="text-center py-12">
                    <p className="text-slate-600">로딩 중...</p>
                  </div>
                ) : (
                  <>
                    {/* 게시글 목록 테이블 */}
                    <div id="sh_list_tbl" className="sh_tbl_common">
                      <table cellPadding="0" cellSpacing="0" className="w-full">
                        <caption className="sr-only">공지사항 목록</caption>
                        <thead>
                          <tr>
                            <th scope="col" className="w-20 text-center">No</th>
                            <th scope="col" className="text-left">제목</th>
                            <th scope="col" className="w-32 text-center">작성자</th>
                            <th scope="col" className="w-28 text-center">등록일</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!posts || posts.length === 0 ? (
                            <tr>
                              <td colSpan={4} className="text-center py-8 text-slate-500">
                                게시글이 없습니다
                              </td>
                            </tr>
                          ) : (
                            posts.map((post, index) => (
                              <tr key={post.id}>
                                <td className="num text-center">
                                  {pagination.total - (pagination.page - 1) * pagination.limit - index}
                                </td>
                                <td className="subject">
                                  <div>
                                    <Link
                                      href={`/board/${post.id}`}
                                      className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                                    >
                                      {post.title}
                                    </Link>
                                  </div>
                                </td>
                                <td className="name text-center">
                                  <span className="text-slate-600">{post.user.name}</span>
                                </td>
                                <td className="datetime text-center text-slate-500 text-sm">
                                  {new Date(post.createdAt).toLocaleDateString('ko-KR', {
                                    year: '2-digit',
                                    month: '2-digit',
                                    day: '2-digit',
                                  }).replace(/\. /g, '-').replace('.', '')}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* 글쓰기 버튼 - 관리자만 */}
                    <div className="btn_area mt-6 flex justify-end">
                      {session && session.user.role === 'admin' && (
                        <Link
                          href="/board/notice/write"
                          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
                        >
                          글쓰기
                        </Link>
                      )}
                    </div>

                    {/* 페이지네이션 */}
                    {pagination && pagination.totalPages > 1 && (
                      <div className="flex justify-center mt-8 gap-2">
                        <button
                          onClick={() => handlePageChange(pagination.page - 1)}
                          disabled={pagination.page === 1}
                          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-slate-700 transition-all"
                        >
                          이전
                        </button>
                        {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
                          (page) => (
                            <button
                              key={page}
                              onClick={() => handlePageChange(page)}
                              className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                                page === pagination.page
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                  : 'border-gray-300 text-slate-700 hover:bg-gray-50'
                              }`}
                            >
                              {page}
                            </button>
                          )
                        )}
                        <button
                          onClick={() => handlePageChange(pagination.page + 1)}
                          disabled={pagination.page === pagination.totalPages}
                          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-slate-700 transition-all"
                        >
                          다음
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
