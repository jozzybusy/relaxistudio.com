# Vercel网页部署指南

## 前提条件
- Git代码已成功推送到GitHub仓库
- 拥有GitHub账号
- 拥有Vercel账号（可用GitHub账号登录）

## 部署步骤

### 第一步：登录Vercel

1. 访问：https://vercel.com
2. 点击右上角的"Log In"按钮
3. 选择"Continue with GitHub"
4. 授权Vercel访问您的GitHub账号
5. 如需要，填写基本信息完成注册

### 第二步：创建新项目

1. 登录后，点击右上角的"Add New"按钮
2. 选择"Project"选项

### 第三步：导入GitHub仓库

1. 在"Import Git Repository"页面，您会看到GitHub仓库列表
2. 找到并选择您的仓库：`jozzybusy/relaxistudio.com`
3. 点击"Import"按钮

### 第四步：配置项目设置

Vercel会自动检测到这是Vite项目，配置如下：

#### Framework Preset（框架预设）
- 选择：`Vite`（应该会自动选中）

#### Project Settings（项目设置）

**Build and Output Settings：**
- Root Directory（根目录）：`./`
- Build Command（构建命令）：`npm run build`
- Output Directory（输出目录）：`dist`

**Environment Variables（环境变量）：**
- 暂时不需要配置环境变量

### 第五步：部署

1. 检查所有配置是否正确
2. 点击底部的"Deploy"按钮
3. 部署过程通常需要1-3分钟
4. 您可以看到实时构建日志

### 第六步：部署完成

部署成功后，您会看到：
- ✅ 绿色的"Congratulations"提示
- 一个免费域名，例如：`https://relaxistudio-com.vercel.app`

## 访问您的网站

1. 点击"Continue to Dashboard"按钮
2. 在项目概览页面，点击域名链接
3. 您的网站现在应该可以正常访问了！

## 后续配置

### 配置自定义域名（可选）

如果您拥有域名（如`relaxistudio.com`），可以这样配置：

1. 在Vercel项目中，点击"Settings"标签
2. 选择"Domains"
3. 点击"Add Domain"
4. 输入您的域名：`relaxistudio.com`
5. 按照Vercel提供的说明配置DNS记录
6. 等待DNS传播（通常1-24小时）

### 配置分支保护（可选）

1. 在GitHub仓库设置中，选择"Branches"
2. 添加main分支保护规则
3. 要求Pull Request审查
4. 启用状态检查

## 更新网站

每次您修改代码后：

1. 提交更改到本地Git：
   ```bash
   git add .
   git commit -m "描述您的更改"
   ```

2. 推送到GitHub：
   ```bash
   git push origin main
   ```

3. Vercel会自动检测到推送并重新部署

4. 部署完成后，访问您的网站查看更新

## 监控和调试

### 查看部署日志

1. 在Vercel项目页面，点击"Deployments"标签
2. 点击任何一次部署记录
3. 查看详细的构建日志

### 查看网站性能

1. 在项目概览页面，可以看到访问统计
2. Vercel Analytics提供详细的性能数据
3. 查看Core Web Vitals指标

## 常见问题

### Q: 部署失败怎么办？

**解决方案：**
1. 检查部署日志中的错误信息
2. 确保本地构建成功（运行`npm run build`）
3. 检查package.json中的依赖是否正确
4. 查看是否有TypeScript错误

### Q: 404错误怎么办？

**解决方案：**
1. 检查路由配置是否正确
2. 确保React Router使用正确
3. 在vite.config.ts中配置base路径（如果需要）

### Q: 图片/视频无法加载？

**解决方案：**
1. 确保public文件夹中的资源已提交到Git
2. 检查文件路径是否正确
3. 查看浏览器控制台的错误信息

### Q: 构建太慢怎么办？

**解决方案：**
1. 使用Vercel的缓存功能
2. 优化依赖项
3. 减少不必要的资源文件

### Q: 如何设置环境变量？

**操作步骤：**
1. 进入Vercel项目设置
2. 点击"Environment Variables"
3. 添加键值对
4. 选择环境（Production/Preview/Development）
5. 保存并重新部署

## 免费套餐限制

Vercel免费套餐包括：
- 无限项目数量
- 每月100GB带宽
- 每月6000分钟构建时间
- 自动HTTPS
- 全球CDN

如果超出限制，可以考虑：
- 优化资源大小
- 使用Vercel Pro套餐（$20/月）

## 联系支持

如果遇到问题：
- Vercel文档：https://vercel.com/docs
- Vercel Discord社区：https://vercel.com/discord
- 提交工单：在Vercel控制台中

## 部署检查清单

部署完成后，请检查：

- [ ] 网站可以正常访问
- [ ] 所有页面链接工作正常
- [ ] LiquidEther背景动画显示正常
- [ ] 项目图片和视频可以加载
- [ ] 联系表单功能正常
- [ ] 移动端响应式布局正常
- [ ] 页面加载速度可接受
- [ ] 没有浏览器控制台错误
- [ ] SEO元数据正确设置

恭喜！您的网站现在应该已经成功部署并可以访问了！🎉