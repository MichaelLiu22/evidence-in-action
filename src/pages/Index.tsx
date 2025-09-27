import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClinicalService from "@/components/ClinicalService";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setScrollProgress(progress);
      document.documentElement.style.setProperty("--scroll-progress", progress.toString());
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="min-h-screen relative bg-transparent">
      <Navigation />
      <main className="relative z-10">
        <div className="pointer-events-none fixed inset-0 z-0">
          <div
            className="glass-aurora-overlay"
            style={{ opacity: 0.4 + scrollProgress * 0.45 }}
          />
          <div
            className="glass-noise-overlay"
            style={{ opacity: 0.08 + scrollProgress * 0.12 }}
          />
        </div>
        {/* Home 板块 - 浅蓝色 */}
        <section className="relative isolate overflow-hidden z-10">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-slate-950/90 via-blue-950/85 to-blue-800/80" />
            <div className="absolute inset-x-0 top-[55vh] bottom-0 bg-gradient-to-b from-blue-100/85 via-blue-50/85 to-white/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.32),transparent_55%),radial-gradient(circle_at_80%_-10%,rgba(14,165,233,0.25),transparent_60%)]" />
          </div>
          <Hero />
          <About />
          {/* 板块分隔线 */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-300 to-green-200"></div>
        </section>
        
        {/* Research 板块 - 浅绿色 */}
        <section className="bg-gradient-to-b from-green-50 to-green-100 relative">
          <Research />
          <ClinicalService />
          {/* 板块分隔线 */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-300 to-purple-200"></div>
        </section>
        
        {/* Teaching 板块 - 浅紫色 */}
        <section className="bg-gradient-to-b from-purple-50 to-purple-100 relative">
          <Projects />
          <Leadership />
          {/* 板块分隔线 */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-purple-300 to-orange-200"></div>
        </section>
        
        {/* Notes 板块 - 浅橙色 */}
        <section className="bg-gradient-to-b from-orange-50 to-orange-100">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
