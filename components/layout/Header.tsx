'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'

export default function Header() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">상</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              상상마루
            </span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-2">
            {/* 센터 소개 */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-black font-medium transition-colors flex items-center">
                센터 소개
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">인사말</Link>
                  <Link href="/board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">연혁</Link>
                  <Link href="/board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">오시는 길</Link>
                </div>
              </div>
            </div>

            {/* 프로그램 안내 */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-black font-medium transition-colors flex items-center">
                프로그램 안내
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">현장체험</Link>
                  <Link href="/board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">진로캠프</Link>
                  <Link href="/board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">직업체험</Link>
                </div>
              </div>
            </div>

            {/* 갤러리 */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-black font-medium transition-colors flex items-center">
                갤러리
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">활동사진</Link>
                  <Link href="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">동영상</Link>
                  <Link href="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">포토갤러리</Link>
                </div>
              </div>
            </div>

            {/* 커뮤니티 */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-black font-medium transition-colors flex items-center">
                커뮤니티
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">공지사항</Link>
                  <Link href="/board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">자유게시판</Link>
                  <Link href="/board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">Q&A</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* 로그인/회원가입 */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <>
                <span className="text-gray-700">{session.user?.name}님</span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-gray-700 hover:text-black transition-colors font-medium"
                >
                  로그인
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-black">
                센터 소개
              </Link>
              <Link href="/board" className="text-gray-700 hover:text-black">
                프로그램 안내
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-black">
                갤러리
              </Link>
              <Link href="/board" className="text-gray-700 hover:text-black">
                커뮤니티
              </Link>
              {session ? (
                <>
                  <span className="text-gray-700">{session.user?.name}님</span>
                  <button
                    onClick={() => signOut()}
                    className="text-left text-gray-700 hover:text-black"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-700 hover:text-black">
                    로그인
                  </Link>
                  <Link href="/register" className="text-gray-700 hover:text-black">
                    회원가입
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
