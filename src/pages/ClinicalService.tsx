import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar, Users, Heart, Award } from "lucide-react";

const ClinicalService = () => {
  const experiences = [
    {
      title: "Huntington Hospital — Front Desk Volunteer",
      period: "2023 - Present",
      location: "Pasadena, CA",
      role: "Patient Services Volunteer",
      responsibilities: [
        "Patient reception and triage services, familiar with hospital navigation systems",
        "Cross-departmental communication coordination, assisting with patient flow management", 
        "Census tracking & visitation management",
        "Emergency response coordination"
      ],
      impact: {
        metric: "200+",
        description: "heARTbeat care packages distributed",
        details: "Self-initiated patient care program across multiple departments"
      },
      achievements: [
        "Initiated heARTbeat project, providing art & sensory care packages for dementia patients and families",
        "Established collaborative relationships with Neurology, Geriatrics, ICU, and other departments",
        "Created standardized procurement and distribution procedures for care materials"
      ],
      evidence: {
        website: "https://heartbeatorganization.weebly.com/",
        type: "Project Documentation"
      },
      tags: ["Patient Care", "Cross-Department Collaboration", "Program Development"]
    },
    {
      title: "Westridge School — Student Ambassador",
      period: "2020 - Present",
      location: "Pasadena, CA", 
      role: "Admissions & Community Outreach",
      responsibilities: [
        "Campus admissions activity organization and new student orientation",
        "DEIJ (Diversity, Equity, Inclusion, Justice) themed lecture planning",
        "Student Voices project: health equity issue advocacy",
        "Campus-wide assembly presentations on social issues: Pink Tax, Medical Racism, etc."
      ],
      impact: {
        metric: "500+",
        description: "students reached through DEIJ presentations",
        details: "Monthly campus-wide discussions on health equity"
      },
      achievements: [
        "Led Student Voices initiative, organizing health equity awareness campaigns",
        "Developed and delivered presentations on medical racism and healthcare disparities",
        "Facilitated campus-wide discussions on social justice in healthcare"
      ],
      evidence: {
        website: "https://www.westridge.org/",
        type: "Institutional Documentation"
      },
      tags: ["Health Equity", "Community Outreach", "Leadership", "DEIJ Advocacy"]
    }
  ];

  return (
    <section className="py-section px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Clinical Service & Community Impact
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Frontline volunteer experience in patient care, health equity advocacy, and community outreach initiatives.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="evidence-card group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="heading-clinical text-2xl">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.role}
                      </Badge>
                    </div>
                  </div>
                  
                  {exp.evidence.website && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="self-start"
                    >
                      <a 
                        href={exp.evidence.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {exp.evidence.type}
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Impact Metrics */}
                <div className="bg-accent/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-primary">Impact Metrics</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary counter-animate">
                        {exp.impact.metric}
                      </div>
                      <div className="text-sm text-clinical">
                        {exp.impact.description}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-clinical">
                        {exp.impact.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-clinical text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="text-clinical text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">2+</div>
            <div className="text-clinical">Years of Clinical Volunteering</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">5+</div>
            <div className="text-clinical">Hospital Departments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">700+</div>
            <div className="text-clinical">Community Members Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalService;
