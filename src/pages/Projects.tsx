import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Users, Award, Heart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "heARTbeat Organization",
      period: "2023 - Present",
      location: "Huntington Hospital, Pasadena, CA",
      type: "Community Health Initiative",
      description: "Self-initiated patient care program providing art and sensory care packages for dementia patients and their families across multiple hospital departments.",
      impact: {
        metric: "200+",
        description: "Care packages distributed",
        details: "Serving patients in Neurology, Geriatrics, ICU, and other departments"
      },
      achievements: [
        "Established collaborative relationships with 5+ hospital departments",
        "Created standardized procurement and distribution procedures",
        "Developed patient feedback system for continuous improvement",
        "Trained volunteer team in dementia care best practices"
      ],
      evidence: {
        website: "https://heartbeatorganization.weebly.com/",
        type: "Project Website"
      },
      tags: ["Patient Care", "Dementia Support", "Community Health", "Volunteer Leadership"]
    },
    {
      title: "Piggy & Co Tote Bags",
      period: "2022 - Present",
      location: "Online Business",
      type: "Social Enterprise",
      description: "Sustainable fashion business creating eco-friendly tote bags while supporting community health initiatives through profit sharing.",
      impact: {
        metric: "500+",
        description: "Tote bags sold",
        details: "Contributing to environmental sustainability and community health"
      },
      achievements: [
        "Developed sustainable product line with eco-friendly materials",
        "Established online sales platform and customer base",
        "Implemented profit-sharing model for community health initiatives",
        "Created brand identity and marketing strategy"
      ],
      evidence: {
        website: "https://www.thepiggyco.com/",
        type: "Business Website"
      },
      tags: ["Social Enterprise", "Sustainability", "Business Development", "Community Impact"]
    },
    {
      title: "Makayla's Money Mindset Blog",
      period: "2023 - Present",
      location: "Online Platform",
      type: "Educational Content",
      description: "Personal finance blog focusing on financial literacy for young adults, with emphasis on healthcare career planning and student financial management.",
      impact: {
        metric: "1000+",
        description: "Monthly readers",
        details: "Providing financial education to young adults and healthcare students"
      },
      achievements: [
        "Published 20+ articles on financial literacy and healthcare career planning",
        "Built engaged community of young adult readers",
        "Developed content strategy focusing on healthcare career finances",
        "Collaborated with financial advisors and healthcare professionals"
      ],
      evidence: {
        website: "https://makaylamoneymindset.weebly.com/blog",
        type: "Blog Platform"
      },
      tags: ["Financial Literacy", "Content Creation", "Healthcare Education", "Community Building"]
    }
  ];

  return (
    <section data-glass="projects" className="py-section px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Projects & Initiatives
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Community-focused projects combining healthcare advocacy, social enterprise, and educational initiatives.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="evidence-card group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="heading-clinical text-2xl">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  
                  {project.evidence.website && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="self-start"
                    >
                      <a 
                        href={project.evidence.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {project.evidence.type}
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <div>
                  <p className="text-clinical text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div className="bg-accent/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-primary">Project Impact</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary counter-animate">
                        {project.impact.metric}
                      </div>
                      <div className="text-sm text-clinical">
                        {project.impact.description}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-clinical">
                        {project.impact.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-clinical text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">3</div>
            <div className="text-clinical">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">1700+</div>
            <div className="text-clinical">Total Impact Reach</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">3+</div>
            <div className="text-clinical">Years of Project Leadership</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
