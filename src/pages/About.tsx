import { Link } from 'react-router-dom'
import TrueFocus from '../components/animations/TrueFocus'
import DecryptedText from '../components/animations/DecryptedText'
import SpotlightCard from '../components/SpotlightCard'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <TrueFocus>
          <h1 className="text-5xl md:text-6xl font-chinese-bold font-bold mb-6 text-glow">
            关于 RELAXI
          </h1>
          <p className="text-xl text-film-400 max-w-3xl mx-auto font-chinese-regular">
            融合艺术与科技，创造独特的沉浸式体验
          </p>
        </TrueFocus>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-6 py-20 border-t border-film-800">
        <div className="max-w-4xl mx-auto">
          <TrueFocus>
            <h2 className="text-4xl md:text-5xl font-chinese-bold text-center mb-16">
              我们的故事
            </h2>
          </TrueFocus>
          <TrueFocus>
            <SpotlightCard className="mb-12" hideContentOnHover={false}>
              <h3 className="text-2xl font-chinese-bold mb-4">创立初衷</h3>
              <p className="text-film-300 mb-4 font-chinese-regular">
                Relaxi Studio 成立于2024年，源于对沉浸式体验和AI视觉技术的纯粹热爱，我们希望籍此两者结合，打造出令人难忘的数字体验。
              </p>
              <p className="text-film-300 font-chinese-regular">
                从最初的VR内容开发，到如今的全方位沉浸式体验解决方案，我们致力于探索人体感知与传统产业及业务的结合，推动行业创新与发展。
              </p>
            </SpotlightCard>
          </TrueFocus>
          <TrueFocus>
            <SpotlightCard hideContentOnHover={false}>
              <h3 className="text-2xl font-chinese-bold mb-4">我们的使命</h3>
              <p className="text-film-300 mb-4 font-chinese-regular">
                RELAXI STUDIO 致力于用沉浸式技术以及人工智能来重塑传统行业，作为一家在数字创新领域中独树一帜的企业，我们不仅探索技术，更创造体验。 
              </p>
              <p className="text-film-300 font-chinese-regular">
                无论是XR元宇宙，还是LBE空间叙事，功能性游戏，声音和视觉等不同载体，我们都向用户传递更好的具身体验，并分享快乐。
              </p>
            </SpotlightCard>
          </TrueFocus>
        </div>
      </section>

      {/* Founder */}
      <section className="container mx-auto px-6 py-20 border-t border-film-800">
        <div className="max-w-4xl mx-auto">
          <TrueFocus>
            <h2 className="text-4xl md:text-5xl font-chinese-bold text-center mb-16">
              创始人
            </h2>
          </TrueFocus>
          <TrueFocus>
            <SpotlightCard hideContentOnHover={false}>
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
                <div className="p-4 border border-film-700 rounded-3xl">
                  <img 
                    src="/icon.png" 
                    alt="张彪 Joe - 创始人 & CEO" 
                    className="w-full aspect-square object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-chinese-bold mb-2">
                    <DecryptedText text="张彪 Joe" />
                  </h3>
                  <p className="text-film-400 mb-4 font-chinese-regular">创始人 & CEO</p>
                  <p className="text-film-300 mb-4 font-chinese-regular">
                    前VR硬件大厂负责inhouse内容制作 | 上海游戏产业孵化器创业导师 | 长三角AIGC数字人产业联盟智库专家
                  </p>
                  <p className="text-film-300 font-chinese-regular">
                    声音设计师 | 空间音频专家
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </TrueFocus>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 py-20 border-t border-film-800">
        <div className="max-w-4xl mx-auto">
          <TrueFocus>
            <h2 className="text-4xl md:text-5xl font-chinese-bold text-center mb-16">
              我们的价值观
            </h2>
          </TrueFocus>
          <div className="grid md:grid-cols-3 gap-8">
            <TrueFocus>
              <SpotlightCard className="text-center h-full" hideContentOnHover={false}>
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-chinese-bold mb-2">创新</h3>
                <p className="text-film-300 text-sm font-chinese-regular">
                  不断探索新技术，但不刻意随波逐流，我们追求真正有意义的创新
                </p>
              </SpotlightCard>
            </TrueFocus>
            <TrueFocus>
              <SpotlightCard className="text-center h-full" hideContentOnHover={false}>
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-chinese-bold mb-2">品质</h3>
                <p className="text-film-300 text-sm font-chinese-regular">
                  不强求完美的用户体验，只专注独特的价值传递
                </p>
              </SpotlightCard>
            </TrueFocus>
            <TrueFocus>
              <SpotlightCard className="text-center h-full" hideContentOnHover={false}>
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-chinese-bold mb-2">合作</h3>
                <p className="text-film-300 text-sm font-chinese-regular">
                  我们始终认为，人是成功合作的核心，我们注重价值观的契合与团队协作
                </p>
              </SpotlightCard>
            </TrueFocus>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 border-t border-film-800 text-center">
        <TrueFocus>
          <h2 className="text-3xl md:text-4xl font-chinese-bold mb-8">
            愿意聊聊？
          </h2>
          <p className="text-film-300 mb-8 max-w-2xl mx-auto font-chinese-regular">
            有好玩的点子？合作机会？或者只是单纯想打个招呼？我们很乐意你来SAY HI！
          </p>
          <Link to="/contact" className="film-button">
            联系我们
          </Link>
        </TrueFocus>
      </section>
    </div>
  )
}

export default About
