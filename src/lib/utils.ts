import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const openResume = () => {
  // Google Drive PDF 直接链接
  const resumePdfLink = 'https://drive.google.com/file/d/1fPf-LYrZOX8vjuxmSQ_GVlP_0R2ZVPfP/view';
  
  console.log('🔗 Opening resume PDF directly...');
  console.log('Link:', resumePdfLink);
  
  try {
    // 直接在新窗口打开 PDF 文件
    const newWindow = window.open(resumePdfLink, '_blank');
    
    if (newWindow && !newWindow.closed) {
      console.log('✅ Successfully opened resume PDF');
    } else {
      console.log('❌ Failed to open resume PDF window');
      // 备用方案：在当前窗口打开
      window.location.href = resumePdfLink;
    }
  } catch (error) {
    console.error('❌ Error opening resume PDF:', error);
    // 最终备用方案
    window.location.href = resumePdfLink;
  }
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
