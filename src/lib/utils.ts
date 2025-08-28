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
