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
        "Planned and hosted Medical Racism themed monthly sharing sessions",
        "Designed Pink Tax education activities covering the entire student body",
        "Established long-term mechanisms for student health literacy improvement"
      ],
      evidence: {
        website: "#westridge-portfolio",
        type: "Student Leadership Portfolio"
      },
      tags: ["Health Advocacy", "Public Speaking", "DEIJ Leadership"]
    },
    {
      title: "Community Health Outreach",
      period: "2024 - Present",
      location: "Los Angeles County",
      role: "Health Equity Advocate",
      responsibilities: [
        "Community health education material development and distribution",
        "Maternal health resource coordination for low-income communities",
        "Bilingual health literacy training support",
        "Community partnership development"
      ],
      impact: {
        metric: "50+",
        description: "families connected to maternal health resources",
        details: "Focus on BIPOC and low-SES communities"
      },
      achievements: [
        "Developed culturally appropriate health education materials for diverse backgrounds",
        "Established community health institution partnership network",
        "Advanced adolescent maternal health education initiatives"
      ],
      evidence: {
        website: "#community-impact",
        type: "Community Partnership Records"
      },
      tags: ["Community Health", "Cultural Competency", "Resource Development"]
    }
  ];

  return (
    <section id="clinical-service" className="py-section px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Clinical & Community Service
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Direct patient care experience and community health advocacy 
            with measurable impact across diverse healthcare settings
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="evidence-card group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl heading-clinical group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.role}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="text-center lg:text-right">
                    <div className="text-2xl font-bold text-primary">{exp.impact.metric}</div>
                    <div className="text-sm text-muted-foreground">{exp.impact.description}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-clinical">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
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
                  <ul className="space-y-2 text-sm text-clinical">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Details */}
                <div className="bg-accent/50 rounded-lg p-4">
                  <h4 className="font-semibold heading-clinical mb-2 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    Measurable Impact
                  </h4>
                  <p className="text-sm text-clinical">{exp.impact.details}</p>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs citation-style">
                      Evidence: {exp.evidence.type}
                    </span>
                    <Button variant="outline" size="sm" className="evidence-link">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Total Volunteer Hours", value: "1000+", icon: "⏰" },
            { label: "Departments Served", value: "5+", icon: "🏥" },
            { label: "Patients Impacted", value: "500+", icon: "❤️" },
            { label: "Community Programs", value: "3", icon: "🌟" }
          ].map((stat, index) => (
            <Card key={index} className="evidence-card text-center group hover:border-primary/30">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalService;