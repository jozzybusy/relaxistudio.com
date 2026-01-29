# Relaxi Studio 官方网站

Relaxi Studio 官方网站 - 专注于沉浸式内容制作和AI视觉解决方案的创意工作室

## 项目概述

本项目是一个使用 React + TypeScript + Tailwind CSS 构建的单页应用，采用黑白胶片风格设计。

### 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **路由**: React Router v6
- **动画**: Framer Motion
- **设计风格**: 黑白胶片风格

## 项目结构

```
relaxistudio.com/
├── public/              # 静态资源
├── src/
│   ├── components/      # 可复用组件
│   │   └── Navbar.tsx # 导航组件
│   ├── pages/          # 页面组件
│   │   ├── Home.tsx    # 首页
│   │   ├── About.tsx   # 关于我们
│   │   ├── Services.tsx # 服务
│   │   ├── Projects.tsx # 项目作品
│   │   └── Contact.tsx # 联系我们
│   ├── App.tsx         # 主应用组件
│   ├── main.tsx        # 入口文件
│   └── index.css       # 全局样式
├── index.html          # HTML模板
├── package.json        # 项目配置
├── tailwind.config.js  # Tailwind配置
├── tsconfig.json       # TypeScript配置
└── vite.config.ts      # Vite配置
```

## 页面说明

### 1. 首页 (Home)
- 公司品牌展示
- 服务概览
- 公司理念

### 2. 关于我们 (About)
- 公司简介
- 创始人介绍
- 价值观

### 3. 服务 (Services)
- 沉浸式内容制作（VR内容、空间音频）
- AI视觉解决方案（计算机视觉、人体姿态识别）

### 4. 项目作品 (Projects)
- 项目展示
- 分类筛选
- 项目详情

### 5. 联系我们 (Contact)
- 联系信息
- 联系表单
- 地图位置

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 设计特点

- **黑白胶片风格**: 单色/灰度调色板，高对比度，复古质感
- **响应式设计**: 适配桌面、平板和移动设备
- **流畅动画**: 使用Framer Motion实现流畅的过渡效果
- **优雅交互**: 悬停效果、过渡动画等

## 待集成功能

- [ ] ReactBits动画组件集成
- [ ] Logo Loop动画
- [ ] Laser Flow效果
- [ ] Image Trail悬停效果
- [ ] Gooey Nav导航
- [ ] Threads背景
- [ ] Shuffle文字动画
- [ ] True Focus效果
- [ ] Decrypted Text动画

## 注意事项

- 当前为初始版本，所有页面内容为示例文本
- 项目图片、视频等素材需要后续添加
- ReactBits动画组件待集成
- 创始人信息、联系方式等需要根据实际情况更新

## 开发进度

- [x] 项目初始化
- [x] Tailwind CSS配置
- [x] 黑白胶片主题设计
- [x] 所有页面基础开发
- [ ] ReactBits动画集成
- [ ] 素材集成
- [ ] 性能优化
- [ ] 部署上线

## 许可证

© 2026 Relaxi Studio. All rights reserved.
