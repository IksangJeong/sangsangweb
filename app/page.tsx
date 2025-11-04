'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules'
import { FaArrowRight } from 'react-icons/fa'
import AOS from 'aos'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)

  // AOS 초기화
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
    })
  }, [])

  const notices = [
    { id: 1, title: '상상마루 진로체험센터를 오픈하였습니다', date: '2025-01-15' },
    { id: 2, title: '2025년 상반기 프로그램 일정 안내', date: '2025-01-10' },
    { id: 3, title: '진로캠프 참가 신청 안내', date: '2025-01-05' },
  ]

  const programs = [
    { id: 1, title: '현장체험학습', description: '다양한 진로 현장 체험', image: '/images/program1.jpg' },
    { id: 2, title: '진로캠프', description: '집중 진로 탐색 프로그램', image: '/images/program2.jpg' },
    { id: 3, title: '직업체험', description: '실제 직업 세계 체험', image: '/images/program3.jpg' },
    { id: 4, title: '진로상담', description: '1:1 맞춤 진로 상담', image: '/images/program4.jpg' },
  ]

  const newsData = [
    [
      { id: 1, category: '공지사항', title: '상상마루 진로체험센터를 오픈하였습니다', description: '학생들의 꿈을 응원하는 진로진학체험지원센터', date: '25.01.15' },
      { id: 2, category: '공지사항', title: '2025년 상반기 프로그램 일정 안내', description: '2025년 상반기 진로체험 프로그램 일정을 안내드립니다', date: '25.01.10' },
      { id: 3, category: '공지사항', title: '진로캠프 참가 신청 안내', description: '진로캠프 참가 신청을 받고 있습니다', date: '25.01.05' },
    ],
    [
      { id: 1, category: '보도자료', title: '준비중입니다', description: '보도자료 준비중입니다', date: '25.01.15' },
    ],
  ]

  return (
    <div id="sh_wrapper">
      <div id="sh_container">
        <div id="sh_container_wrapper">
          {/* 메인 비주얼모션 */}
          <div id="mainVisual" style={{ position: 'relative', height: '500px', overflow: 'hidden' }} className="md:h-[700px]">
            <div className="txt_area" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              textAlign: 'center',
              width: '100%',
              padding: '0 20px'
            }}>
              <p className="tit text-3xl md:text-5xl lg:text-6xl" style={{
                fontWeight: 'bold',
                color: 'white',
                lineHeight: '1.3',
                marginBottom: '30px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                <b style={{ color: 'white' }}>더 큰 미래</b>를 더하고,<br />
                <b style={{ color: 'white' }}>더 멋진 내일</b>을 배우는 곳
              </p>
              <div className="txt_box" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p className="txt text-sm md:text-base lg:text-lg hidden md:block" style={{
                  color: 'rgba(255,255,255,0.95)',
                  lineHeight: '1.8',
                  marginBottom: '40px',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}>
                  인재를 성장시키기 위해 성공적인 진로 가능 환경을 제공하는 상상마루는
                  실용과 혁신, 글로벌의 가치 아래 지식과 역량을 넘어 유일성을 지향합니다.
                </p>
                <Link
                  href="/board"
                  className="btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 40px',
                    backgroundColor: 'white',
                    color: '#2563eb',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s'
                  }}
                >
                  센터안내
                  <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* Progressbar */}
            <div className="swiper-progress-bar active animate" style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              height: '4px',
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderRadius: '10px',
              overflow: 'hidden',
              zIndex: 10
            }}>
              <span className="slide_progress-bar" style={{
                display: 'block',
                height: '100%',
                backgroundColor: 'white',
                animation: 'progressBar 3.8s linear infinite'
              }}></span>
            </div>

            {/* Main Swiper - 3개 슬라이드 */}
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              loop={true}
              speed={1000}
              slidesPerView={1}
              autoplay={{ delay: 3800, disableOnInteraction: false }}
              allowTouchMove={false}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              className="mainSwiper"
              style={{ width: '100%', height: '100%' }}
            >
              {/* 슬라이드 1 */}
              <SwiperSlide className="img01" style={{
                width: '100%',
                height: '100%'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/images/banner1.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
              </SwiperSlide>

              {/* 슬라이드 2 */}
              <SwiperSlide className="img02" style={{
                width: '100%',
                height: '100%'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/images/banner2.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
              </SwiperSlide>

              {/* 슬라이드 3 */}
              <SwiperSlide className="img03" style={{
                width: '100%',
                height: '100%'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/images/banner3.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/*인덱스 영역*/}
          <section id="sh_section">
            {/* Article 01 - 입학문의 + 빠른메뉴 */}
            <article id="atc01" style={{ padding: '80px 0', backgroundColor: 'white' }}>
              <div className="inner" data-aos="fade-up" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '20px',
                  padding: '60px',
                  marginBottom: '40px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}>
                  <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8 lg:gap-10 items-center">
                    {/* 입학문의 */}
                    <div className="txt_box" style={{ textAlign: 'center' }}>
                      <span style={{ color: '#64748b', fontSize: '14px', fontWeight: '600' }}>상담 및 문의</span>
                      <p className="num" style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#2563eb',
                        margin: '10px 0'
                      }}>1544-0634</p>
                      <p className="cs" style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                        Fax. 0505-200-6060<br />
                        E-mail. cybercops@wku.ac.kr
                      </p>
                    </div>

                    {/* 빠른메뉴 버튼 */}
                    <div className="btn_box">
                      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 list-none p-0 m-0">
                        {[
                          {
                            name: '센터안내',
                            link: '/board',
                            color: '#3b82f6',
                            icon: (
                              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                              </svg>
                            )
                          },
                          {
                            name: '강사소개',
                            link: '/board',
                            color: '#10b981',
                            icon: (
                              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                              </svg>
                            )
                          },
                          {
                            name: '프로그램안내',
                            link: '/board',
                            color: '#f59e0b',
                            icon: (
                              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                              </svg>
                            )
                          },
                          {
                            name: '체험프로그램',
                            link: '/board',
                            color: '#8b5cf6',
                            icon: (
                              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                              </svg>
                            )
                          },
                          {
                            name: '자료실',
                            link: '/board',
                            color: '#ef4444',
                            icon: (
                              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                                <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                              </svg>
                            )
                          },
                        ].map((item, idx) => (
                          <li key={idx}>
                            <Link href={item.link} style={{ textDecoration: 'none' }}>
                              <div style={{
                                backgroundColor: 'white',
                                padding: '30px 20px',
                                borderRadius: '15px',
                                textAlign: 'center',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s',
                                cursor: 'pointer'
                              }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform = 'translateY(-8px)'
                                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = 'translateY(0)'
                                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                              >
                                <div className="icon" style={{
                                  width: '80px',
                                  height: '80px',
                                  margin: '0 auto 15px',
                                  backgroundColor: `${item.color}15`,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}>
                                  <div style={{ color: item.color }}>
                                    {item.icon}
                                  </div>
                                </div>
                                <p style={{
                                  fontSize: '15px',
                                  fontWeight: '600',
                                  color: '#334155',
                                  margin: 0
                                }}>{item.name}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* notice */}
                <div className="notice" data-aos="fade-up" style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  padding: '30px 40px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                    <div className="cont_box">
                      <Link href="/board" style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#2563eb',
                        textDecoration: 'none'
                      }}>
                        NOTICE
                      </Link>
                    </div>
                    <div className="txt_box" style={{ flex: 1 }}>
                      <Swiper
                        modules={[Autoplay]}
                        direction="vertical"
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                        slidesPerView={1}
                        speed={600}
                        className="sh_lt"
                        style={{ height: '30px' }}
                      >
                        {notices.map((notice) => (
                          <SwiperSlide key={notice.id}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <span className="sh_notice" style={{ flex: 1 }}>
                                <Link href={`/board/${notice.id}`} style={{
                                  color: '#334155',
                                  textDecoration: 'none',
                                  fontSize: '15px'
                                }}>
                                  {notice.title}
                                </Link>
                              </span>
                              <span className="datetime" style={{
                                fontSize: '14px',
                                color: '#94a3b8'
                              }}>
                                {notice.date}
                              </span>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Article 02 - 프로그램 슬라이더 */}
            <article id="atc02" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
              <div className="inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="txt_all mb-12 md:mb-16" data-aos="fade-right" data-aos-duration="1000">
                  <p className="text-blue-600 text-sm font-semibold mb-3">MAJOR INFORMATION</p>
                  <div className="tit_area">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4 md:mb-5">
                      학생들의 꿈이 자라나는<br />
                      <span className="text-blue-600">상상마루 진로체험센터입니다.</span>
                    </p>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed hidden md:block">
                      다양한 진로 체험 프로그램을 통해<br />
                      학생들의 미래를 함께 만들어갑니다.
                    </p>
                  </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" style={{ padding: '30px 20px', overflow: 'visible' }}>
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation={true}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 4 },
                    }}
                    className="main_slide program-slider"
                    style={{ overflow: 'visible' }}
                  >
                    {programs.map((program) => (
                      <SwiperSlide key={program.id}>
                        <Link href="/board" className="no-underline block">
                          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div
                              className="h-48 md:h-56 lg:h-64 bg-cover bg-center relative"
                              style={{
                                backgroundImage: `url(${program.image})`,
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center p-6">
                                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white m-0 text-center drop-shadow-lg">
                                  {program.title}
                                </p>
                              </div>
                            </div>
                            <div className="p-6 md:p-7 lg:p-8">
                              <p className="text-sm md:text-base text-slate-600 leading-relaxed m-0">
                                {program.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </article>

            {/* Article 03 - 뉴스 탭 */}
            <article id="atc03" className="py-16 md:py-20 lg:py-24 bg-white">
              <div className="inner" data-aos="fade-down" data-aos-duration="1500" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="txt_all mb-12 md:mb-16">
                  <p className="text-blue-600 text-sm font-semibold mb-3">LATEST NEWS</p>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-10 gap-6">
                    <div className="tit_area">
                      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                        믿음의 센터, 믿을 수 있는 인재<br />
                        <span className="text-blue-600">상상마루에서 꿈을 펼쳐보세요.</span>
                      </p>
                    </div>
                    <div className="tabs_wrap relative">
                      <div
                        className="active absolute bottom-0 h-1 bg-blue-600 transition-all duration-300"
                        style={{
                          left: activeTab === 0 ? '0%' : '50%',
                          width: '50%'
                        }}
                      ></div>
                      <ul className="flex gap-6 md:gap-10 list-none p-0 m-0">
                        <li
                          onClick={() => setActiveTab(0)}
                          className={`cursor-pointer pb-3 md:pb-4 text-base md:text-lg font-semibold transition-colors ${
                            activeTab === 0 ? 'text-blue-600' : 'text-slate-400'
                          }`}
                        >
                          공지사항
                        </li>
                        <li
                          onClick={() => setActiveTab(1)}
                          className={`cursor-pointer pb-3 md:pb-4 text-base md:text-lg font-semibold transition-colors ${
                            activeTab === 1 ? 'text-blue-600' : 'text-slate-400'
                          }`}
                        >
                          보도자료
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lt_wrap" data-aos="fade-up" data-aos-duration="1000">
                  <div className="latest_wrap">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 list-none p-0 m-0">
                      {newsData[activeTab].map((item) => (
                        <li key={item.id}>
                          <Link
                            href={`/board/${item.id}`}
                            className="no-underline"
                          >
                            <div className="bg-white rounded-2xl p-6 md:p-7 lg:p-8 border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
                              <p className="text-blue-600 text-xs md:text-sm font-semibold mb-3">
                                {item.category}
                              </p>
                              <p className="text-base md:text-lg font-bold text-slate-900 mb-3 md:mb-4 leading-snug">
                                {item.title}
                              </p>
                              <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-5 leading-relaxed">
                                {item.description}
                              </p>
                              <span className="text-xs text-slate-400">
                                {item.date}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center mt-10 md:mt-12 lg:mt-14">
                      <Link
                        href="/board"
                        className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm md:text-base font-semibold no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        더보기<span>+</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  )
}
