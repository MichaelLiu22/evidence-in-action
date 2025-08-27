import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Download, Mail, ExternalLink } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

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
    setShowDownloadOptions(true);
  };

  const downloadDirect = () => {
    setShowDownloadOptions(false);
    
    // Direct download attempt
    const downloadLink = document.createElement('a');
    downloadLink.href = '/Makayla_Resume.pdf';
    downloadLink.download = 'Makayla_Resume.pdf';
    downloadLink.style.display = 'none';
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const openInNewWindow = () => {
    setShowDownloadOptions(false);
    window.open('/Makayla_Resume.pdf', '_blank');
  };

  const requestViaEmail = () => {
    setShowDownloadOptions(false);
    
    const emailBody = `Hi Makayla,

I would like to request a copy of your resume.

Best regards,
[Your Name]`;
    
    const mailtoLink = `mailto:michaelxliu22@gmail.com?subject=Resume Request&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
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

      {/* Download Options Modal */}
      {showDownloadOptions && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-background rounded-lg p-6 max-w-md w-full mx-4 shadow-xl border border-border transform transition-all">
            <h3 className="text-xl font-semibold mb-4 text-center">Choose Download Method</h3>
            <p className="text-muted-foreground text-center mb-6">
              Please select your preferred way to access the resume
            </p>
            
            <div className="space-y-3">
              <Button 
                onClick={downloadDirect} 
                className="w-full justify-start"
                size="lg"
              >
                <Download className="mr-3 h-4 w-4" />
                Direct Download (Recommended)
              </Button>
              
              <Button 
                onClick={openInNewWindow} 
                variant="outline" 
                className="w-full justify-start"
                size="lg"
              >
                <ExternalLink className="mr-3 h-4 w-4" />
                Open in New Window
              </Button>
              
              <Button 
                onClick={requestViaEmail} 
                variant="outline" 
                className="w-full justify-start"
                size="lg"
              >
                <Mail className="mr-3 h-4 w-4" />
                Request via Email
              </Button>
            </div>
            
            <Button 
              onClick={() => setShowDownloadOptions(false)} 
              variant="ghost" 
              className="w-full mt-4"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;