import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Users, Award, Trophy } from "lucide-react";

const Leadership = () => {
  const leadershipRoles = [
    {
      title: "Coro Youth Climate Fellowship",
      period: "2025 (Upcoming)",
      location: "Los Angeles, CA",
      type: "Leadership Development Program",
      role: "Climate Leadership Fellow",
      description: "Intensive leadership development program focused on climate action, community organizing, and environmental justice advocacy.",
      responsibilities: [
        "Climate action project development and implementation",
        "Community organizing and coalition building",
        "Environmental justice advocacy and policy research",
        "Leadership skills development and mentorship"
      ],
      impact: {
        metric: "6-month",
        description: "intensive program",
        details: "Developing climate leadership skills and community impact projects"
      },
      achievements: [
        "Selected for competitive fellowship program",
        "Developing climate action project for local community",
        "Building partnerships with environmental organizations",
        "Creating sustainable impact measurement framework"
      ],
      tags: ["Climate Leadership", "Community Organizing", "Environmental Justice", "Policy Advocacy"]
    },
    {
      title: "Healthcare Innovation Business Competitions",
      period: "2023 - Present",
      location: "Various Locations",
      type: "Competition Participation",
      role: "Team Leader & Presenter",
      description: "Participating in healthcare innovation competitions, developing solutions for healthcare challenges and presenting to industry professionals.",
      responsibilities: [
        "Healthcare solution ideation and development",
        "Business plan creation and financial modeling",
        "Team leadership and project management",
        "Presentation and pitch development"
      ],
      impact: {
        metric: "5+",
        description: "competitions participated",
        details: "Developing innovative healthcare solutions and business models"
      },
      achievements: [
        "Led teams in multiple healthcare innovation competitions",
        "Developed innovative solutions for healthcare access challenges",
        "Presented to panels of healthcare industry professionals",
        "Built network of healthcare innovation contacts"
      ],
      tags: ["Healthcare Innovation", "Business Development", "Team Leadership", "Presentation Skills"]
    },
    {
      title: "Student Ambassador Leadership",
      period: "2020 - Present",
      location: "Westridge School, Pasadena, CA",
      type: "Student Leadership",
      role: "Senior Student Ambassador",
      description: "Leading student ambassador program, organizing campus events, and representing the school in admissions and community outreach activities.",
      responsibilities: [
        "Campus admissions activity organization",
        "New student orientation leadership",
        "DEIJ lecture planning and facilitation",
        "Student voice advocacy and representation"
      ],
      impact: {
        metric: "500+",
        description: "students reached",
        details: "Leading campus-wide initiatives and community outreach"
      },
      achievements: [
        "Led successful new student orientation programs",
        "Organized campus-wide DEIJ discussions and events",
        "Developed student voice advocacy initiatives",
        "Mentored junior student ambassadors"
      ],
      tags: ["Student Leadership", "Community Outreach", "DEIJ Advocacy", "Mentorship"]
    }
  ];

  return (
    <section className="py-section px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Leadership & Development
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Leadership roles in climate action, healthcare innovation, and student advocacy initiatives.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Leadership Roles */}
        <div className="space-y-12">
          {leadershipRoles.map((role, index) => (
            <Card key={index} className="evidence-card group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="heading-clinical text-2xl">
                      {role.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {role.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {role.location}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {role.type}
                      </Badge>
                    </div>
                    <div className="mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {role.role}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <div>
                  <p className="text-clinical text-sm leading-relaxed">
                    {role.description}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div className="bg-accent/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-primary">Leadership Impact</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary counter-animate">
                        {role.impact.metric}
                      </div>
                      <div className="text-sm text-clinical">
                        {role.impact.description}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-clinical">
                        {role.impact.details}
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
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-clinical text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {role.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-clinical text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">3+</div>
            <div className="text-clinical">Leadership Roles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">1000+</div>
            <div className="text-clinical">People Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">5+</div>
            <div className="text-clinical">Years of Leadership Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
