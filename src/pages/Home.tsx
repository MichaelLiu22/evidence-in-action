import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, ExternalLink, User, FlaskConical, GraduationCap } from "lucide-react";
import { openResume, smoothScrollTo } from "@/lib/utils";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    navigate('/projects');
  };

  const scrollToContact = () => {
    navigate('/contact');
  };

  const scrollToSection = (sectionId: string) => {
    navigate(`/${sectionId}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-20">
      {/* Biography Section - Blue */}
      <section className="relative bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(/lovable-uploads/Makayla.png)` }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <User className="h-8 w-8 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Makayla Wang
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl md:text-2xl font-light mb-4">
              Pre-Medical Student & Health Equity Advocate
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Dedicated to advancing maternal health research and promoting healthcare equity through clinical volunteering, evidence-based research, and community engagement.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="group bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              View Resume
            </Button>
            
            <Button size="lg" variant="outline" className="group bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={scrollToContact}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
        
        {/* Animated Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="hsl(200 100% 85%)"
              className="animate-pulse"
            />
          </svg>
        </div>
      </section>

      {/* Research Section - Light Blue */}
      <section className="relative bg-gradient-to-b from-blue-100 to-blue-200 py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <FlaskConical className="h-8 w-8 mr-3 text-blue-700" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Research & Experience</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { label: "Maternal Health Research", href: "research", project: "Independent Research on Maternal Mortality" },
              { label: "City of Hope Intern", href: "research", project: "Clinical Research Internship" },
              { label: "Huntington Hospital Volunteer", href: "clinical-service", project: "Patient Services & heARTbeat Program" },
              { label: "Student Ambassador", href: "clinical-service", project: "DEIJ Leadership & Health Advocacy" }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="p-6 bg-white/70 border border-blue-300 rounded-lg hover:bg-white/90 hover:border-blue-400 transition-all duration-300 text-left group shadow-sm"
                title={item.project}
              >
                <h3 className="font-semibold text-blue-900 mb-2">{item.label}</h3>
                <p className="text-sm text-blue-700">{item.project}</p>
                <span className="inline-block mt-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">→ Learn More</span>
              </button>
            ))}
          </div>

          {/* Project Links */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Featured Projects</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "heARTbeat", href: "https://heartbeatorganization.weebly.com/" },
                { label: "Piggy & Co Tote Bags", href: "https://www.thepiggyco.com/" },
                { label: "Blog: Makayla's Money Mindset", href: "https://makaylamoneymindset.weebly.com/blog" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm"
                >
                  {link.label}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
              fill="hsl(200 80% 90%)"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
          </svg>
        </div>
      </section>

      {/* Teaching Section - Very Light Blue */}
      <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <GraduationCap className="h-8 w-8 mr-3 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Leadership & Teaching</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { label: "Coro Fellowship", href: "leadership", project: "Youth Climate Leadership Program" },
              { label: "Business Competitions", href: "leadership", project: "Healthcare Innovation Challenges" }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="p-6 bg-white/80 border border-blue-200 rounded-lg hover:bg-white hover:border-blue-300 transition-all duration-300 text-left group shadow-sm"
                title={item.project}
              >
                <h3 className="font-semibold text-blue-800 mb-2">{item.label}</h3>
                <p className="text-sm text-blue-600">{item.project}</p>
                <span className="inline-block mt-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">→ Learn More</span>
              </button>
            ))}
          </div>

          {/* Key Focus Areas */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Clinical Volunteering",
                "Maternal Health Research", 
                "Health Equity Advocacy",
                "Community Impact",
                "Evidence-Based Practice"
              ].map((area) => (
                <Badge key={area} variant="secondary" className="text-sm px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-white/60 rounded-lg">
              <div className="text-3xl font-bold text-blue-700 counter-animate">200+</div>
              <div className="text-sm text-blue-600">Care Packages Distributed</div>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-lg">
              <div className="text-3xl font-bold text-blue-700 counter-animate">5+</div>
              <div className="text-sm text-blue-600">Hospital Departments</div>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-lg">
              <div className="text-3xl font-bold text-blue-700 counter-animate">2025</div>
              <div className="text-sm text-blue-600">Research Year</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
