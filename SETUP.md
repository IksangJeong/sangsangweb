# 🚀 웹사이트 설치 가이드

## 1단계: 패키지 설치

터미널에서 다음 명령어를 실행하세요:

\`\`\`bash
npm install
\`\`\`

## 2단계: 데이터베이스 설정

### MySQL 설치 (아직 안 하셨다면)

**Mac:**
\`\`\`bash
brew install mysql
brew services start mysql
\`\`\`

**Windows:**
- [MySQL 다운로드](https://dev.mysql.com/downloads/installer/)

### 데이터베이스 생성

MySQL에 접속해서 데이터베이스를 생성하세요:

\`\`\`sql
CREATE DATABASE career_center;
\`\`\`

### 환경변수 설정

\`.env\` 파일을 열어서 데이터베이스 정보를 수정하세요:

\`\`\`env
DATABASE_URL="mysql://사용자명:비밀번호@localhost:3306/career_center"
\`\`\`

예시:
\`\`\`env
DATABASE_URL="mysql://root:mypassword@localhost:3306/career_center"
\`\`\`

## 3단계: Prisma 설정 및 마이그레이션

\`\`\`bash
# Prisma 클라이언트 생성
npx prisma generate

# 데이터베이스에 테이블 생성
npx prisma db push
\`\`\`

## 4단계: 개발 서버 실행

\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요!

## 🎯 주요 기능 테스트

### 1. 회원가입
- 상단 "회원가입" 버튼 클릭
- 정보 입력 후 가입

### 2. 로그인
- 상단 "로그인" 버튼 클릭
- 가입한 계정으로 로그인

### 3. 게시판
- "커뮤니티" 메뉴 클릭
- 로그인 후 "글쓰기" 버튼으로 글 작성
- 본인이 작성한 글만 수정/삭제 가능

### 4. 사진 갤러리
- "대표 강사진" 메뉴 클릭
- 로그인 후 "사진 업로드" 버튼으로 사진 업로드
- 사진 클릭하면 크게 보기
- 본인이 올린 사진만 삭제 가능

## 🐛 문제 해결

### 데이터베이스 연결 오류
- MySQL이 실행 중인지 확인: \`brew services list\` (Mac) 또는 작업 관리자 (Windows)
- \`.env\` 파일의 DATABASE_URL이 올바른지 확인

### 포트 3000이 이미 사용 중
\`\`\`bash
# 다른 포트로 실행
PORT=3001 npm run dev
\`\`\`

### Prisma 오류
\`\`\`bash
# Prisma 재설정
npx prisma generate
npx prisma db push
\`\`\`

## 📦 프로덕션 빌드

\`\`\`bash
# 빌드
npm run build

# 프로덕션 모드 실행
npm start
\`\`\`

## 🌐 호스팅 배포 준비

### 1. 데이터베이스
- 호스팅 업체(Cafe24, 가비아 등)에서 MySQL 데이터베이스 신청
- 제공받은 DB 정보로 \`.env\` 파일 수정

### 2. 파일 업로드
- \`npm run build\` 실행
- 생성된 파일들을 호스팅 서버에 업로드

### 3. 환경변수 설정
- 호스팅 관리자 페이지에서 환경변수 설정
- DATABASE_URL, NEXTAUTH_URL, NEXTAUTH_SECRET 설정

### 4. Node.js 실행
- 호스팅 서비스에서 Node.js 버전 설정 (18 이상)
- \`npm start\` 명령어로 실행

## 💡 팁

- 처음에는 로컬에서 충분히 테스트하세요
- 실제 데이터를 넣어보고 문제가 없는지 확인
- 백업을 자주 하세요 (데이터베이스 + 업로드된 사진)
- 비밀번호나 시크릿키는 절대 공유하지 마세요

## 📞 문의

문제가 있으면 언제든지 물어보세요!
