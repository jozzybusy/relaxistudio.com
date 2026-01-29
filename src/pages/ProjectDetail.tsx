import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TrueFocus from '../components/animations/TrueFocus'
import PixelTransition from '../components/PixelTransition'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  fullDescription: string
  challenges: string[]
  solutions: string[]
  features: string[]
  technologies: string[]
  images?: string[]
  videos?: string[]
  thumbnails?: string[]
}

const projects: Record<number, Project> = {
  1: {
    id: 1,
    title: "多模态企业展厅",
    category: "VR内容",
    description: "为半导体设备巨头打造的全场景虚拟会客空间",
    image: "/relaxiprojects/多模态企业展厅.png",
    fullDescription: "本项目为一家全球领先的半导体设备制造商打造了多模态虚拟企业展厅。通过融合VR技术、交互式3D模型、云计算平台和多人语音空间音频，为客户提供了沉浸式的品牌展示和公开活动举办空间。",
    challenges: [
      "需要准确还原复杂的半导体设备细节",
      "支持1000人从不同终端接入在线协作",
      "整合实时业务数据",
      "提供多语言支持"
    ],
    solutions: [
      "采用高精度3D建模技术，1:1还原设备细节",
      "开发实时多人协作系统，支持70人同场1000人平行空间在线",
      "通过API集成企业数据系统，实现实时数据展示",
      "内置多语言切换功能，支持全球客户访问"
    ],
    features: [
      "沉浸式3D虚拟展厅",
      "实时多人在线协作",
      "交互式产品演示",
      "智能导览系统",
      "数据可视化大屏",
      "多语言支持"
    ],
    technologies: [
      "Unity 3D",
      "VRTK框架",
      "WebRTC实时通信",
      "Three.js",
      "GraphQL"
    ],
    videos: ["/ASML/追光元宇宙.mp4"],
    thumbnails: ["/ASML/asmlmetaverse.png"]
  },
  2: {
    id: 2,
    title: "沉浸式临床医学精密仪器模拟",
    category: "VR内容",
    description: "VR环境下完整体验医学精密仪器临床操作流程",
    image: "/relaxiprojects/沉浸式临床医学精密仪器模拟.PNG",
    fullDescription: "为医学教育和培训机构开发的沉浸式精密仪器操作模拟系统，让医学生在虚拟环境中安全地学习和实践复杂设备的操作流程。",
    challenges: [
      "精确模拟精密仪器的物理特性",
      "提供真实的触觉反馈",
      "记录和评估学员操作",
      "支持多种操作场景"
    ],
    solutions: [
      "开发高精度物理引擎，模拟真实设备行为",
      "集成力反馈设备，提供触觉交互体验",
      "开发智能评估系统，自动记录和分析操作数据",
      "设计模块化场景，支持快速切换不同培训内容"
    ],
    features: [
      "高精度设备模拟",
      "力反馈触觉交互",
      "智能操作评估",
      "多种培训模式",
      "实时错误提示",
      "操作回放分析"
    ],
    technologies: [
      "Unreal Engine 5",
      "Physics Engine",
      "Haptic Feedback SDK",
      "Machine Learning",
      "TensorFlow"
    ],
    images: ["/medicalproject/1.PNG", "/medicalproject/2.PNG", "/medicalproject/3.PNG", "/medicalproject/4.PNG", "/medicalproject/5.PNG"]
  },
  3: {
    id: 3,
    title: "虚拟演出空间的音频设计",
    category: "空间音频",
    description: "为某品牌打造的VR音视频体验中心",
    image: "/relaxiprojects/虚拟演出空间的音频设计.png",
    fullDescription: "为知名品牌打造的VR音视频体验中心，通过空间音频技术，用户可以在虚拟演出空间中体验沉浸式的音乐和表演艺术。",
    challenges: [
      "创建真实的空间音频效果",
      "支持多种音频格式",
      "优化实时音频处理性能",
      "提供个性化的音频体验"
    ],
    solutions: [
      "采用头部相关传输函数(HRTF)实现精准定位",
      "开发多格式音频解码器，支持主流音频格式",
      "使用Web Audio API和WebGL优化渲染性能",
      "基于用户偏好提供个性化音频设置"
    ],
    features: [
      "3D空间音频",
      "实时音频处理",
      "杜比全景声等多种沉浸式音频格式支持",
      "个性化设置",
      "沉浸式视觉效果",
      "社交观看功能"
    ],
    technologies: [
      "Dolby Atmos",
      "Ambisonics",
      "HRTF",
      "Audiokinetic Wwise",
      "Reaper",
      "Unreal Engine MetaSound",
      "Sound Particles"
    ],
    videos: ["/vrmusic/1.mp4"],
    images: ["/vrmusic/2.png", "/vrmusic/3.png", "/vrmusic/4.png"]
  },
  4: {
    id: 4,
    title: "虚拟内容的声音设计系统",
    category: "空间音频",
    description: "运用于多媒体内容的音频设计解决方案",
    image: "/relaxiprojects/虚拟内容的声音设计系统.png",
    fullDescription: "一套完整的虚拟内容音频设计解决方案，为多媒体内容创作者提供强大的音频设计和后期制作工具。",
    challenges: [
      "支持复杂的音频编辑功能",
      "提供实时预览",
      "集成多种音频效果",
      "优化渲染性能"
    ],
    solutions: [
      "开发波形可视化编辑器，支持精确音频编辑",
      "使用Web Workers实现实时预览",
      "集成专业音频效果库，提供丰富音效",
      "采用GPU加速提升渲染性能"
    ],
    features: [
      "专业音频编辑",
      "实时预览",
      "丰富音效库",
      "多轨混音",
      "音频分析工具",
      "一键导出"
    ],
    technologies: [
      "Web Audio API",
      "Audio Worklet",
      "WASM",
      "FFmpeg.wasm",
      "Redux Toolkit",
      "React",
      "Reason Studios",
      "Bitwig Studio"
    ],
    videos: ["/sounddesign/Figure.mp4", "/sounddesign/Timeline 1.mp4"],
    thumbnails: ["/sounddesign/figuresound.png", "/sounddesign/mediasound.png"],
    images: ["/sounddesign/1.png", "/sounddesign/2.png"]
  },
  5: {
    id: 5,
    title: "物联网工业数字孪生平台",
    category: "AI视觉",
    description: "AI无标记点动捕遥操训练机械臂的VR大空间教学系统",
    image: "/relaxiprojects/物联网工业数字孪生平台.png",
    fullDescription: "融合物联网、AI和VR技术的工业数字孪生平台，为工业机器人培训提供沉浸式的大空间教学体验。",
    challenges: [
      "实现无标记点动作捕捉",
      "实时同步虚拟与物理设备",
      "构建高精度数字孪生",
      "支持大规模并发用户"
    ],
    solutions: [
      "开发基于计算机视觉的无标记点动捕系统",
      "通过5G网络实现毫秒级设备同步",
      "使用高精度3D扫描和建模技术",
      "采用分布式架构支持大规模并发"
    ],
    features: [
      "无标记点动捕",
      "实时同步",
      "高精度数字孪生",
      "大空间定位",
      "多人协作",
      "智能辅助"
    ],
    technologies: [
      "OpenCV",
      "MediaPipe",
      "ROS",
      "Unity 3D",
      "TensorFlow",
      "5G/边缘计算"
    ],
    images: ["/xjlwp/1.jpg", "/xjlwp/2.jpg", "/xjlwp/3.jpg", "/xjlwp/4.jpg", "/xjlwp/5.jpg"]
  },
  6: {
    id: 6,
    title: "肢体驱动的音乐互动系统",
    category: "AI视觉",
    description: "现场舞蹈动作捕捉与音乐控制技术方案",
    image: "/relaxiprojects/肢体驱动的音乐互动系统.jpg",
    fullDescription: "创新的肢体驱动音乐互动系统，通过实时捕捉舞者动作，将其转化为音乐控制信号，实现舞蹈与音乐的深度融合。采用专业级惯性动捕设备、UDP/OSC通信协议和Max/MSP映射技术，实现<50ms超低延迟的实时互动表演。",
    challenges: [
      "实现多关节姿态的精确实时捕捉",
      "将复杂运动数据映射为音乐控制信号",
      "控制整体系统延迟在50ms以内",
      "适应不同舞蹈风格和演出规模"
    ],
    solutions: [
      "采用Rokoko/Xsens专业级惯性动捕套装，提供200-240Hz高精度姿态数据",
      "使用OSC协议进行数据传输，支持多参数高精度映射",
      "建立稳定局域网环境，关闭不必要缓冲，优化传输链路",
      "提供多种配置方案，从入门级到专业级覆盖不同预算需求"
    ],
    features: [
      "200Hz高精度惯性捕捉",
      "实时OSC/MIDI数据传输",
      "Max/MSP智能参数映射",
      "支持Ableton Live集成",
      "触控可视化同步",
      "多设备组合方案"
    ],
    technologies: [
      "Rokoko Smartsuit Pro II",
      "Xsens MVN Link",
      "Ableton Live Suite",
      "Max/MSP",
      "TouchDesigner",
      "OSC/UDP Protocol"
    ],
    videos: ["/mocapmusic/4.mp4"],
    images: ["/mocapmusic/1.jpg", "/mocapmusic/2.jpg", "/mocapmusic/3.jpg"]
  },
  7: {
    id: 7,
    title: "空间领绘VR绘画工作坊",
    category: "VR内容",
    description: "沉浸式VR绘画创作体验",
    image: "/relaxiprojects/空间领绘VR绘画工作坊.jpeg",
    fullDescription: "创新的基于VR绘画的团队有效沟通工作坊体验，通过指令和完成，沟通和协作，提问和反馈，激发创造力和团队合作精神。利用沉浸式VR环境，参与者可以在三维空间中自由绘画，打破传统平面限制，提升表达效果。",
    challenges: [
      "沟通能力已经成为团队中仅次于专业能力的第二重要技能",
      "传统沟通技巧培训缺乏趣味性",
      "在沟通训练中的专注度",
      "传统体验式培训往往缺乏沉浸感"
    ],
    solutions: [
      "创新和趣味性的互动体验，四个环节面对不同的沟通任务",
      "引导师和VR绘画师双人协作，即使对VR操作和空间绘画不熟悉的参与者也能轻松上手",
      "突破传统平面绘画限制，学会站在不同角色的角度思考问题",
      "快速掌握VR绘画技巧，并应用于沟通训练，模拟工作场景中需要快速上手的极具挑战的任务"
    ],
    features: [
      "3D空间绘画",
      "丰富笔刷库",
      "实时协作",
      "图层管理",
      "一键导出",
      "VR沉浸体验"
    ],
    technologies: [
      "Unity 3D",
      "MultiBrush",
      "WebXR",
      "Real-time Sync",
      "GPU Computing",
      "Multiplayer System"
    ],
    images: ["/vrsketch/1.jpeg", "/vrsketch/2.jpeg", "/vrsketch/3.jpeg", "/vrsketch/4.jpeg", "/vrsketch/5.jpeg", "/vrsketch/6.jpg", "/vrsketch/7.jpg", "/vrsketch/8.jpg"]
  },
  8: {
    id: 8,
    title: "广西一键游VR漫游厅",
    category: "VR内容",
    description: "虚拟旅游体验平台",
    image: "/relaxiprojects/广西一键游VR漫游厅.png",
    fullDescription: "基于VR技术的虚拟旅游体验平台，让用户足不出户即可沉浸式游览广西各地的著名景点。通过高精度3D建模和真实的地理环境还原，为用户提供逼真的虚拟旅游体验。",
    challenges: [
      "高精度还原真实景点环境",
      "提供流畅的漫游体验",
      "集成丰富的旅游信息",
      "支持大规模并发访问"
    ],
    solutions: [
      "采用无人机航拍和3D扫描技术，高精度还原景点",
      "优化场景加载和渲染，确保流畅体验",
      "开发智能导览系统，集成景点介绍和历史信息",
      "使用分布式架构支持大规模并发访问"
    ],
    features: [
      "沉浸式景点漫游",
      "智能语音导览",
      "实时天气模拟",
      "互动式体验",
      "多人在线游览",
      "AR/VR双模式"
    ],
    technologies: [
      "Unreal Engine 5",
      "Photogrammetry",
      "3D Scanning",
      "Real-time Rendering",
      "Speech Recognition",
      "Cloud Computing"
    ],
    images: ["/guangxi/1.png", "/guangxi/2.png", "/guangxi/3.png", "/guangxi/4.png", "/guangxi/5.png", "/guangxi/6.jpg", "/guangxi/7.jpg"]
  }
}

const ProjectDetail = () => {
  const { id } = useParams()
  const projectId = parseInt(id || '1')
  const project = projects[projectId as keyof typeof projects] || Object.values(projects)[0]
  const [selectedImage, setSelectedImage] = useState(0)

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">项目未找到</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-film-500">
          <a href="/projects" className="hover:text-white transition-colors">
            ← 返回项目列表
          </a>
        </nav>

        {/* Project Header */}
        <div className="mb-12">
          <span className="text-film-500 text-sm uppercase tracking-wider mb-4 block">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-6xl font-chinese-bold mb-6 text-glow">
            {project.title}
          </h1>
          <p className="text-film-300 text-xl max-w-3xl">
            {project.fullDescription}
          </p>
        </div>

        {/* Image/Video Gallery */}
        <div className="mb-16">
          {project.videos && project.images ? (
            // Mixed Video and Image Gallery for projects 4 and 6
            <>
              <div className="film-card p-8 mb-8">
                {selectedImage < project.videos!.length ? (
                  <video 
                    src={project.videos![selectedImage]} 
                    controls
                    className="w-full rounded-lg"
                  />
                ) : (
                  <img 
                    src={project.images[selectedImage - project.videos!.length]} 
                    alt={`Project image ${selectedImage + 1}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {project.videos!.map((video: string, index: number) => (
                  <div
                    key={`video-${index}`}
                    className={`film-card aspect-video flex items-center justify-center overflow-hidden cursor-pointer transition-all
                      ${selectedImage === index ? 'ring-2 ring-film-400 scale-105' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    {project.thumbnails && project.thumbnails[index] ? (
                      <img 
                        src={project.thumbnails[index]}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-film-700">
                        <span className="text-5xl">🎬</span>
                      </div>
                    )}
                  </div>
                ))}
                {project.images.map((img: string, index: number) => (
                  <div
                    key={`image-${index}`}
                    className={`film-card aspect-video flex items-center justify-center overflow-hidden cursor-pointer transition-all
                      ${selectedImage === project.videos!.length + index ? 'ring-2 ring-film-400 scale-105' : ''}`}
                    onClick={() => setSelectedImage(project.videos!.length + index)}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </>
          ) : project.videos ? (
            // Video Gallery for projects 1 and 4
            <>
              <div className="film-card p-8 mb-8">
                <video 
                  src={project.videos[selectedImage]} 
                  controls
                  className="w-full rounded-lg"
                />
              </div>
              {project.id !== 1 && (
                <div className={`grid gap-4 ${project.videos.length === 1 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                  {project.videos.map((video: string, index: number) => (
                    <div
                      key={index}
                      className={`film-card aspect-video flex items-center justify-center overflow-hidden cursor-pointer transition-all
                        ${selectedImage === index ? 'ring-2 ring-film-400 scale-105' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      {project.thumbnails && project.thumbnails[index] ? (
                        <img 
                          src={project.thumbnails[index]}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-5xl">🎵</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : project.images && (project.id === 2 || project.id === 5 || project.id === 7) ? (
            // Image Gallery for projects 2, 5 and 7
            <>
              <div className="film-card p-8 mb-4">
                <div className="aspect-video flex items-center justify-center bg-film-800 rounded-lg overflow-hidden">
                  <img 
                    src={project.images[selectedImage]} 
                    alt={`Project image ${selectedImage + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className={`grid gap-4 ${project.id === 7 ? 'grid-cols-4' : 'grid-cols-5'}`}>
                {project.images.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`film-card aspect-video flex items-center justify-center transition-all overflow-hidden
                      ${selectedImage === index ? 'ring-2 ring-film-400 scale-105' : ''}`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : project.images ? (
            // Emoji or Image Gallery for other projects
            <>
              <div className="film-card p-8 mb-4">
                <div className="aspect-video flex items-center justify-center bg-film-800 rounded-lg overflow-hidden">
                  {project.id === 8 ? (
                    <img 
                      src={project.images[selectedImage]} 
                      alt={`Project image ${selectedImage + 1}`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-9xl">{project.images[selectedImage]}</span>
                  )}
                </div>
              </div>
              <div className={`grid ${project.id === 8 ? 'grid-cols-4' : 'grid-cols-4'} gap-4`}>
                {project.images.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`film-card aspect-video flex items-center justify-center transition-all overflow-hidden
                      ${selectedImage === index ? 'ring-2 ring-film-400 scale-105' : ''}`}
                  >
                    {project.id === 8 ? (
                      <img 
                        src={img} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl">{img}</span>
                    )}
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>

        {/* Technical Details Section - Only for Project 6 */}
        {project.id === 6 && (
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 推荐动捕设备 */}
              <div className="film-card p-8">
                <h2 className="text-3xl font-chinese-bold mb-6 text-glow">推荐动捕设备</h2>
                <div className="space-y-6">
                  <div className="film-card p-4">
                    <h3 className="text-xl font-bold mb-2 text-white">惯性动捕套装</h3>
                    <ul className="space-y-2 text-film-300">
                      <li>• Rokoko Smartsuit Pro II - 200帧/秒，100米覆盖</li>
                      <li>• Xsens MVN Link - 240Hz专业级，150米工作半径</li>
                      <li>• Noitom Perception Neuron 3 - 入门级，60Hz蓝牙</li>
                    </ul>
                  </div>
                  <div className="film-card p-4">
                    <h3 className="text-xl font-bold mb-2 text-white">光学动捕系统</h3>
                    <ul className="space-y-2 text-film-300">
                      <li>• Vicon/OptiTrack - 最高精度定位</li>
                      <li>• 需要固定追踪区域，适合专业场景</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 数据传输与映射 */}
              <div className="film-card p-8">
                <h2 className="text-3xl font-chinese-bold mb-6 text-glow">数据传输与映射</h2>
                <div className="space-y-6">
                  <div className="film-card p-4">
                    <h3 className="text-xl font-bold mb-2 text-white">通信协议</h3>
                    <ul className="space-y-2 text-film-300">
                      <li>• OSC (Open Sound Control) - 推荐</li>
                      <li>• UDP/TCP - 低延迟实时传输</li>
                      <li>• MIDI - 简化控制场景</li>
                    </ul>
                  </div>
                  <div className="film-card p-4">
                    <h3 className="text-xl font-bold mb-2 text-white">软件平台</h3>
                    <ul className="space-y-2 text-film-300">
                      <li>• Ableton Live Suite - 现场DAW</li>
                      <li>• Max/MSP - 可编程音频环境</li>
                      <li>• TouchDesigner - 视听互动中枢</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 映射技术详解 */}
            <div className="film-card p-8 mb-8">
              <h2 className="text-3xl font-chinese-bold mb-6 text-glow">映射技术与示例</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">核心映射方法</h3>
                  <ul className="space-y-3 text-film-300">
                    <li className="flex items-start">
                      <span className="text-film-400 mr-2 mt-1">▸</span>
                      <span><strong className="text-white">线性缩放：</strong>手臂高度→滤波器频率</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-film-400 mr-2 mt-1">▸</span>
                      <span><strong className="text-white">阈值触发：</strong>跳跃高度→鼓点力度</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-film-400 mr-2 mt-1">▸</span>
                      <span><strong className="text-white">速度控制：</strong>移动速度→BPM变化</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-film-400 mr-2 mt-1">▸</span>
                      <span><strong className="text-white">角度映射：</strong>关节角度→音高参数</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">高级应用</h3>
                  <ul className="space-y-3 text-film-300">
                    <li className="flex items-start">
                      <span className="text-film-400 mr-2 mt-1">▸</span>
                      <span><strong className="text-white">多通道综合：</strong>上身控制音色，下身控制节奏</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-film-400 mr-2 mt-1">▸</span>
                      <span><strong className="text-white">机器学习：</strong>Wekinator训练动作-音效分类</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-film-400 mr-2 mt-1">▸</span>
                      <span><strong className="text-white">动作序列：</strong>特定姿势触发完整乐句</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-film-400 mr-2 mt-1">▸</span>
                      <span><strong className="text-white">持续渐变：</strong>流畅动作产生平滑效果变化</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 中间件与插件 */}
            <div className="film-card p-8 mb-8">
              <h2 className="text-3xl font-chinese-bold mb-6 text-glow">中间件与插件</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="film-card p-4">
                  <h3 className="text-lg font-bold mb-3 text-white">Rokoko Studio</h3>
                  <p className="text-film-300 text-sm">
                    Custom Streaming功能，支持UDP/TCP自定义协议输出关节数据
                  </p>
                </div>
                <div className="film-card p-4">
                  <h3 className="text-lg font-bold mb-3 text-white">Xsens MVN</h3>
                  <p className="text-film-300 text-sm">
                    内置NetStream功能，Unity Live Link插件集成
                  </p>
                </div>
                <div className="film-card p-4">
                  <h3 className="text-lg font-bold mb-3 text-white">Ableton Max</h3>
                  <p className="text-film-300 text-sm">
                    Connection Kit提供OSC Send/Receive设备，快速桥接
                  </p>
                </div>
              </div>
            </div>

            {/* 成功案例 */}
            <div className="film-card p-8">
              <h2 className="text-3xl font-chinese-bold mb-6 text-glow">成功案例</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="film-card p-4">
                  <h3 className="text-lg font-bold mb-2 text-white">诺亦腾 + iClone</h3>
                  <p className="text-film-300 text-sm">
                    使用Perception Neuron套装与Reallusion iClone软件，实现两位表演者同时进行实时捕捉演出，支持复杂互动如对话和舞蹈
                  </p>
                </div>
                <div className="film-card p-4">
                  <h3 className="text-lg font-bold mb-2 text-white">Xsens + Unreal</h3>
                  <p className="text-film-300 text-sm">
                    电子音乐组合ROHKI利用Xsens动作捕捉与Unreal Engine结合，制作实时音乐动画表演，观众同步体验音乐与动画
                  </p>
                </div>
                <div className="film-card p-4">
                  <h3 className="text-lg font-bold mb-2 text-white">度量科技光学捕捉</h3>
                  <p className="text-film-300 text-sm">
                    第16届中国国际影视节目展中，使用12台Mars 2H光学动捕摄像机对舞者进行实时捕捉，展示动捕在现场舞台的应用
                  </p>
                </div>
                <div className="film-card p-4">
                  <h3 className="text-lg font-bold mb-2 text-white">WORM移动应用</h3>
                  <p className="text-film-300 text-sm">
                    使用手机加速度传感器将舞蹈动作转换为音符，展示了多设备混用（智能手环/手表）的实现可能性
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Standard Two Column Layout - For other projects */}
        {project.id !== 6 && (
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Challenges & Solutions */}
            <div>
              <div className="film-card p-8 mb-8">
                <h2 className="text-3xl font-chinese-bold mb-6 text-glow">面临的挑战</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-film-400 mr-3 mt-1">•</span>
                      <span className="text-film-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="film-card p-8">
                <h2 className="text-3xl font-chinese-bold mb-6 text-glow">解决方案</h2>
                <ul className="space-y-4">
                  {project.solutions.map((solution: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-film-400 mr-3 mt-1">✓</span>
                      <span className="text-film-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Features & Technologies */}
            <div>
              <div className="film-card p-8 mb-8">
                <h2 className="text-3xl font-chinese-bold mb-6 text-glow">核心功能</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="film-card p-4 text-center">
                      <span className="text-film-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="film-card p-8">
                <h2 className="text-3xl font-chinese-bold mb-6 text-glow">技术栈</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="film-button text-xs px-4 py-2 font-tech-logo"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Demo Section */}
        <div className="film-card p-12 text-center mb-16">
          <h2 className="text-4xl font-chinese-bold mb-4">
            想要了解更多？
          </h2>
          <p className="text-film-300 mb-8 font-chinese-regular max-w-2xl mx-auto">
            我们可以为您展示更详细的技术实现方案和演示视频
          </p>
          <Link to="/contact" className="film-button inline-block">
            预约演示
          </Link>
        </div>

        {/* Related Projects */}
        <div>
          <h2 className="text-3xl font-chinese-bold mb-8 text-center">相关项目</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(projects)
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link 
                  key={relatedProject.id} 
                  to={`/projects/${relatedProject.id}`}
                  className="w-full block"
                >
                  <PixelTransition
                    firstContent={
                      <img 
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover"
                      />
                    }
                    secondContent={
                      <div className="w-full h-full flex flex-col items-center justify-center bg-film-700 p-6">
                        <div className="text-center">
                          <span className="text-film-500 text-sm uppercase tracking-wider mb-2 block">
                            {relatedProject.category}
                          </span>
                          <h3 className="text-xl font-chinese-bold mb-2 text-white">
                            {relatedProject.title}
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
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail