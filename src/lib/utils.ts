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
  
  console.log('Current location info:', {
    url: currentUrl,
    path: currentPath,
    origin: currentOrigin
  });
  
  // Try the most reliable path first
  const resumePath = 'Makayla_Resume.pdf';
  
  console.log(`Attempting to open resume at: ${resumePath}`);
  
  try {
    const newWindow = window.open(resumePath, '_blank');
    if (newWindow) {
      console.log('Resume window opened successfully');
    } else {
      console.log('Failed to open resume window');
      // Fallback to absolute path
      window.open('/Makayla_Resume.pdf', '_blank');
    }
  } catch (error) {
    console.error('Error opening resume:', error);
    // Final fallback
    window.open(`${currentOrigin}/Makayla_Resume.pdf`, '_blank');
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
