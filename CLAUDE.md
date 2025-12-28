# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

상상마루(SangsangMaru) - 진로·직업체험 교육 플랫폼 웹사이트. Figma → ANIMA 익스포트 기반 정적 웹사이트로, 미리넷 호스팅 서버에 배포 예정.

## 기술 스택

- **프론트엔드**: HTML, CSS (Vanilla), JavaScript
- **백엔드**: PHP (미리넷 호스팅 환경)
- **데이터베이스**: MySQL/MariaDB
- **폰트**: Spoqa Han Sans Neo (CDN)

## 프로젝트 구조

```
sangsangweb/
├── index.html              # 메인 페이지 (엔트리 포인트)
├── style.css               # 메인 페이지 전용 스타일
├── css/
│   ├── globals.css         # 글로벌 리셋
│   ├── variables.css       # CSS 변수 및 폰트 임포트
│   └── common.css          # 공통 네비게이션/푸터 스타일
├── pages/
│   ├── login.html/.css     # 로그인 페이지
│   ├── signup.html/.css    # 회원가입 페이지
│   └── community/
│       ├── notice.html     # 공지사항 목록
│       └── community.css   # 커뮤니티 스타일
├── img/                    # 이미지 파일
├── js/                     # JavaScript (예정)
└── php/                    # PHP 백엔드 (예정)
```

## 디자인 시스템

- **컨테이너 너비**: 1160px (max-width: 1440px)
- **네비게이션 높이**: 75px
- **Primary 색상**: #1F63C9
- **Border Radius**: 50px(버튼), 20px(카드), 15px(입력필드)

## CSS 구조 규칙

- `index.html`은 `.index-page-desktop` 클래스 기반 스타일 사용 (style.css)
- 서브 페이지들은 `css/common.css` + 개별 CSS 파일 조합
- 모든 페이지에서 `css/variables.css` 임포트 필수 (폰트 CDN 포함)

## 페이지 간 경로

- 메인 → 서브페이지: `pages/login.html`, `pages/community/notice.html`
- 서브페이지 → 메인: `../index.html` 또는 `../../index.html`
- CSS 경로: 서브페이지에서 `../css/` 사용

## 개발 참고사항

- 로컬 개발: 브라우저에서 index.html 직접 열기 또는 Live Server 사용
- 이미지는 `img/` 폴더에 배치, 파일명은 HTML/CSS 참조와 일치해야 함
- PHP 백엔드는 미리넷 호스팅 환경에서 테스트 필요
