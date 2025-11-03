import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import { openResume, smoothScrollTo } from "@/lib/utils";

const Hero = () => {
  const scrollToProjects = () => {
    smoothScrollTo('projects');
  };

  const scrollToContact = () => {
    smoothScrollTo('contact');
  };

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Medical Grid */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(/lovable-uploads/Makayla.png)` }}
      />
      <div className="absolute inset-0 medical-grid-bg" />
      <div className="absolute inset-0 ecg-wave" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-blue-950/85 to-blue-900/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        {/* 人物介绍卡片 */}
        <div className="relative mb-8">
          <div className="absolute inset-4 rounded-3xl bg-blue-500/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-blue-200/30 bg-gradient-to-br from-slate-950/85 via-blue-900/80 to-blue-800/70 backdrop-blur-3xl shadow-[0_40px_80px_rgba(10,20,50,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.25),transparent_60%)] opacity-70" />
            <div className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-cyan-400/30 blur-3xl opacity-70" />
            <div className="absolute -bottom-24 -left-14 h-52 w-52 rounded-full bg-indigo-500/40 blur-3xl opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.2)_100%)] mix-blend-soft-light" />

            <div className="relative z-10 p-8 text-left text-blue-50">
              {/* Main Name */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Makayla Wang
              </h1>
              
              {/* 个人简介 */}
              <p className="text-lg text-blue-100/90 mb-6 max-w-2xl">
                sociology/public health/social justice track | Westridge School, Pasadena, CA | Class of 2026
              </p>
              
              {/* 详细描述 */}
              <p className="text-blue-50/90 mb-6 max-w-3xl leading-relaxed">
                I am a high school student conducting independent research on maternal health disparities 
                with a focus on evidence-based healthcare interventions. My work combines clinical volunteer 
                experience at Huntington Hospital with systematic research on health equity issues.
              </p>
              
              {/* 核心标签 */}
              <div className="flex flex-wrap justify-start gap-3 mb-6">
                {[
                  "Maternal Health Research",
                  "Health Equity", 
                  "Clinical Volunteering",
                  "Evidence-Based Practice"
                ].map((area) => (
                  <span
                    key={area}
                    className="bg-white/15 text-cyan-100 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md shadow-sm border border-cyan-100/20"
                  >
                    {area}
                  </span>
                ))}
              </div>
              
              {/* 行动按钮 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="interactive-hover px-6 py-3 rounded-lg font-semibold text-blue-900 bg-white/85 backdrop-blur hover:bg-white transition-all duration-300 shadow-[0_12px_30px_rgba(2,132,199,0.35)]">
                  Download CV
                </button>
                <button className="interactive-hover px-6 py-3 rounded-lg font-semibold text-white bg-cyan-500/90 backdrop-blur hover:bg-cyan-400 shadow-[0_12px_34px_rgba(6,182,212,0.55)] transition-all duration-300">
                  Email
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section - 生活照展示 */}
        <div className="mt-12 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Life Moments
          </h2>
          
          {/* 6-Photo Grid Layout with Glass Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { id: 1, src: "/lovable-uploads/life-photo1.jpg", alt: "Fun times on the water ride" },
              { id: 2, src: "/lovable-uploads/life-photo2.jpg", alt: "Skiing adventure" },
              { id: 3, src: "/lovable-uploads/life-photo3.jpg", alt: "Friends together" },
              { id: 4, src: "/lovable-uploads/life-photo4.jpg", alt: "Night out with friends" },
              { id: 5, src: "/lovable-uploads/life-photo5.jpg", alt: "Daily moments" },
              { id: 6, src: "/lovable-uploads/life-photo6.jpg", alt: "Graduation celebration" }
            ].map((photo, index) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:border-white/40 transition-all duration-500 hover:scale-[1.03] cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                style={{ 
                  animationDelay: `${0.4 + index * 0.08}s`,
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-900/30">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0)_100%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
