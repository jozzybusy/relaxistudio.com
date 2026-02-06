import { useState } from 'react'
import { Link } from 'react-router-dom'
import TrueFocus from '../components/animations/TrueFocus'
import PixelTransition from '../components/PixelTransition'
import { Link as RouterLink } from 'react-router-dom'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [showAll, setShowAll] = useState(false)
  const projects = [
    {
      id: 1,
      title: "多模态企业展厅",
      category: "VR内容",
      description: "为半导体设备巨头打造的全场景虚拟会客空间",
      image: "/relaxiprojects/多模态企业展厅.png",
    },
    {
      id: 2,
      title: "沉浸式临床医学精密仪器模拟",
      category: "VR内容",
      description: "VR环境下完整体验医学精密仪器临床操作流程",
      image: "/relaxiprojects/沉浸式临床医学精密仪器模拟.PNG",
    },
    {
      id: 3,
      title: "虚拟演出空间的音频设计",
      category: "空间音频",
      description: "为品牌打造的VR音视频体验中心",
      image: "/relaxiprojects/虚拟演出空间的音频设计.png",
    },
    {
      id: 4,
      title: "虚拟内容的声音设计系统",
      category: "空间音频",
      description: "运用于多媒体内容的音频设计解决方案",
      image: "/relaxiprojects/虚拟内容的声音设计系统.png",
    },
    {
      id: 5,
      title: "物联网工业数字孪生平台",
      category: "AI视觉",
      description: "AI无标记点动捕遥操训练机械臂的VR大空间教学系统",
      image: "/relaxiprojects/物联网工业数字孪生平台.png",
    },
    {
      id: 6,
      title: "肢体驱动的音乐互动系统",
      category: "AI视觉",
      description: "现场舞蹈动作捕捉与音乐控制技术方案",
      image: "/relaxiprojects/肢体驱动的音乐互动系统.jpg",
    },
    {
      id: 7,
      title: "空间领绘VR绘画工作坊",
      category: "VR内容",
      description: "沉浸式VR绘画创作体验",
      image: "/relaxiprojects/空间领绘VR绘画工作坊.jpeg",
    },
    {
      id: 8,
      title: "广西一键游VR漫游厅",
      category: "VR内容",
      description: "虚拟旅游体验平台",
      image: "/relaxiprojects/广西一键游VR漫游厅.png",
    },
  ]

  const categories = ["全部", "VR内容", "AI视觉", "空间音频"]

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === '全部' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  // Show only 6 projects by default, or all when showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setShowAll(false) // Reset showAll when changing category
  }

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-chinese-bold text-center mb-16 text-glow">
          RELAXI 项目
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`film-button text-xs ${
                selectedCategory === category ? 'ring-2 ring-film-400' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedProjects.map((project) => (
            <TrueFocus key={project.id} className="w-full">
              <Link to={`/projects/${project.id}`}>
                <PixelTransition
                  firstContent={
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  }
                  secondContent={
                    <div className="w-full h-full flex flex-col items-center justify-center bg-film-700 p-6">
                      <div className="text-center">
                        <span className="text-film-500 text-sm uppercase tracking-wider mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-chinese-bold mb-2 text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  }
                  gridSize={8}
                  pixelColor="#ffffff"
                  once={false}
                  animationStepDuration={0.4}
                  className="w-full"
                  aspectRatio="56.25%"
                />
              </Link>
            </TrueFocus>
          ))}
        </div>

        {/* Load More */}
        {filteredProjects.length > 6 && !showAll && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="film-button"
            >
              查看更多项目
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto mt-20">
          <div className="film-card p-10 text-center">
            <h2 className="text-3xl font-chinese-bold mb-6">
              想要看到您的项目在这里展示吗？
            </h2>
            <p className="text-film-300 mb-8 font-chinese-regular">
              让我们一起讨论如何将您的想法变为现实
            </p>
            <RouterLink to="/contact" className="film-button inline-block">
              开始您的项目
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects