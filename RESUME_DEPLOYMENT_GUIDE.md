# Resume Deployment Guide

## 问题描述
在不同电脑或部署环境中，简历文件 `Makayla_Resume.pdf` 可能显示 404 错误。

## 原因分析
这个问题通常由以下原因造成：

1. **路径解析差异**：不同环境对相对路径和绝对路径的解析可能不同
2. **文件位置**：简历文件必须放在 `public/` 目录中
3. **构建配置**：Vite 需要正确复制静态文件到构建目录

## 解决方案

### 1. 文件位置确认
确保简历文件位于正确位置：
```
your-project/
├── public/
│   └── Makayla_Resume.pdf  ← 简历文件必须在这里
├── src/
└── ...
```

### 2. 路径策略
当前实现使用多重路径策略：
- 首先尝试相对路径：`Makayla_Resume.pdf`
- 如果失败，尝试绝对路径：`/Makayla_Resume.pdf`
- 最后尝试完整URL：`${origin}/Makayla_Resume.pdf`

### 3. 部署检查清单

#### 开发环境
- [ ] 文件在 `public/` 目录中
- [ ] 使用 `npm run dev` 启动
- [ ] 访问 `http://localhost:8080`

#### 生产环境
- [ ] 运行 `npm run build`
- [ ] 检查 `dist/` 目录是否包含 `Makayla_Resume.pdf`
- [ ] 确保服务器配置正确处理静态文件

### 4. 服务器配置

#### Nginx 示例
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 确保 PDF 文件可以被访问
    location ~* \.pdf$ {
        add_header Content-Type application/pdf;
        add_header Content-Disposition inline;
    }
}
```

#### Apache 示例
```apache
<Directory "/path/to/your/dist">
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
    
    # 处理 PDF 文件
    <FilesMatch "\.pdf$">
        Header set Content-Type "application/pdf"
        Header set Content-Disposition "inline"
    </FilesMatch>
</Directory>
```

### 5. 调试步骤

1. **检查浏览器控制台**
   - 查看是否有路径相关的错误信息
   - 确认 `openResume` 函数的日志输出

2. **验证文件访问**
   - 直接在浏览器中访问 `your-domain.com/Makayla_Resume.pdf`
   - 检查服务器返回的状态码

3. **检查文件权限**
   - 确保服务器有权限读取 PDF 文件
   - 检查文件是否被正确复制到部署目录

### 6. 常见问题

#### Q: 本地可以访问，但部署后不行
A: 检查服务器配置和文件路径

#### Q: 显示 404 错误
A: 确认文件在正确位置，检查服务器配置

#### Q: 下载的是空白文件
A: 检查文件是否损坏，确认服务器正确提供文件

## 技术实现

### 当前代码结构
```typescript
// src/lib/utils.ts
export const openResume = () => {
  // 获取当前环境信息
  const currentUrl = window.location.href;
  const currentPath = window.location.pathname;
  const currentOrigin = window.location.origin;
  
  // 尝试多重路径
  const resumePath = 'Makayla_Resume.pdf';
  
  try {
    const newWindow = window.open(resumePath, '_blank');
    if (newWindow) {
      console.log('Resume window opened successfully');
    } else {
      // 回退到绝对路径
      window.open('/Makayla_Resume.pdf', '_blank');
    }
  } catch (error) {
    // 最终回退
    window.open(`${currentOrigin}/Makayla_Resume.pdf`, '_blank');
  }
};
```

### 使用位置
- `src/components/Hero.tsx` - 主页按钮
- `src/components/Navigation.tsx` - 导航栏按钮
- `src/components/Contact.tsx` - 联系页面按钮

## 联系支持
如果问题仍然存在，请：
1. 检查浏览器控制台的错误信息
2. 确认服务器配置
3. 验证文件位置和权限
4. 提供具体的错误信息和环境详情
