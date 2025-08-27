import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Download, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'hero', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'clinical-service', label: 'Clinical Service', href: '#clinical-service' },
    { id: 'research', label: 'Research', href: '#research' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'leadership', label: 'Leadership', href: '#leadership' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const handleResumeDownload = () => {
    // 定义多个可能的文件路径，适应不同环境
    const possiblePaths = [
      '/Makayla Resume.pdf',                    // 标准路径
      '/lovable-uploads/Makayla Resume.pdf',    // 备选路径
      './Makayla Resume.pdf',                   // 相对路径
      'Makayla Resume.pdf'                      // 当前目录
    ];
    
    console.log('Starting resume download process...');
    console.log('Current location:', window.location.href);
    console.log('Possible paths:', possiblePaths);
    
    // 尝试下载的策略
    const attemptDownload = async () => {
      for (const path of possiblePaths) {
        try {
          console.log(`Trying path: ${path}`);
          
          // 检查文件是否存在
          const response = await fetch(path);
          
          if (response.ok) {
            console.log(`File found at: ${path}`);
            
            // 方法1: 尝试在新窗口中打开
            try {
              window.open(path, '_blank');
              console.log('Successfully opened in new window');
              return; // 成功则退出
            } catch (openError) {
              console.error('Failed to open in new window:', openError);
            }
            
            // 方法2: 如果打开失败，尝试直接下载
            try {
              const link = document.createElement('a');
              link.href = path;
              link.download = 'Makayla Resume.pdf';
              link.target = '_blank';
              
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              
              console.log('Successfully triggered download');
              return; // 成功则退出
            } catch (downloadError) {
              console.error('Failed to trigger download:', downloadError);
            }
            
          } else {
            console.log(`File not found at: ${path}, status: ${response.status}`);
          }
          
        } catch (error) {
          console.error(`Error checking path ${path}:`, error);
          continue; // 继续尝试下一个路径
        }
      }
      
      // 如果所有路径都失败，尝试最后的备选方案
      console.log('All local paths failed, trying external URL...');
      
      // 方法3: 尝试外部 URL（生产环境）
      const externalUrl = 'https://www.makaylawang.com/Makayla%20Resume.pdf';
      try {
        window.open(externalUrl, '_blank');
        console.log('Opened external URL');
      } catch (externalError) {
        console.error('Failed to open external URL:', externalError);
        
        // 最后的备选方案：显示错误信息和手动下载链接
        const errorMessage = `
无法自动下载简历文件。

请尝试以下方法：
1. 右键点击此链接并选择"另存为"
2. 复制链接到新标签页打开
3. 联系管理员获取文件

下载链接：${externalUrl}
        `;
        
        alert(errorMessage);
      }
    };
    
    // 开始尝试下载
    attemptDownload();
  };

  // Handle scroll-based active section detection and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id) || document.querySelector(item.href) as HTMLElement);
      const scrollPosition = window.scrollY + 100;

      // Update active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }

      // Update progress bar - more reliable calculation
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      let scrollPercent = 0;
      if (maxScroll > 0) {
        scrollPercent = (scrollTop / maxScroll) * 100;
      }
      
      const clampedProgress = Math.min(100, Math.max(0, scrollPercent));
      setScrollProgress(clampedProgress);
      
      // Debug logging
      console.log('Scroll Progress:', {
        scrollTop,
        windowHeight,
        documentHeight,
        maxScroll,
        scrollPercent: scrollPercent.toFixed(2),
        clampedProgress: clampedProgress.toFixed(2)
      });
    };

    // Initial call to set initial progress
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string, id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/MW_logo.png" 
                alt="MW Logo" 
                className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105 cursor-pointer"
                onClick={() => scrollToSection('hero', 'hero')}
                title="Click to go to top"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold heading-clinical">Makayla Wang</h1>
              <p className="text-xs text-muted-foreground">Evidence-Driven Clinical Research</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href, item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleResumeDownload}
              className="hidden sm:flex"
            >
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Button>
            <Button size="sm">
              <Mail className="h-3 w-3 mr-1" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href, item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-border/50 space-y-2">
                <Button variant="outline" size="sm" className="w-full" onClick={handleResumeDownload}>
                  <Download className="h-3 w-3 mr-2" />
                  View Resume
                </Button>
                <Button size="sm" className="w-full">
                  <Mail className="h-3 w-3 mr-2" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary transition-all duration-300 ease-out shadow-sm"
          style={{ 
            width: `${scrollProgress}%`,
            transform: `translateX(${scrollProgress > 0 ? 0 : -100}%)`
          }}
        />
      </div>
      
      {/* Debug Info - Remove this after testing */}
      <div className="absolute top-16 right-4 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
        Progress: {scrollProgress.toFixed(1)}% | Active: {activeSection}
      </div>
    </nav>
  );
};

export default Navigation;