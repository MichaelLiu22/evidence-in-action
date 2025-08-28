# 简历文件 404 问题调试指南

## 🚨 问题描述
文件名 `Makayla_Resume.pdf` 返回 404 错误，无法访问。

## 🔍 调试步骤

### 1. 检查文件位置
确认文件在正确位置：
```
your-project/
├── public/
│   └── Makayla_Resume.pdf  ✅ 文件必须在这里
├── src/
└── ...
```

### 2. 检查构建输出
运行构建后，确认文件被复制：
```bash
npm run build
ls -la dist/
# 应该看到 Makayla_Resume.pdf
```

### 3. 测试不同路径
在浏览器中直接测试这些URL：
- `http://localhost:8080/Makayla_Resume.pdf`
- `http://localhost:8080/./Makayla_Resume.pdf`
- `http://localhost:8080/../Makayla_Resume.pdf`

### 4. 检查服务器配置

#### 开发环境 (Vite)
- 确认 `vite.config.ts` 中 `publicDir: 'public'`
- 确认开发服务器在端口 8080 运行

#### 生产环境
- 确认服务器配置正确处理静态文件
- 检查文件权限
- 确认文件路径配置

### 5. 浏览器控制台调试
点击 "Open Resume" 按钮后，查看控制台输出：
```
🔍 Resume Download Debug Info:
Current URL: http://localhost:8080/
Current Path: /
Current Origin: http://localhost:8080
📁 Trying these paths: ['Makayla_Resume.pdf', '/Makayla_Resume.pdf', ...]
🔄 Attempt 1: Makayla_Resume.pdf
❌ Failed to open window for Makayla_Resume.pdf
```

### 6. 手动测试文件访问
在浏览器控制台中运行：
```javascript
// 测试文件是否存在
fetch('Makayla_Resume.pdf', {method: 'HEAD'})
  .then(response => console.log('Status:', response.status))
  .catch(error => console.error('Error:', error));

// 测试不同路径
fetch('/Makayla_Resume.pdf', {method: 'HEAD'})
  .then(response => console.log('Status:', response.status))
  .catch(error => console.error('Error:', error));
```

### 7. 常见问题排查

#### 问题 1: 文件未复制到构建目录
**症状**: `dist/` 目录中没有 `Makayla_Resume.pdf`
**解决方案**: 检查 `vite.config.ts` 配置

#### 问题 2: 服务器配置错误
**症状**: 开发环境可以访问，生产环境不行
**解决方案**: 检查生产服务器配置

#### 问题 3: 文件权限问题
**症状**: 文件存在但无法访问
**解决方案**: 检查文件权限设置

#### 问题 4: 路径解析问题
**症状**: 某些路径可以，某些不行
**解决方案**: 使用绝对路径或完整URL

### 8. 备用解决方案

#### 方案 1: 使用完整URL
```typescript
const resumeUrl = `${window.location.origin}/Makayla_Resume.pdf`;
window.open(resumeUrl, '_blank');
```

#### 方案 2: 使用 fetch 下载
```typescript
const downloadResume = async () => {
  try {
    const response = await fetch('Makayla_Resume.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Makayla_Resume.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download failed:', error);
  }
};
```

#### 方案 3: 使用锚点链接
```html
<a href="Makayla_Resume.pdf" target="_blank" download>
  Download Resume
</a>
```

### 9. 服务器配置示例

#### Nginx
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 专门处理 PDF 文件
    location ~* \.pdf$ {
        add_header Content-Type application/pdf;
        add_header Content-Disposition inline;
        try_files $uri =404;
    }
}
```

#### Apache
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

### 10. 联系支持
如果问题仍然存在，请提供：
1. 完整的错误信息
2. 浏览器控制台输出
3. 服务器环境信息
4. 文件访问测试结果
5. 具体的错误现象描述

## 🎯 当前状态
✅ 文件存在于 `public/` 目录
✅ 构建时文件被复制到 `dist/` 目录
✅ 多种路径尝试策略已实现
✅ 详细的调试信息已添加
✅ 手动下载选项已提供

## 🚀 下一步
1. 在浏览器中测试各种链接
2. 检查控制台输出
3. 手动测试文件访问
4. 如果仍有问题，按照调试步骤排查
5. 提供具体的错误信息以便进一步诊断
