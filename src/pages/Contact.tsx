import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import TrueFocus from '../components/animations/TrueFocus'
import Map from '../components/Map'

const Contact = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [showPopup, setShowPopup] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // Check if form was submitted successfully
  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setShowSuccessMessage(true)
      window.scrollTo(0, 0)
    }
  }, [searchParams])

  // Scroll to top when component mounts or location changes
  useEffect(() => {
    if (!searchParams.get('success')) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, searchParams])

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-chinese-bold text-center mb-16 text-glow">
          联系我们
        </h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <TrueFocus>
              <div className="film-card p-8">
                <h2 className="text-2xl font-chinese-bold mb-6">联系方式</h2>
              
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <h3 className="font-chinese-regular mb-1">地址</h3>
                      <p className="text-film-400 font-chinese-regular">
                        中国，上海市<br />
                        虹口区广灵四路116号
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📧</span>
                    <div>
                      <h3 className="font-chinese-regular mb-1">邮箱</h3>
                      <p className="text-film-400">
                        joezb@relaxistudio.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📱</span>
                    <div>
                      <h3 className="font-chinese-regular mb-1">电话</h3>
                      <p className="text-film-400">
                        +86 186 1623 5086
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TrueFocus>

            <div className="film-card p-8">
              <h2 className="text-2xl font-chinese-bold mb-6">工作时间</h2>
              <div className="space-y-2 text-film-300 font-chinese-regular">
                <p>周一 - 周五: 9:00 - 18:00</p>
                <p>周六 - 周日: 休息</p>
              </div>
            </div>

            <div className="film-card p-8">
              <h2 className="text-2xl font-chinese-bold mb-6">关注我们</h2>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://www.linkedin.com/company/106689864/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/logo-linkedin.png" 
                    alt="LinkedIn" 
                    className="h-10 w-auto"
                  />
                </a>
                <button
                  onClick={() => setShowPopup(true)}
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/logo-xhs.png" 
                    alt="小红书" 
                    className="h-10 w-auto"
                  />
                </button>
              </div>
            </div>

            {/* Popup Modal */}
            {showPopup && (
              <div 
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                onClick={() => setShowPopup(false)}
              >
                <div 
                  className="film-card p-4 max-w-lg w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute -top-2 -right-2 bg-film-700 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-film-600 transition-colors z-10"
                    >
                      ✕
                    </button>
                    <img 
                      src="/popup.jpg" 
                      alt="小红书二维码" 
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="film-card p-8">
            <h2 className="text-2xl font-chinese-bold mb-6">发送消息</h2>
            
            {/* Success Message */}
            {showSuccessMessage && (
              <div className="mb-6 p-4 rounded-lg bg-green-900/50 border border-green-600 text-green-200">
                <p className="font-chinese-bold mb-2">🎉 提交成功！</p>
                <p className="text-sm">感谢您的留言！我们会尽快与您联系。</p>
              </div>
            )}

            <form action="https://formspree.io/f/xzdvnlqo" method="POST" className="space-y-6">
              {/* Hidden fields for Formspree */}
              <input type="hidden" name="_subject" value="来自RelaxiStudio.com的联系表单" />
              <input type="hidden" name="_next" value="/contact?success=true" />

              <div>
                <label htmlFor="name" className="block text-sm font-chinese-regular mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-film-800 border border-film-600 text-film-100 focus:border-film-400 focus:outline-none transition-colors"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-chinese-regular mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-film-800 border border-film-600 text-film-100 focus:border-film-400 focus:outline-none transition-colors"
                  placeholder="请输入您的邮箱"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-chinese-regular mb-2">
                  主题 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-film-800 border border-film-600 text-film-100 focus:border-film-400 focus:outline-none transition-colors"
                  placeholder="请输入消息主题"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-chinese-regular mb-2">
                  消息内容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-film-800 border border-film-600 text-film-100 focus:border-film-400 focus:outline-none transition-colors resize-none"
                  placeholder="请描述您的需求或想法..."
                />
              </div>

              <button type="submit" className="w-full film-button">
                发送消息
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-6xl mx-auto mt-12">
          <TrueFocus>
            <div className="film-card p-8">
              <h2 className="text-2xl font-chinese-bold mb-6">公司位置</h2>
              <Map />
            </div>
          </TrueFocus>
        </div>
      </section>
    </div>
  )
}

export default Contact