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

        {/* Keyword Tags - Reorganized into categories */}
        <div className="space-y-4 mb-8">
          {/* Row 1: Clickable Project Links (External) */}
          <div className="flex flex-wrap justify-center gap-2">
            <div className="w-full text-center mb-2">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                🚀 Project Links
              </span>
            </div>
            {[
              { label: "heARTbeat", href: "https://heartbeatorganization.weebly.com/", external: true },
              { label: "Piggy & Co Tote Bags", href: "https://www.thepiggyco.com/", external: true },
              { label: "Blog: Makayla's Money Mindset", href: "https://makaylamoneymindset.weebly.com/blog", external: true }
            ].map((tag) => (
              <a
                key={tag.label}
                href={tag.href}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-hover inline-flex items-center px-3 py-1.5 text-sm border-2 border-primary/50 rounded-full bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
              >
                {tag.label}
                <ExternalLink className="ml-1 h-3 w-3 text-primary" />
              </a>
            ))}
          </div>
          
          {/* Row 2: Research & Experience Projects (Merged) */}
          <div className="flex flex-wrap justify-center gap-2">
            <div className="w-full text-center mb-2">
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                🔬 Research & Experience Projects
              </span>
            </div>
            {[
              { label: "Maternal Health Research", href: "#research", project: "Independent Research on Maternal Mortality" },
              { label: "Huntington Hospital Volunteer", href: "#clinical-service", project: "Patient Services & heARTbeat Program" },
              { label: "City of Hope Intern", href: "#research", project: "Clinical Research Internship" },
              { label: "Student Ambassador", href: "#clinical-service", project: "DEIJ Leadership & Health Advocacy" },
              { label: "Coro Fellowship", href: "#leadership", project: "Youth Climate Leadership Program" },
              { label: "Business Competitions", href: "#leadership", project: "Healthcare Innovation Challenges" }
            ].map((tag) => (
              <button
                key={tag.label}
                onClick={() => scrollToSection(tag.href.replace('#', ''))}
                className="interactive-hover inline-flex items-center px-3 py-1.5 text-sm border border-blue-300 rounded-full bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 group cursor-pointer"
                title={tag.project}
              >
                {tag.label}
                <span className="ml-1 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            ))}
          </div>
        </div>
        

        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="interactive-hover group" onClick={scrollToProjects}>
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="interactive-hover group" onClick={openResume}>
            <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            View Resume
          </Button>
          
          <Button variant="outline" size="lg" className="interactive-hover group" onClick={scrollToContact}>
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
        

        
        {/* Key Focus Areas */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Clinical Volunteering",
            "Maternal Health Research", 
            "Health Equity Advocacy",
            "Community Impact",
            "Evidence-Based Practice"
          ].map((area) => (
            <Badge key={area} variant="secondary" className="text-sm px-4 py-2">
              {area}
            </Badge>
          ))}
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary counter-animate">200+</div>
            <div className="text-sm text-muted-foreground">Care Packages Distributed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary counter-animate">5+</div>
            <div className="text-sm text-muted-foreground">Hospital Departments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary counter-animate">2025</div>
            <div className="text-sm text-muted-foreground">Research Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
