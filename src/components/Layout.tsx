import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';

const Layout = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [randomHue, setRandomHue] = useState(200);

  useEffect(() => {
    // 生成随机色相值 (0-360)
    const hues = [
      Math.random() * 60,           // 红-橙 (0-60)
      60 + Math.random() * 60,      // 黄-绿 (60-120)
      120 + Math.random() * 60,     // 绿-青 (120-180)
      180 + Math.random() * 60,     // 青-蓝 (180-240)
      240 + Math.random() * 60,     // 蓝-紫 (240-300)
      300 + Math.random() * 60      // 紫-红 (300-360)
    ];
    
    setRandomHue(hues[Math.floor(Math.random() * hues.length)]);
    setIsAnimating(true);
    
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500); // 延长到1.5秒

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main 
        className={`page-transition-container ${isAnimating ? 'page-enter' : ''}`}
        style={{ '--rainbow-hue': randomHue } as React.CSSProperties}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
