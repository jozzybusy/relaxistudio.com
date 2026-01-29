import { Link } from 'react-router-dom'
import TrueFocus from '../components/animations/TrueFocus'
import DecryptedText from '../components/animations/DecryptedText'
import SpotlightCard from '../components/SpotlightCard'

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <TrueFocus>
          <h1 className="text-5xl md:text-6xl font-chinese-bold font-bold mb-6 text-glow">
            我们的服务
          </h1>
          <p className="text-xl text-film-400 max-w-3xl mx-auto font-chinese-regular">
            结合沉浸式技术和AI视觉解决方案，为您创造独特的数字体验
          </p>
        </TrueFocus>
      </section>

      {/* Immersive Content */}
      <section className="container mx-auto px-6 py-20 border-t border-film-800">
        <TrueFocus>
          <h2 className="text-4xl md:text-5xl font-chinese-bold text-center mb-16">
            沉浸式内容制作
          </h2>
        </TrueFocus>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <TrueFocus>
            <SpotlightCard className="h-full" backgroundImage="/Services/VR内容开发.png">
              <h3 className="text-2xl font-chinese-bold mb-4">VR内容开发</h3>
              <p className="text-film-300 mb-4 font-chinese-regular">
                创造完全沉浸式的虚拟现实体验，从概念到实现
              </p>
              <ul className="text-film-400 space-y-2 font-chinese-regular">
                <li>• VR应用开发</li>
                <li>• 360度全景内容</li>
                <li>• 交互式VR体验</li>
                <li>• VR硬件集成</li>
              </ul>
            </SpotlightCard>
          </TrueFocus>
          
          <TrueFocus>
            <SpotlightCard className="h-full" backgroundImage="/Services/空间音频制作.png">
              <h3 className="text-2xl font-chinese-bold mb-4">空间音频制作</h3>
              <p className="text-film-300 mb-4 font-chinese-regular">
                打造立体环绕的声场，让声音也成为体验的一部分
              </p>
              <ul className="text-film-400 space-y-2 font-chinese-regular">
                <li>• 3D空间音频</li>
                <li>• 双耳声场技术</li>
                <li>• 声音定位系统</li>
                <li>• 沉浸式音效设计</li>
              </ul>
            </SpotlightCard>
          </TrueFocus>
          
          <TrueFocus>
            <SpotlightCard className="h-full" backgroundImage="/Services/交互式体验设计.png">
              <h3 className="text-2xl font-chinese-bold mb-4">交互式体验设计</h3>
              <p className="text-film-300 mb-4 font-chinese-regular">
                设计直观自然的交互方式，让用户轻松驾驭技术
              </p>
              <ul className="text-film-400 space-y-2 font-chinese-regular">
                <li>• 手势识别交互</li>
                <li>• 触觉反馈系统</li>
                <li>• 自适应界面</li>
                <li>• 多模态交互</li>
              </ul>
            </SpotlightCard>
          </TrueFocus>
        </div>
      </section>

      {/* AI Vision */}
      <section className="container mx-auto px-6 py-20 border-t border-film-800">
        <TrueFocus>
          <h2 className="text-4xl md:text-5xl font-chinese-bold text-center mb-16">
            AI视觉解决方案
          </h2>
        </TrueFocus>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <TrueFocus>
            <SpotlightCard className="h-full" backgroundImage="/Services/计算机视觉应用.png">
              <h3 className="text-2xl font-chinese-bold mb-4">计算机视觉应用</h3>
              <p className="text-film-300 mb-4 font-chinese-regular">
                让机器看见并理解世界，实现智能感知
              </p>
              <ul className="text-film-400 space-y-2 font-chinese-regular">
                <li>• 图像识别</li>
                <li>• 目标检测</li>
                <li>• 场景理解</li>
                <li>• 实时分析</li>
              </ul>
            </SpotlightCard>
          </TrueFocus>
          
          <TrueFocus>
            <SpotlightCard className="h-full" backgroundImage="/Services/人体姿态识别.png">
              <h3 className="text-2xl font-chinese-bold mb-4">人体姿态识别</h3>
              <p className="text-film-300 mb-4 font-chinese-regular">
                精准捕捉人体动作，创造自然的交互体验
              </p>
              <ul className="text-film-400 space-y-2 font-chinese-regular">
                <li>• 骨骼追踪</li>
                <li>• 动作识别</li>
                <li>• 表情分析</li>
                <li>• 手势控制</li>
              </ul>
            </SpotlightCard>
          </TrueFocus>
          
          <TrueFocus>
            <SpotlightCard className="h-full" backgroundImage="/Services/AI驱动交互.png">
              <h3 className="text-2xl font-chinese-bold mb-4">AI驱动交互</h3>
              <p className="text-film-300 mb-4 font-chinese-regular">
                结合AI算法，创造智能化、个性化的体验
              </p>
              <ul className="text-film-400 space-y-2 font-chinese-regular">
                <li>• 智能推荐</li>
                <li>• 自适应界面</li>
                <li>• 自然语言处理</li>
                <li>• 个性化体验</li>
              </ul>
            </SpotlightCard>
          </TrueFocus>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 border-t border-film-800 text-center">
        <TrueFocus>
          <h2 className="text-3xl md:text-4xl font-chinese-bold mb-8">
            需要定制化的解决方案？
          </h2>
          <p className="text-film-300 mb-8 max-w-2xl mx-auto font-chinese-regular">
            告诉我们您的需求，我们将为您量身打造最合适的技术方案
          </p>
          <Link to="/contact" className="film-button">
            立即咨询
          </Link>
        </TrueFocus>
      </section>
    </div>
  )
}

export default Services
