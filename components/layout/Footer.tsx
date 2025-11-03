export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      {/* 상단 정보 섹션 */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* 왼쪽: 회사 정보 */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">상</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">상상마루</h3>
            </div>

            <div className="space-y-1 text-sm text-gray-600">
              <p>상호: 유한회사 상상마루</p>
              <p>대표: 조진욱</p>
              <p>사업자등록번호: 651-86-01854</p>
              <p>업태: 교육서비스, 제조업</p>
            </div>
          </div>

          {/* 중앙: 빠른 링크 */}
          <div className="flex-1">
            <h4 className="text-sm font-bold text-gray-900 mb-3">빠른 링크</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-black transition-colors">센터 소개</a></li>
              <li><a href="/board" className="hover:text-black transition-colors">프로그램 안내</a></li>
              <li><a href="/gallery" className="hover:text-black transition-colors">갤러리</a></li>
              <li><a href="/board" className="hover:text-black transition-colors">커뮤니티</a></li>
            </ul>
          </div>

          {/* 오른쪽: 연락처 */}
          <div className="flex-1">
            <h4 className="text-sm font-bold text-gray-900 mb-3">문의하기</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                cybercops@wku.ac.kr
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                전북특별자치도 익산시
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 저작권 섹션 */}
      <div className="bg-gray-200 border-t border-gray-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p className="mb-2 md:mb-0">
              Copyright © 2025 상상마루. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-black transition-colors">이용약관</a>
              <a href="#" className="hover:text-black transition-colors font-semibold">개인정보처리방침</a>
              <a href="#" className="hover:text-black transition-colors">이메일무단수집거부</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
