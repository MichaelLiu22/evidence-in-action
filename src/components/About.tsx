import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, GraduationCap, Heart } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2020-2026",
      title: "Westridge School",
      location: "Pasadena, CA",
      type: "Current Education"
    },
    {
      year: "2024",
      title: "Georgetown Hoya Business & Leadership Academy",
      location: "Washington, DC",
      type: "Summer Program"
    },
    {
      year: "2023",
      title: "Wharton Global Youth Essentials of Finance",
      location: "Philadelphia, PA",
      type: "Certificate Program"
    },
    {
      year: "2023-Present",
      title: "Pasadena City College Courses",
      location: "Pasadena, CA",
      type: "Macroeconomics & Mass Communication"
    }
  ];

  return (
    <section id="about" className="py-section px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            About
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Photo & Mission */}
          <div className="space-y-8">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-lg border border-border/50">
                <img 
                  src="/lovable-uploads/34d2e04d-975a-4d61-b037-16668e1568a4.png" 
                  alt="Makayla Wang - Medical Student Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <Badge className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2">
                Evidence-Driven Practitioner
              </Badge>
            </div>

            {/* Mission Statement */}
            <Card className="evidence-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <h3 className="font-semibold heading-clinical">Mission Statement</h3>
                </div>
                <p className="text-clinical leading-relaxed">
                  My frontline volunteer experience at Huntington Hospital and research on maternal health disparities 
                  have deepened my focus on real clinical needs and health equity. I aim to strengthen the 
                  "evidence—intervention—evaluation" cycle through rigorous methodological training and 
                  evidence-based healthcare advocacy.
                </p>
              </CardContent>
            </Card>

            {/* Key Focus Areas */}
            <div className="space-y-4">
              <h3 className="font-semibold heading-clinical">Core Focus Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Clinical Volunteering",
                  "Maternal Health",
                  "Health Equity",
                  "Patient Experience",
                  "Research Methods",
                  "Community Outreach"
                ].map((area) => (
                  <Badge key={area} variant="outline" className="justify-center py-2">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <Card className="evidence-card">
              <CardContent className="p-6">
                <h3 className="font-semibold heading-clinical mb-4">Current Impact</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-xs text-muted-foreground">Care Packages</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground">Departments</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-xs text-muted-foreground">Volunteer Hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold heading-clinical mb-8">
              Education & Training
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="evidence-card group hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {item.year}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>
                        
                        <h4 className="font-semibold heading-clinical mb-1">
                          {item.title}
                        </h4>
                        
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Certifications */}
            <Card className="evidence-card border-accent">
              <CardContent className="p-6">
                <h4 className="font-semibold heading-clinical mb-3">Additional Training</h4>
                <ul className="space-y-2 text-sm text-clinical">
                  <li>• Global Online Academy - Investing I</li>
                  <li>• Coro Youth Climate Fellowship (2025)</li>
                  <li>• Research Methods & Data Analysis</li>
                  <li>• Healthcare Ethics & Patient Advocacy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;