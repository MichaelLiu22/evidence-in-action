import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const openResume = () => {
  // Get current location info for debugging
  const currentUrl = window.location.href;
  const currentPath = window.location.pathname;
  const currentOrigin = window.location.origin;
  
  console.log('🔍 Resume Download Debug Info:');
  console.log('Current URL:', currentUrl);
  console.log('Current Path:', currentPath);
  console.log('Current Origin:', currentOrigin);
  
  // 尝试多种路径策略
  const paths = [
    // 方法1: 相对路径（最可靠）
    'Makayla_Resume.pdf',
    
    // 方法2: 绝对路径
    '/Makayla_Resume.pdf',
    
    // 方法3: 完整URL
    `${currentOrigin}/Makayla_Resume.pdf`,
    
    // 方法4: 如果当前在子目录中
    `${currentPath.replace(/\/[^/]*$/, '')}/Makayla_Resume.pdf`
  ];
  
  console.log('📁 Trying these paths:', paths);
  
  // 尝试每个路径
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    console.log(`\n🔄 Attempt ${i + 1}: ${path}`);
    
    try {
      // 尝试打开文件
      const newWindow = window.open(path, '_blank');
      
      if (newWindow && !newWindow.closed) {
        console.log(`✅ SUCCESS: Resume opened from ${path}`);
        return;
      } else {
        console.log(`❌ Failed to open window for ${path}`);
      }
    } catch (error) {
      console.error(`❌ Error with path ${path}:`, error);
    }
  }
  
  // 如果所有方法都失败，提供手动下载链接
  console.error('❌ All resume paths failed');
  
  // 创建手动下载链接
  const downloadLink = document.createElement('a');
  downloadLink.href = 'Makayla_Resume.pdf';
  downloadLink.download = 'Makayla_Resume.pdf';
  downloadLink.textContent = 'Click here to download resume';
  downloadLink.style.display = 'block';
  downloadLink.style.padding = '10px';
  downloadLink.style.margin = '10px';
  downloadLink.style.backgroundColor = '#f0f0f0';
  downloadLink.style.border = '1px solid #ccc';
  downloadLink.style.borderRadius = '5px';
  downloadLink.style.textDecoration = 'none';
  downloadLink.style.color = '#333';
  
  // 显示错误信息和手动下载选项
  const errorMessage = `
无法自动打开简历文件。

请尝试以下方法：
1. 右键点击下面的链接，选择"另存为"
2. 或者直接在浏览器地址栏输入: ${currentOrigin}/Makayla_Resume.pdf

如果仍然无法访问，请检查：
- 文件是否存在于服务器上
- 服务器配置是否正确
- 文件权限是否正确

调试信息已输出到控制台。
  `;
  
  alert(errorMessage);
  
  // 在页面上显示手动下载链接
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.backgroundColor = 'white';
  container.style.padding = '20px';
  container.style.border = '2px solid #ff6b6b';
  container.style.borderRadius = '10px';
  container.style.zIndex = '10000';
  container.style.maxWidth = '400px';
  container.style.textAlign = 'center';
  
  container.innerHTML = `
    <h3 style="color: #ff6b6b; margin-bottom: 15px;">简历下载</h3>
    <p style="margin-bottom: 15px;">自动下载失败，请手动下载：</p>
    ${downloadLink.outerHTML}
    <br><br>
    <button onclick="this.parentElement.remove()" style="padding: 8px 16px; background: #ccc; border: none; border-radius: 5px; cursor: pointer;">关闭</button>
  `;
  
  document.body.appendChild(container);
};

// 通用的平滑滚动函数
export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  console.log(`Attempting to scroll to element: ${elementId}`);
  
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id '${elementId}' not found!`);
    // 列出所有可用的 section
    const allSections = document.querySelectorAll('section[id]');
    console.log('Available sections:', Array.from(allSections).map(s => s.id));
    return false;
  }
  
  console.log(`Element '${elementId}' found:`, element);
  
  try {
    // 使用 scrollIntoView 方法，更可靠
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // 手动调整位置，为固定导航栏留出空间
    setTimeout(() => {
      window.scrollBy({
        top: -offset,
        behavior: 'smooth'
      });
    }, 100);
    
    console.log(`Successfully scrolled to ${elementId}`);
    return true;
  } catch (error) {
    console.error(`Error scrolling to ${elementId}:`, error);
    
    // 备用方法：使用 window.scrollTo
    try {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
      console.log(`Used fallback scroll method for ${elementId}`);
      return true;
    } catch (fallbackError) {
      console.error(`Fallback scroll method also failed for ${elementId}:`, fallbackError);
      return false;
    }
  }
};
