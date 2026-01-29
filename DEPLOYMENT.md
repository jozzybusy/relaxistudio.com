# 部署指南 - RelaxiStudio.com

## 部署步骤

### 1. 创建GitHub仓库

1. 访问 https://github.com/new
2. 仓库名称：`relaxistudio.com`（或您喜欢的名称）
3. 设置为Public或Private（推荐Private）
4. 不要初始化README、.gitignore或license（我们已经有了）
5. 点击"Create repository"

### 2. 连接本地仓库到GitHub

在项目目录中执行以下命令：

```bash
# 添加远程仓库（替换YOUR_USERNAME为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/relaxistudio.com.git

# 创建初始提交
git commit -m "Initial commit: Relaxi Studio website"

# 推送到GitHub
git branch -M main
git push -u origin main
```

### 3. 在Vercel部署

#### 方法A：通过Vercel网站部署（推荐）

1. 访问 https://vercel.com
2. 使用GitHub账号登录
3. 点击"Add New" -> "Project"
4. 导入您的GitHub仓库
5. Vercel会自动检测到Vite项目
6. 配置如下：
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. 点击"Deploy"

#### 方法B：通过Vercel CLI部署

```bash
# 安装Vercel CLI
npm i -g vercel

# 登录Vercel
vercel login

# 部署项目
vercel

# 按照提示操作：
# - 连接到现有项目
# - 选择GitHub
# - 选择relaxistudio.com仓库
```

### 4. 配置域名（可选）

#### 获取免费域名

1. Vercel会自动分配一个域名，如：`relaxistudio.vercel.app`
2. 这是免费的，可以直接使用

#### 购买自定义域名

如果您想使用 `relaxistudio.com`：

1. 在域名注册商处购买域名（Namecheap, GoDaddy, 阿里云等）
2. 在Vercel项目设置中：
   - 进入Settings -> Domains
   - 输入域名：`relaxistudio.com`
   - 添加A记录或CNAME记录（Vercel会提供具体配置）
3. 更新DNS记录（通常1-2小时生效）

### 5. 环境变量（如需要）

如果有敏感信息，可以在Vercel中配置环境变量：
- 项目设置 -> Environment Variables
- 添加键值对
- 重新部署生效

## 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 所有页面链接正常工作
- [ ] LiquidEther背景动画显示正常
- [ ] 项目图片和视频可以加载
- [ ] 联系表单功能正常
- [ ] 移动端响应式布局正常
- [ ] 页面加载速度可接受

## 常见问题

### 构建失败
- 检查package.json中的scripts是否正确
- 查看Vercel部署日志

### 404错误
- 确保vite.config.ts中配置了正确的base路径
- 检查路由配置

### 图片/视频无法加载
- 确保public文件夹中的资源都被正确提交
- 检查文件路径是否正确

## 更新网站

每次更新代码后：

```bash
git add .
git commit -m "描述您的更改"
git push
```

Vercel会自动检测到推送并重新部署。

## 技术栈

- **框架**: React + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **部署平台**: Vercel
- **动画**: Framer Motion + Three.js
- **路由**: React Router

## 联系支持

如遇问题，可以：
- 查看Vercel文档：https://vercel.com/docs
- 查看React文档：https://react.dev
- 查看Vite文档：https://vitejs.dev