import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        
        {/* Inline Titles */}
        <div className="text-lg md:text-xl text-muted-foreground mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
          Pre-Health College Applicant · Founder, heARTbeat (200+ kits) · Huntington Hospital Volunteer · Student Research Intern, City of Hope
        </div>
        
        {/* Keyword Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { label: "Maternal Health", href: "#research-maternal" },
            { label: "Patient Experience / QI", href: "#clinical-px" },
            { label: "Health Equity / DEIJ", href: "#advocacy" },
            { label: "heARTbeat", href: "https://heartbeatorganization.weebly.com/", external: true },
            { label: "Huntington Hospital", href: "#service-huntington" },
            { label: "City of Hope Internship", href: "#research-coh" },
            { label: "Piggy & Co Tote Bags", href: "https://www.thepiggyco.com/", external: true },
            { label: "Independent Study", href: "#research-independent" },
            { label: "Student Ambassador / Student Voices", href: "#leadership-studentvoices" },
            { label: "Coro Youth Climate Fellowship", href: "#leadership-coro" },
            { label: "Georgetown Hoya – Business & Leadership", href: "#education-hoya" },
            { label: "Wharton Global Youth", href: "#education-wharton" },
            { label: "Blog: Makayla's Money Mindset", href: "https://makaylamoneymindset.weebly.com/blog", external: true }
          ].map((tag) => (
            <a
              key={tag.label}
              href={tag.href}
              target={tag.external ? "_blank" : undefined}
              rel={tag.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center px-3 py-1.5 text-sm border border-primary/30 rounded-full bg-background/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {tag.label}
              {tag.external && <ExternalLink className="ml-1 h-3 w-3" />}
            </a>
          ))}
        </div>
        
        {/* Mission Statement */}
        <p className="text-lg text-clinical max-w-2xl mx-auto mb-12 leading-relaxed">
          Bridging clinical volunteering, maternal health research, and community impact 
          through evidence-based healthcare advocacy and health equity initiatives.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="group">
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="group">
            <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
          
          <Button variant="outline" size="lg" className="group">
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