'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || '회원가입에 실패했습니다')
        return
      }

      alert('회원가입이 완료되었습니다')
      router.push('/login')
    } catch (error) {
      setError('회원가입 중 오류가 발생했습니다')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 이미지 배너 */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/70"></div>
      </div>

      {/* 회원가입 폼 */}
      <div className="container-custom py-12 -mt-32 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            {/* 헤더 */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">
                <span className="text-blue-600">SIGN UP</span> 회원가입약관 및 개인정보처리방침
              </h1>
            </div>

            {/* 약관 동의 섹션 */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <label className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">
                    <span className="font-semibold">회원가입약관, 개인정보처리방침</span>에 모두 동의합니다.
                  </span>
                </label>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 bg-white mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <input type="checkbox" required className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-sm">회원가입약관 동의</span>
                      <a href="#" className="text-blue-600 text-xs">(필수)</a>
                    </div>
                    <textarea
                      readOnly
                      className="w-full h-24 p-3 text-xs border border-gray-200 rounded bg-gray-50 resize-none"
                      value="해당 홈페이지에 있는 회원가입약관을 입력합니다."
                    />
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 bg-white">
                <div className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-sm">개인정보처리방침 동의</span>
                      <a href="#" className="text-blue-600 text-xs">(필수)</a>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border border-gray-300">
                        <thead className="bg-gray-700 text-white">
                          <tr>
                            <th className="border border-gray-300 p-2">목적</th>
                            <th className="border border-gray-300 p-2">항목</th>
                            <th className="border border-gray-300 p-2">보유기간</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr>
                            <td className="border border-gray-300 p-2">이용자 식별 및 본인여부 확인</td>
                            <td className="border border-gray-300 p-2">아이디, 이름, 비밀번호</td>
                            <td className="border border-gray-300 p-2">회원 탈퇴 시까지</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">고객서비스 이용에 관한 통지, CS대응을 위한 이용자 식별</td>
                            <td className="border border-gray-300 p-2">연락처 (이메일, 휴대전화번호)</td>
                            <td className="border border-gray-300 p-2">회원 탈퇴 시까지</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 폼 */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="이름"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="이메일"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="비밀번호"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="비밀번호 확인"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 text-lg"
              >
                {loading ? '처리 중...' : '회원가입'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
