# 🎨 배너 이미지 변경 완벽 가이드

## ✅ 완료된 작업

1. ✨ **브랜드명 변경**: "한국미래진로센터" → "상상마루"
2. 🎨 **로고 색상**: 파란색 → 보라색
3. 📸 **배너 이미지**: 코드에서 쉽게 변경 가능하도록 구조 변경
4. 📝 **Footer 정보**: 상상마루 정보로 업데이트

## 📸 배너 이미지 바꾸는 방법

### 1단계: 이미지 준비
```
권장 사이즈: 1920 x 800px
파일 형식: JPG 또는 PNG
파일 크기: 500KB 이하
```

### 2단계: 이미지 저장
프로젝트의 `public/images/` 폴더에 이미지를 넣으세요:
```
public/
  └── images/
      ├── banner1.jpg  👈 첫 번째 슬라이드
      ├── banner2.jpg  👈 두 번째 슬라이드
      └── banner3.jpg  👈 세 번째 슬라이드
```

### 3단계: 코드에서 경로 수정

`app/page.tsx` 파일을 열어서 이 부분을 찾으세요:

\`\`\`typescript
const slides = [
  {
    title: '상상마루에 오신 것을 환영합니다',
    subtitle: '꿈을 현실로 만드는 특별한 체험 공간',
    image: '/images/banner1.jpg', // 👈 이미지 파일명 변경
    bg: 'bg-gradient-to-r from-purple-500 to-purple-700',
  },
  {
    title: '다양한 진로 체험 프로그램',
    subtitle: '나의 미래를 설계하는 시간',
    image: '/images/banner2.jpg', // 👈 이미지 파일명 변경
    bg: 'bg-gradient-to-r from-indigo-500 to-indigo-700',
  },
  {
    title: '생생한 직업 탐색',
    subtitle: '실제로 체험하며 배우는 진로 교육',
    image: '/images/banner3.jpg', // 👈 이미지 파일명 변경
    bg: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },
]
\`\`\`

## 🎯 예시

### 예시 1: 이미지 파일명이 다른 경우
```typescript
image: '/images/my-photo.jpg',  // ✅ 이렇게 변경
```

### 예시 2: 이미지 없이 그라데이션만 사용
```typescript
image: '',  // ✅ 빈 문자열로 두면 배경색만 표시
```

### 예시 3: 텍스트 변경
```typescript
{
  title: '여기에 원하는 제목',
  subtitle: '여기에 원하는 부제목',
  image: '/images/my-banner.jpg',
  bg: 'bg-gradient-to-r from-purple-500 to-purple-700',
}
```

## 🎨 배경색 변경하기

색상 조합 예시:

```typescript
// 보라색
bg: 'bg-gradient-to-r from-purple-500 to-purple-700'

// 파란색
bg: 'bg-gradient-to-r from-blue-500 to-blue-700'

// 초록색
bg: 'bg-gradient-to-r from-green-500 to-green-700'

// 분홍색
bg: 'bg-gradient-to-r from-pink-500 to-pink-700'

// 주황색
bg: 'bg-gradient-to-r from-orange-500 to-orange-700'

// 빨간색
bg: 'bg-gradient-to-r from-red-500 to-red-700'
```

## ⚙️ 슬라이드 설정 변경

### 슬라이드 속도 변경
`app/page.tsx`에서:
```typescript
}, 5000) // 5000 = 5초, 원하는 시간(밀리초)으로 변경
```

### 슬라이드 추가
배열에 새로운 객체 추가:
```typescript
const slides = [
  // 기존 슬라이드들...
  {
    title: '새 슬라이드',
    subtitle: '설명',
    image: '/images/banner4.jpg',
    bg: 'bg-gradient-to-r from-teal-500 to-teal-700',
  },
]
```

### 슬라이드 삭제
필요 없는 슬라이드 객체를 삭제하면 됩니다.

## 💡 무료 이미지 다운로드 사이트

1. **Unsplash**: https://unsplash.com/
   - 고품질 무료 사진
   - 상업적 이용 가능

2. **Pexels**: https://www.pexels.com/
   - 다양한 무료 스톡 사진
   - 검색 기능 우수

3. **Pixabay**: https://pixabay.com/
   - 이미지, 일러스트 모두 제공
   - 무료 사용 가능

## 🛠️ 이미지 최적화 도구

1. **TinyPNG**: https://tinypng.com/
   - 이미지 용량 줄이기
   - 화질 손실 최소화

2. **Squoosh**: https://squoosh.app/
   - 구글에서 만든 이미지 압축 툴
   - 다양한 포맷 지원

## ❓ 문제 해결

### 이미지가 안 보여요
1. 파일 경로 확인: `/images/파일명.jpg`
2. 파일명 대소문자 확인
3. 파일 확장자 확인 (.jpg, .png)
4. 개발 서버 재시작

### 이미지가 깨져요
1. 이미지 파일이 손상되지 않았는지 확인
2. 파일 형식이 지원되는지 확인 (JPG, PNG)
3. 이미지를 다시 저장해보세요

### 이미지가 이상하게 늘어나요
- 이미지 비율을 16:9로 맞춰보세요
- 또는 정사각형(1:1)도 괜찮습니다

## 📞 추가 도움이 필요하신가요?

더 궁금한 점이 있으면 언제든 물어보세요! 😊
