'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* 상단 네비게이션 (ft_nav) */}
      <ul className="ft_nav bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4 md:gap-8 px-4 py-4 m-0 list-none">
        <li>
          <button
            onClick={() => window.open('/terms', 'terms', 'width=600,height=900,left=150,top=0,scrollbars=yes')}
            className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
          >
            이용약관
          </button>
        </li>
        <li>
          <button
            onClick={() => window.open('/privacy', 'privacy', 'width=600,height=900,left=150,top=0,scrollbars=yes')}
            className="text-sm text-slate-700 hover:text-blue-600 transition-colors font-semibold cursor-pointer"
          >
            개인정보취급방침
          </button>
        </li>
        <li>
          <Link
            href="/board"
            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            센터안내
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            갤러리
          </Link>
        </li>
        <li>
          <Link
            href="/board"
            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            커뮤니티
          </Link>
        </li>
      </ul>

      {/* 메인 푸터 (sh_ft) */}
      <div id="sh_ft" className="bg-white border-t border-slate-200">
        <div id="sh_ft_wrapper" className="container-custom py-10">
          <div className="ft_box">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 items-start">
              {/* 왼쪽: 로고 & 정보 */}
              <div className="ft_inner space-y-5">
                {/* 로고 */}
                <div className="tit">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-xl">상</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-gradient leading-tight">
                        상상마루
                      </span>
                      <span className="text-xs text-slate-500 font-medium">진로진학체험지원센터</span>
                    </div>
                  </div>
                </div>

                {/* 회사 정보 */}
                <div className="info text-sm text-slate-600 leading-relaxed space-y-1">
                  <p>전북특별자치도 익산시  원광대학교 프라임관 </p>
                  <p>
                    <span className="font-semibold">사업자번호:</span> 651-86-01854 (등록 2006년) |
                    <span className="font-semibold ml-1">대표:</span> 조진욱
                  </p>
                  <p>
                    <span className="font-semibold">대표번호:</span> 1544-0634 |
                    <span className="font-semibold ml-1">팩스:</span> 0505-200-6060 |
                    <span className="font-semibold ml-1">이메일:</span> cybercops@wku.ac.kr
                  </p>

                  {/* 링크 영역 */}
                  <div className="ft_link flex flex-wrap items-center gap-4 pt-4">
                    <div className="copy text-slate-500 font-medium">
                      ⓒ 유한회사 상상마루 진로진학체험지원센터
                    </div>
                    <ul className="link flex items-center gap-3 m-0 p-0 list-none">
                      <li>
                        <Link
                          href="/admin"
                          className="text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium"
                        >
                          ADMIN
                        </Link>
                      </li>
                      <li>
                        <a
                          href="https://www.wku.ac.kr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium"
                        >
                          원광대학교
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 오른쪽: 입학관련문의 (cs) */}
              <div className="cs bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl px-8 py-6 shadow-sm border border-blue-200">
                <p className="tit text-sm text-blue-700 font-semibold mb-2">상담 및 문의</p>
                <p className="tel text-3xl font-bold text-blue-600 mb-3">1544-0634</p>
                <div className="text-sm text-slate-600 leading-relaxed space-y-0.5">
                  <p><span className="font-semibold">Fax.</span> 0505-200-6060</p>
                  <p><span className="font-semibold">E-mail.</span> cybercops@wku.ac.kr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
