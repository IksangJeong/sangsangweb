# 📸 배너 이미지 변경 가이드

## 이미지 준비하기

### 1. 이미지 크기 권장사항
- **가로**: 1920px 이상
- **세로**: 500-800px
- **비율**: 16:9 또는 21:9
- **파일 형식**: JPG, PNG, WebP

### 2. 이미지 최적화
- 파일 크기: 500KB 이하 권장
- 압축 도구: [TinyPNG](https://tinypng.com/) 추천

## 이미지 업로드 방법

### 방법 1: 직접 파일 복사
1. 원하는 이미지 파일을 준비합니다
2. 이 폴더(`public/images/`)에 복사합니다
3. 파일명 예시:
   - `banner1.jpg`
   - `banner2.jpg`
   - `banner3.jpg`

### 방법 2: 코드에서 경로 수정
`app/page.tsx` 파일을 열고 다음 부분을 찾으세요:

\`\`\`typescript
const slides = [
  {
    title: '상상마루에 오신 것을 환영합니다',
    subtitle: '꿈을 현실로 만드는 특별한 체험 공간',
    image: '/images/banner1.jpg', // 👈 여기를 수정!
    bg: 'bg-gradient-to-r from-purple-500 to-purple-700',
  },
  // ... 나머지 슬라이드
]
\`\`\`

## 이미지 없이 그라데이션 배경 사용하기

이미지를 사용하고 싶지 않다면:

\`\`\`typescript
const slides = [
  {
    title: '상상마루에 오신 것을 환영합니다',
    subtitle: '꿈을 현실로 만드는 특별한 체험 공간',
    image: '', // 👈 빈 문자열로 두면 그라데이션 배경 사용
    bg: 'bg-gradient-to-r from-purple-500 to-purple-700',
  },
]
\`\`\`

## 배경색 변경하기

그라데이션 색상을 바꾸고 싶다면 `bg` 값을 수정하세요:

\`\`\`typescript
bg: 'bg-gradient-to-r from-purple-500 to-purple-700', // 보라색
bg: 'bg-gradient-to-r from-blue-500 to-blue-700',     // 파란색
bg: 'bg-gradient-to-r from-green-500 to-green-700',   // 초록색
bg: 'bg-gradient-to-r from-red-500 to-red-700',       // 빨간색
bg: 'bg-gradient-to-r from-pink-500 to-pink-700',     // 분홍색
\`\`\`

## 슬라이드 추가/삭제하기

### 슬라이드 추가
\`\`\`typescript
const slides = [
  // 기존 슬라이드들...
  {
    title: '새로운 슬라이드',
    subtitle: '설명을 여기에',
    image: '/images/banner4.jpg',
    bg: 'bg-gradient-to-r from-orange-500 to-orange-700',
  },
]
\`\`\`

### 슬라이드 삭제
필요없는 슬라이드 객체를 배열에서 제거하면 됩니다.

## 자동 슬라이드 속도 변경

`app/page.tsx` 에서 이 부분을 찾으세요:

\`\`\`typescript
setInterval(() => {
  setCurrentSlide((prev) => (prev + 1) % slides.length)
}, 5000) // 👈 5000 = 5초, 원하는 밀리초로 변경
\`\`\`

## 💡 팁

1. **고품질 이미지 사이트**
   - [Unsplash](https://unsplash.com/) - 무료 고품질 사진
   - [Pexels](https://www.pexels.com/) - 무료 스톡 사진

2. **이미지 편집 도구**
   - [Photopea](https://www.photopea.com/) - 온라인 포토샵
   - [Canva](https://www.canva.com/) - 디자인 툴

3. **적절한 이미지 선택**
   - 밝고 선명한 이미지
   - 텍스트가 잘 보이는 이미지
   - 브랜드 이미지와 어울리는 분위기

## 문제 해결

### 이미지가 안 보여요
- 파일 경로가 정확한지 확인
- 파일 확장자가 맞는지 확인 (.jpg, .png)
- 파일명에 한글이나 특수문자가 없는지 확인
- 개발 서버 재시작: `Ctrl + C` 후 `npm run dev`

### 이미지가 찌그러져요
- `object-cover` 클래스가 설정되어 있는지 확인
- 이미지 비율을 16:9로 맞춰보세요
