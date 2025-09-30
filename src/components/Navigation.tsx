import { useEffect, useState, useRef } from "react";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bubbleStyle, setBubbleStyle] = useState({ left: 0, width: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; fromLeft: number; fromWidth: number; toLeft: number; toWidth: number; delay: number }>>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const [isRippleAnimating, setIsRippleAnimating] = useState(false);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Teaching", path: "/teaching" },
    { name: "Projects", path: "/projects" },
    { name: "Notes", path: "/notes" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    const prevIndex = navItems.findIndex(item => item.path === prevPathRef.current);
    
    if (currentIndex >= 0 && navRefs.current[currentIndex]) {
      const element = navRefs.current[currentIndex];
      const rect = element.getBoundingClientRect();
      const container = element.parentElement;
      
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const newLeft = rect.left - containerRect.left;
        const newWidth = rect.width;
        
        // 如果是路由切换且不是首次加载，生成粒子动画
        if (prevIndex >= 0 && currentIndex !== prevIndex && prevPathRef.current !== location.pathname && navRefs.current[prevIndex]) {
          const prevElement = navRefs.current[prevIndex];
          const prevRect = prevElement.getBoundingClientRect();
          const prevLeft = prevRect.left - containerRect.left;
          const prevWidth = prevRect.width;
          
          // 生成4个小泡泡
          const newParticles = Array.from({ length: 4 }, (_, i) => ({
            id: Date.now() + i,
            fromLeft: prevLeft,
            fromWidth: prevWidth * 0.3,
            toLeft: newLeft,
            toWidth: newWidth,
            delay: i * 30
          }));
          
          setParticles(newParticles);
          setIsAnimating(true);
          
          // 300ms后清除粒子
          setTimeout(() => {
            setParticles([]);
            setIsAnimating(false);
          }, 350);
        }
        
        setBubbleStyle({
          left: newLeft,
          width: newWidth
        });
      }
    }
    
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      const currentIndex = navItems.findIndex(item => item.path === location.pathname);
      if (currentIndex >= 0 && navRefs.current[currentIndex]) {
        const element = navRefs.current[currentIndex];
        const rect = element.getBoundingClientRect();
        const container = element.parentElement;
        if (container) {
          const containerRect = container.getBoundingClientRect();
          setBubbleStyle({
            left: rect.left - containerRect.left,
            width: rect.width
          });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);


  const openResume = () => {
    window.open("/Makayla_Resume.pdf", "_blank");
  };

  const handleNavClick = (targetPath: string, targetIndex: number, event: React.MouseEvent) => {
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    
    if (currentIndex >= 0 && currentIndex !== targetIndex && navRefs.current[targetIndex]) {
      const targetElement = navRefs.current[targetIndex];
      const rect = targetElement.getBoundingClientRect();
      const container = targetElement.parentElement;
      
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - containerRect.left;
        const y = rect.top + rect.height / 2 - containerRect.top;
        const size = Math.max(rect.width, rect.height);
        
        // 创建水波纹效果
        const newRipple = {
          id: Date.now(),
          x,
          y,
          size
        };
        
        setRipples(prev => [...prev, newRipple]);
        setIsRippleAnimating(true);
        
        // 600ms后清除水波纹
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
          if (ripples.length === 1) {
            setIsRippleAnimating(false);
          }
        }, 600);
      }
    }
  };

  const navClassName = cn(
    "fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300 overflow-hidden",
    "before:content-[''] before:absolute before:inset-0 before:-z-20 before:bg-gradient-to-r before:from-white/40 before:via-primary/10 before:to-white/40",
    "after:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[inherit] after:border after:border-white/40 after:opacity-70",
    "dark:before:from-white/10 dark:before:via-primary/20 dark:before:to-white/10 dark:after:border-white/10",
    isScrolled
      ? "bg-white/30 shadow-[0_12px_38px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:bg-slate-900/70 dark:shadow-[0_12px_38px_rgba(2,6,23,0.55)]"
      : "bg-white/10 shadow-[0_4px_18px_rgba(15,23,42,0.08)] dark:bg-slate-900/60 dark:shadow-[0_4px_22px_rgba(2,6,23,0.4)]"
  );

  return (
    <nav className={navClassName}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <NavLink
            to="/"
            className="font-bold text-xl text-foreground transition-all duration-300 hover:text-primary hover:tracking-tight"
          >
            Makayla Wang
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {/* 主气泡背景 */}
            <div 
              className={cn(
                "absolute h-8 rounded-full bg-white/65 border border-white/60 shadow-md transition-all ease-out -z-10",
                isAnimating ? "duration-0 opacity-0" : "duration-300 opacity-100"
              )}
              style={{
                left: `${bubbleStyle.left}px`,
                width: `${bubbleStyle.width}px`,
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />
            
            {/* 粒子泡泡 */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute rounded-full bg-white/50 border border-white/40 -z-10"
                style={{
                  height: '20px',
                  top: '50%',
                  animation: `bubble-merge 300ms cubic-bezier(0.34, 1.56, 0.64, 1) ${particle.delay}ms forwards`,
                  '--from-left': `${particle.fromLeft}px`,
                  '--from-width': `${particle.fromWidth}px`,
                  '--to-left': `${particle.toLeft}px`,
                  '--to-width': `${particle.toWidth}px`,
                } as React.CSSProperties}
              />
            ))}
            
            {/* 水波纹效果 */}
            {ripples.map((ripple) => (
              <div
                key={ripple.id}
                className="absolute rounded-full ripple-effect"
                style={{
                  left: `${ripple.x - ripple.size / 2}px`,
                  top: `${ripple.y - ripple.size / 2}px`,
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                }}
              />
            ))}
            
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                ref={(el) => navRefs.current[index] = el}
                onClick={(e) => handleNavClick(item.path, index, e)}
                className={({ isActive }) =>
                  cn(
                    "text-sm px-3 py-1 rounded-full transition-all duration-300 relative z-10 nav-artistic",
                    isActive
                      ? "text-primary font-semibold active"
                      : "text-muted-foreground hover:text-primary"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={openResume}
              className="bg-white/60 border-white/40 backdrop-blur-sm shadow-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md dark:bg-slate-900/60 dark:border-white/10 dark:hover:bg-slate-900/50"
            >
              <Download className="h-4 w-4 mr-1" />
              CV
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full bg-white/40 backdrop-blur hover:bg-white/60 dark:bg-slate-900/60 dark:hover:bg-slate-900/50"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white/75 backdrop-blur-2xl border-l border-white/40 shadow-[0_12px_40px_rgba(15,23,42,0.16)] dark:bg-slate-900/80 dark:border-white/10 dark:shadow-[0_12px_40px_rgba(2,6,23,0.45)]"
            >
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
              className={({ isActive }) =>
                  cn(
                        "text-lg px-4 py-2 rounded-full border border-white/20 transition-all duration-300 hover:text-primary hover:bg-white/60 hover:border-white/50 nav-artistic",
                        isActive
                          ? "text-primary font-semibold bg-white/65 border-white/60 shadow-md active"
                          : "text-muted-foreground"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Button
                  variant="outline"
                  onClick={openResume}
                  className="w-full bg-white/60 border-white/40 backdrop-blur hover:bg-white/80 dark:bg-slate-900/60 dark:border-white/10 dark:hover:bg-slate-900/50"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
