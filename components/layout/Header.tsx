'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'

export default function Header() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <div id="sh_hd" style={{ position: 'relative', zIndex: 1000 }}>
      <h1 id="hd_h1" className="sr-only">상상마루 진로진학체험지원센터</h1>

      <div id="topNavWrap" className="bg-white shadow-sm" style={{ position: 'relative', zIndex: 1000 }}>
        <div className="container-custom py-4 flex items-center justify-between">
          {/* 로고 왼쪽 배치 */}
          <h2 id="top_logo" className="m-0">
            <Link href="/">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-xl">상</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gradient leading-tight">
                    상상마루
                  </span>
                  <span className="text-xs text-slate-500 font-medium">진로진학체험지원센터</span>
                </div>
              </div>
            </Link>
          </h2>

          {/* 데스크톱 메뉴 영역 - 중앙 정렬 */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {/* 상단메뉴 */}
            <ul id="top_nav" className="flex items-center gap-2 m-0 p-0 list-none">
              {/* 센터소개 */}
              <li
                className="list01 relative"
                onMouseEnter={() => setOpenSubmenu('intro')}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href="/board"
                  className="block px-5 py-3 text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  센터소개
                </Link>
                <ul
                  className={`absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                    openSubmenu === 'intro' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  style={{ display: openSubmenu === 'intro' ? 'block' : 'none' }}
                >
                  <li>
                    <Link
                      href="/board"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      인사말
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/board"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      연혁
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/board"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      오시는 길
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 프로그램안내 */}
              <li
                className="list02 relative"
                onMouseEnter={() => setOpenSubmenu('program')}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href="/board"
                  className="block px-5 py-3 text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  프로그램안내
                </Link>
                <ul
                  className={`absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                    openSubmenu === 'program' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  style={{ display: openSubmenu === 'program' ? 'block' : 'none' }}
                >
                  <li>
                    <Link
                      href="/board"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      현장체험학습
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/board"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      진로캠프
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/board"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      직업체험
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 갤러리 */}
              <li
                className="list03 relative"
                onMouseEnter={() => setOpenSubmenu('gallery')}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href="/gallery"
                  className="block px-5 py-3 text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  갤러리
                </Link>
                <ul
                  className={`absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                    openSubmenu === 'gallery' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  style={{ display: openSubmenu === 'gallery' ? 'block' : 'none' }}
                >
                  <li>
                    <Link
                      href="/gallery"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      활동사진
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      동영상
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      포토갤러리
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 커뮤니티 */}
              <li
                className="list04 relative"
                onMouseEnter={() => setOpenSubmenu('community')}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href="/board"
                  className="block px-5 py-3 text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  커뮤니티
                </Link>
                <ul
                  className={`absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ${
                    openSubmenu === 'community' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  style={{ display: openSubmenu === 'community' ? 'block' : 'none' }}
                >
                  <li>
                    <Link
                      href="/board"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      공지사항
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/board"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      자유게시판
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/board"
                      className="block px-5 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Q&A
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 자료실 */}
              <li className="list05">
                <Link
                  href="/board"
                  className="block px-5 py-3 text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  자료실
                </Link>
              </li>
            </ul>
          </div>

          {/* 로그인/회원가입 - 오른쪽 배치 */}
          <ul className="sh_tip hidden md:flex items-center gap-2 m-0 p-0 list-none">
            {session ? (
              <>
                <li>
                  <div className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700">
                    <span className="font-medium">{session.user?.name}님</span>
                  </div>
                </li>
                {session.user?.role === 'admin' && (
                  <li>
                    <Link
                      href="/admin"
                      className="block px-4 py-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      관리자
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={() => signOut()}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    로그아웃
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    로그인
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="block px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="container-custom py-4 flex flex-col space-y-1">
              <Link href="/board" className="px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                센터소개
              </Link>
              <Link href="/board" className="px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                프로그램안내
              </Link>
              <Link href="/gallery" className="px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                갤러리
              </Link>
              <Link href="/board" className="px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                커뮤니티
              </Link>
              <Link href="/board" className="px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                자료실
              </Link>

              <div className="border-t border-gray-200 my-2"></div>

              {session ? (
                <>
                  <div className="px-4 py-2 text-slate-600 font-medium">
                    {session.user?.name}님
                  </div>
                  {session.user?.role === 'admin' && (
                    <Link href="/admin" className="px-4 py-3 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors font-semibold">
                      관리자 페이지
                    </Link>
                  )}
                  <button
                    onClick={() => signOut()}
                    className="px-4 py-3 text-left text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    로그인
                  </Link>
                  <Link href="/register" className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all font-semibold text-center">
                    회원가입
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
