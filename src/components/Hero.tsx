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
        {/* Status Badge */}
        <Badge variant="outline" className="mb-6 text-primary border-primary/30">
          Currently: City of Hope Research Intern | Huntington Hospital Volunteer
        </Badge>
        
        {/* Main Heading - English */}
        <h1 className="text-5xl md:text-7xl font-bold heading-clinical mb-6 leading-tight">
          Evidence-Driven Learner in
          <span className="text-primary block">Clinical Service & Health Equity</span>
        </h1>
        
        {/* Sub Heading */}
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium tracking-wide">
          Bridging Clinical Experience with Maternal Health Research
        </h2>
        
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