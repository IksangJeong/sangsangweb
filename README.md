# 한국미래진로센터 웹사이트

진로체험 및 직업체험 프로그램 소개 웹사이트

## 🚀 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: MySQL + Prisma ORM
- **File Upload**: Next.js API Routes

## 📋 주요 기능

### 1. 사용자 인증
- ✅ 회원가입
- ✅ 로그인/로그아웃
- ✅ 세션 관리

### 2. 게시판
- ✅ 게시글 작성/수정/삭제
- ✅ 게시글 목록 조회 (페이징)
- ✅ 게시글 상세보기
- ✅ 조회수 카운팅
- ✅ 작성자만 수정/삭제 가능

### 3. 사진 갤러리
- ✅ 사진 업로드
- ✅ 갤러리 그리드 뷰
- ✅ 이미지 모달 뷰
- ✅ 사진 삭제
- ✅ 페이징

### 4. 메인 페이지
- ✅ 자동 캐러셀
- ✅ 프로그램 소개 섹션
- ✅ 연락처 정보

## 🛠️ 설치 및 실행

### 1. 패키지 설치
\`\`\`bash
npm install
\`\`\`

### 2. 환경변수 설정
\`.env\` 파일을 생성하고 다음 내용을 입력하세요:

\`\`\`env
# 데이터베이스
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
\`\`\`

### 3. 데이터베이스 마이그레이션
\`\`\`bash
npx prisma generate
npx prisma db push
\`\`\`

### 4. 개발 서버 실행
\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

\`\`\`
sangsangweb/
├── app/                      # Next.js App Router
│   ├── (auth)/              # 인증 관련 페이지
│   │   ├── login/           # 로그인
│   │   └── register/        # 회원가입
│   ├── api/                 # API Routes
│   │   ├── auth/            # NextAuth
│   │   ├── posts/           # 게시판 API
│   │   └── gallery/         # 갤러리 API
│   ├── board/               # 게시판 페이지
│   ├── gallery/             # 갤러리 페이지
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 메인 페이지
├── components/              # React 컴포넌트
│   ├── layout/              # 레이아웃 컴포넌트
│   └── providers/           # Provider 컴포넌트
├── lib/                     # 유틸리티 함수
│   ├── auth.ts              # NextAuth 설정
│   └── prisma.ts            # Prisma 클라이언트
├── prisma/                  # Prisma 스키마
│   └── schema.prisma        # 데이터베이스 스키마
├── public/                  # 정적 파일
│   └── uploads/             # 업로드된 이미지
├── types/                   # TypeScript 타입 정의
├── .env                     # 환경변수
├── next.config.js           # Next.js 설정
├── package.json             # 프로젝트 의존성
├── tailwind.config.ts       # Tailwind CSS 설정
└── tsconfig.json            # TypeScript 설정
\`\`\`

## 🗄️ 데이터베이스 스키마

### User (사용자)
- id: 고유 ID
- email: 이메일 (유니크)
- password: 비밀번호 (해시화)
- name: 이름
- createdAt: 생성일

### Post (게시글)
- id: 고유 ID
- title: 제목
- content: 내용
- views: 조회수
- userId: 작성자 ID
- createdAt: 생성일
- updatedAt: 수정일

### Gallery (갤러리)
- id: 고유 ID
- title: 제목
- filename: 파일명
- filepath: 파일 경로
- userId: 작성자 ID
- createdAt: 생성일

## 🌐 배포

### Vercel 배포 (추천)
1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 import
3. 환경변수 설정
4. 배포!

### 호스팅 서비스 배포
1. 프로젝트 빌드: \`npm run build\`
2. 빌드된 파일을 호스팅 서비스에 업로드
3. Node.js 환경 설정
4. 데이터베이스 연결 설정
5. 환경변수 설정

## 📞 연락처

- 전화: 1833-8170
- 이메일: krfcc@krfcc.com
- 주소: 서울특별시 양천구 목동서로349 센트럴프라자 1313호

## 📝 License

Copyright © 2025 Korea Future Career Center
