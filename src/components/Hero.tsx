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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(/lovable-uploads/34d2e04d-975a-4d61-b037-16668e1568a4.png)` }}
      />
      <div className="absolute inset-0 medical-grid-bg" />
      <div className="absolute inset-0 ecg-wave" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        {/* Main Name */}
        <h1 className="text-4xl md:text-6xl font-bold heading-clinical mb-4 leading-tight">
          Makayla Wang
        </h1>
        

        
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
                className="inline-flex items-center px-3 py-1.5 text-sm border-2 border-primary/50 rounded-full bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
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
                className="inline-flex items-center px-3 py-1.5 text-sm border border-blue-300 rounded-full bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 group cursor-pointer"
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
          <Button size="lg" className="group" onClick={scrollToProjects}>
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="group" onClick={openResume}>
            <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            View Resume
          </Button>
          
          <Button variant="outline" size="lg" className="group" onClick={scrollToContact}>
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