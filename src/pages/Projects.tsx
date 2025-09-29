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
    <section data-glass="projects" className="py-section">
      <div className="mx-auto max-w-6xl px-6 py-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
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
          {projects.map((project, index) => {
            // 根据项目类型选择背景图片和显示方式
            const getBackgroundImage = (projectTitle: string) => {
              if (projectTitle.includes("heARTbeat")) {
                return "/lovable-uploads/huntion.png";
              } else if (projectTitle.includes("Piggy")) {
                return "/lovable-uploads/piggyco.png";
              } else if (projectTitle.includes("Money Mindset")) {
                return "/lovable-uploads/prjo3m.png";
              }
              return "";
            };

            // 根据项目类型选择背景图片的显示方式和填充颜色 - 适配3:2比例
            const getBackgroundStyle = (projectTitle: string) => {
              if (projectTitle.includes("heARTbeat")) {
                return {
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundColor: 'transparent'
                };
              } else if (projectTitle.includes("Piggy")) {
                return {
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundColor: 'rgba(59, 130, 246, 0.05)' // 淡蓝色填充
                };
              } else if (projectTitle.includes("Money Mindset")) {
                return {
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)' // 淡绿色填充
                };
              }
              return {
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundColor: 'transparent'
              };
            };

            const backgroundImage = getBackgroundImage(project.title);
            const backgroundStyle = getBackgroundStyle(project.title);

            return (
            <Card key={index} className="evidence-card group relative overflow-hidden">
              {/* 背景图片层 - 统一3:2比例适配 */}
              <div 
                className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundPosition: backgroundStyle.backgroundPosition,
                  backgroundSize: backgroundStyle.backgroundSize,
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: backgroundStyle.backgroundColor
                }}
              />
              {/* 渐变遮罩层 - 从左上角透明到右下角不透明 */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/80 group-hover:to-white/90 transition-all duration-300" />
              {/* 内容层 */}
              <div className="relative z-10">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 md:gap-4">
                  <div className="space-y-2">
                    <CardTitle className="heading-clinical text-xl md:text-2xl">
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
                      className="self-start w-full sm:w-auto"
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
                <div className="bg-accent/30 rounded-lg p-3 md:p-4">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Heart className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                    <span className="font-semibold text-primary text-sm md:text-base">Project Impact</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-primary counter-animate">
                        {project.impact.metric}
                      </div>
                      <div className="text-xs md:text-sm text-clinical">
                        {project.impact.description}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-xs md:text-sm text-clinical">
                        {project.impact.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Award className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1.5 md:space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-clinical text-xs md:text-sm flex items-start gap-2">
                        <span className="text-primary mt-1 md:mt-1.5 text-xs">•</span>
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
              </div>
            </Card>
            );
          })}
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
