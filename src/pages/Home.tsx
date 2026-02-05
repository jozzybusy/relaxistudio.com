import { Link } from 'react-router-dom'
import TrueFocusText from '../components/TrueFocusText'
import TrueFocus from '../components/animations/TrueFocus'
import LogoLoop from '../components/LogoLoop'
import Carousel from '../components/Carousel'

const serviceLogos = [
  { 
    node: <img 
      src="/clientlogo/1.png" 
      alt="Client 1" 
      className="h-48 object-contain"
    />, 
    title: "Client 1", 
    href: "#client1" 
  },
  { 
    node: <img 
      src="/clientlogo/2.png" 
      alt="Client 2" 
      className="h-48 object-contain"
    />, 
    title: "Client 2", 
    href: "#client2" 
  },
  { 
    node: <img 
      src="/clientlogo/3.png" 
      alt="Client 3" 
      className="h-48 object-contain"
    />, 
    title: "Client 3", 
    href: "#client3" 
  },
  { 
    node: <img 
      src="/clientlogo/4.png" 
      alt="Client 4" 
      className="h-48 object-contain"
    />, 
    title: "Client 4", 
    href: "#client4" 
  },
  { 
    node: <img 
      src="/clientlogo/5.png" 
      alt="Client 5" 
      className="h-48 object-contain"
    />, 
    title: "Client 5", 
    href: "#client5" 
  },
  { 
    node: <img 
      src="/clientlogo/6.png" 
      alt="Client 6" 
      className="h-48 object-contain"
    />, 
    title: "Client 6", 
    href: "#client6" 
  },
  { 
    node: <img 
      src="/clientlogo/7.png" 
      alt="Client 7" 
      className="h-48 object-contain"
    />, 
    title: "Client 7", 
    href: "#client7" 
  },
  { 
    node: <img 
      src="/clientlogo/8.png" 
      alt="Client 8" 
      className="h-48 object-contain"
    />, 
    title: "Client 8", 
    href: "#client8" 
  },
  { 
    node: <img 
      src="/clientlogo/9.png" 
      alt="Client 9" 
      className="h-48 object-contain"
    />, 
    title: "Client 9", 
    href: "#client9" 
  },
  { 
    node: <img 
      src="/clientlogo/10.png" 
      alt="Client 10" 
      className="h-48 object-contain"
    />, 
    title: "Client 10", 
    href: "#client10" 
  },
  { 
    node: <img 
      src="/clientlogo/11.png" 
      alt="Client 11" 
      className="h-48 object-contain"
    />, 
    title: "Client 11", 
    href: "#client11" 
  },
  { 
    node: <img 
      src="/clientlogo/12.png" 
      alt="Client 12" 
      className="h-48 object-contain"
    />, 
    title: "Client 12", 
    href: "#client12" 
  },
]

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Logo - Pinned below navbar */}
      <div className="container mx-auto px-6 pb-8">
        <img 
          src="/logo.png" 
          alt="Relaxi Studio Logo" 
          className="w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] mx-auto object-contain"
        />
      </div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-8">
            <TrueFocusText
              sentence="RELAXI STUDIO"
              separator=" "
              manualMode={true}
              blurAmount={5}
              borderColor="rgb(162, 0, 255)"
              glowColor="hsl(283, 100%, 50%)"
              animationDuration={0.5}
              pauseBetweenAnimations={0.5}
            />
          </div>
          <p className="text-xl md:text-2xl text-film-400 mb-8 font-chinese-bold">
            沉浸式体验开发 | AI视觉解决方案
          </p>
          <p className="text-film-300 mb-12 max-w-2xl mx-auto font-chinese-regular">
            我们专注于将沉浸式技术和传统行业结合，从工业到医疗，设计协同到人力资源，
            XR和AI视觉将带来新的生命力和效率提升。
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/services" className="film-button">
              探索服务
            </Link>
            <Link to="/projects" className="film-button">
              查看作品
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Loop */}
      <div className="container mx-auto px-6 py-12 border-b border-film-800 overflow-hidden">
        <LogoLoop
          logos={serviceLogos}
          speed={40}
          direction="left"
          logoHeight={180}
          gap={120}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0a0a0a"
          ariaLabel="Our Technologies"
          className="h-64"
        />
      </div>

      {/* Services Preview */}
      <section className="container mx-auto px-6 py-20 border-t border-film-800">
          <TrueFocus>
            <h2 className="text-4xl md:text-5xl font-chinese-bold text-center mb-16">
              我们提供
            </h2>
          </TrueFocus>
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <TrueFocus>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-chinese-bold mb-4">沉浸式体验开发</h3>
              <p className="text-film-300 mb-4 font-chinese-regular text-center max-w-md">
                VR内容开发和空间音频制作，为您创造身临其境的体验
              </p>
              <div className="w-full flex justify-center">
                <Carousel
                  items={[
                    {
                      title: 'VR内容开发',
                      description: '创建沉浸式虚拟现实体验',
                      id: 1,
                      backgroundImage: '/weoffer/VR内容开发.jpg'
                    },
                    {
                      title: '空间音频制作',
                      description: '打造立体环绕声音效果',
                      id: 2,
                      backgroundImage: '/weoffer/空间音频制作.jpg'
                    },
                    {
                      title: '交互式体验设计',
                      description: '设计用户互动的沉浸界面',
                      id: 3,
                      backgroundImage: '/weoffer/交互式体验设计.png'
                    }
                  ]}
                  baseWidth={560}
                  autoplay={false}
                  autoplayDelay={3000}
                  pauseOnHover={false}
                  loop={false}
                  round={false}
                />
              </div>
            </div>
          </TrueFocus>
          <TrueFocus>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-chinese-bold mb-4">AI视觉解决方案</h3>
              <p className="text-film-300 mb-4 font-chinese-regular text-center max-w-md">
                基于AI视觉的人体感知技术，实现智能化的交互体验
              </p>
              <div className="w-full flex justify-center">
                <Carousel
                  items={[
                    {
                      title: '计算机视觉应用',
                      description: '图像识别与分析处理',
                      id: 1,
                      backgroundImage: '/weoffer/计算机视觉应用.png'
                    },
                    {
                      title: '人体姿态识别',
                      description: '实时动作捕捉与追踪',
                      id: 2,
                      backgroundImage: '/weoffer/人体姿态识别.png'
                    },
                    {
                      title: 'AI驱动的交互',
                      description: '智能化人机交互体验',
                      id: 3,
                      backgroundImage: '/weoffer/AI驱动的交互.png'
                    }
                  ]}
                  baseWidth={560}
                  autoplay={false}
                  autoplayDelay={3000}
                  pauseOnHover={false}
                  loop={false}
                  round={false}
                />
              </div>
            </div>
          </TrueFocus>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-20 border-t border-film-800 text-center">
          <TrueFocus>
            <h2 className="text-3xl md:text-4xl font-chinese-bold mb-8">
              准备开始您的项目了吗？
            </h2>
            <p className="text-film-300 mb-8 max-w-2xl mx-auto font-chinese-regular">
              让我们用创新技术和艺术创意，为您打造独特的沉浸式体验
            </p>
          <Link to="/contact" className="film-button">
            联系我们
          </Link>
        </TrueFocus>
      </section>
    </div>
  )
}

export default Home
