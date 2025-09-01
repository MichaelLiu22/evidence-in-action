import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Menu, X, Download, Mail } from "lucide-react";
import { openResume } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // 卷轴展开动画效果
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 延迟300ms开始动画，让效果更明显

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { 
      id: 'home', 
      label: 'Home', 
      href: '/',
      activeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      hoverColor: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
      hoverTextColor: 'hover:text-white',
      animation: 'hover:scale-105 hover:shadow-lg'
    },
    { 
      id: 'about', 
      label: 'About', 
      href: '/about',
      activeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      hoverColor: 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500',
      hoverTextColor: 'hover:text-white',
      animation: 'hover:scale-105 hover:shadow-lg'
    },
    { 
      id: 'clinical-service', 
      label: 'Clinical Service', 
      href: '/clinical-service',
      activeColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
      hoverColor: 'hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500',
      hoverTextColor: 'hover:text-white',
      animation: 'hover:scale-105 hover:shadow-lg'
    },
    { 
      id: 'research', 
      label: 'Research', 
      href: '/research',
      activeColor: 'bg-gradient-to-r from-orange-500 to-red-500',
      hoverColor: 'hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500',
      hoverTextColor: 'hover:text-white',
      animation: 'hover:scale-105 hover:shadow-lg'
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      href: '/projects',
      activeColor: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      hoverColor: 'hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500',
      hoverTextColor: 'hover:text-white',
      animation: 'hover:scale-105 hover:shadow-lg'
    },
    { 
      id: 'leadership', 
      label: 'Leadership', 
      href: '/leadership',
      activeColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      hoverColor: 'hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500',
      hoverTextColor: 'hover:text-white',
      animation: 'hover:scale-105 hover:shadow-lg'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      href: '/contact',
      activeColor: 'bg-gradient-to-r from-teal-500 to-blue-500',
      hoverColor: 'hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500',
      hoverTextColor: 'hover:text-white',
      animation: 'hover:scale-105 hover:shadow-lg'
    }
  ];

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.substring(1); // Remove leading slash
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 transition-all duration-1500 ease-out transform ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : '-translate-y-32 opacity-0'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className={`flex items-center gap-3 mr-8 transition-all duration-1000 ease-out transform ${
            isVisible 
              ? 'translate-x-0 opacity-100 scale-100' 
              : '-translate-x-16 opacity-0 scale-75'
          }`} style={{ transitionDelay: '500ms' }}>
            <div className="flex items-center justify-center">
              <Link to="/">
                <img
                  src="/lovable-uploads/Mikeswaylogo.png"
                  alt="Mikesway Logo"
                  className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105 cursor-pointer"
                  title="Click to go to home"
                />
              </Link>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold heading-clinical">Makayla Wang</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center gap-1 transition-all duration-1000 ease-out transform ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-90'
          }`} style={{ transitionDelay: '700ms' }}>
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-500 ease-out transform ${item.animation} ${
                  getCurrentPage() === item.id
                    ? `text-white ${item.activeColor} shadow-md`
                    : `text-muted-foreground ${item.hoverColor} ${item.hoverTextColor} hover:shadow-md`
                } ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-6 opacity-0 scale-75'
                }`}
                style={{ 
                  transitionDelay: `${900 + index * 100}ms`,
                  animationDelay: `${900 + index * 100}ms`
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className={`hidden lg:flex items-center gap-2 transition-all duration-1000 ease-out transform ${
            isVisible 
              ? 'translate-x-0 opacity-100 scale-100' 
              : 'translate-x-16 opacity-0 scale-75'
          }`} style={{ transitionDelay: '1200ms' }}>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={openResume}
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
            className={`lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-1000 ease-out transform ${
              isVisible 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-16 opacity-0 scale-75'
            }`}
            style={{ transitionDelay: '1200ms' }}
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
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform ${item.animation} ${
                    getCurrentPage() === item.id
                      ? `text-white ${item.activeColor} shadow-md`
                      : `text-muted-foreground ${item.hoverColor} ${item.hoverTextColor} hover:shadow-md`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-border/50 space-y-2">
                <Button variant="outline" size="sm" className="w-full" onClick={openResume}>
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


    </nav>
  );
};

export default Navigation;