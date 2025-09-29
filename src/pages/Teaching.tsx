import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, BookOpen, Calendar, MapPin, Award } from "lucide-react";

const Teaching = () => {
  const teachingExperience = [
    {
      title: "Health Advocacy Workshop Series",
      role: "Student Leader & Curriculum Developer",
      period: "2024 - 2025",
      institution: "Westridge School",
      location: "Pasadena, CA",
      description:
        "Designed and facilitated student-led workshops on health equity, evidence-based advocacy, and healthcare access for high school students.",
      topics: [
        "Understanding Health Disparities",
        "Evidence-Based Advocacy Methods",
        "Healthcare Policy Analysis",
        "Community Health Assessment",
      ],
      participants: "45+ students",
      format: "Interactive workshops, case studies, group discussions",
      materials: [
        { type: "Workshop Slides", available: false },
        { type: "Student Handouts", available: false },
        { type: "Case Study Materials", available: false },
      ],
      impact: {
        metric: "45+",
        description: "Students engaged",
        details: "Multi-session series with pre/post reflections",
      },
      tags: ["Health Equity", "Advocacy", "Curriculum Design"],
    },
    {
      title: "Financial Literacy for Health Decisions",
      role: "Content Creator & Educator",
      period: "2023 - Present",
      institution: "Online Platform",
      location: "Digital",
      description:
        "Created educational content exploring the intersection of financial literacy and healthcare decision-making for students.",
      topics: [
        "Healthcare Costs & Insurance Literacy",
        "College Financing & Health Insurance",
        "Mental Health Economics",
        "Financial Stress & Academic Performance",
      ],
      participants: "1000+ readers",
      format: "Blog posts, resource guides, case analyses",
      materials: [
        {
          type: "Blog Articles",
          available: true,
          url: "https://makaylamoneymindset.weebly.com/blog",
        },
        { type: "Resource Guides", available: false },
        { type: "Financial Planning Tools", available: false },
      ],
      impact: {
        metric: "1,000+",
        description: "Readers reached",
        details: "Ongoing content updates and reader Q&A",
      },
      tags: ["Financial Literacy", "Public Health", "Education"],
    },
  ];

  const futurePlans = [
    {
      title: "Upcoming Teaching Initiatives",
      initiatives: [
        {
          name: "Pre-Medical Student Health Equity Series",
          timeline: "2025 - 2026",
          description: "Developing workshop series for pre-medical students on addressing health disparities in clinical practice.",
          status: "Planning",
          tags: ["Pre-Med", "Health Disparities", "Workshops"],
        },
        {
          name: "Community Health Education Partnership",
          timeline: "2025",
          description: "Collaborating with local community centers to provide health literacy workshops for underserved populations.",
          status: "In Development",
          tags: ["Community", "Health Literacy", "Partnership"],
        },
      ],
    },
  ];

  return (
    <section data-glass="teaching" className="py-section">
      <div className="mx-auto max-w-6xl px-6 py-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">Teaching & Instruction</h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Educational initiatives focused on health advocacy, financial literacy, and evidence-based practice.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Teaching Cards */}
        <div className="space-y-12">
          {teachingExperience.map((course, index) => {
            // 根据课程类型选择背景图片
            const getBackgroundImage = (courseTitle: string) => {
              if (courseTitle.includes("Health Advocacy Workshop Series")) {
                return "/lovable-uploads/westrige.png";
              } else if (courseTitle.includes("Financial Literacy for Health Decisions")) {
                return "/lovable-uploads/financialM.png";
              }
              return "";
            };

            // 根据课程类型选择背景图片的显示方式
            const getBackgroundStyle = (courseTitle: string) => {
              if (courseTitle.includes("Health Advocacy Workshop Series")) {
                return {
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundColor: 'rgba(59, 130, 246, 0.05)' // 淡蓝色填充
                };
              } else if (courseTitle.includes("Financial Literacy for Health Decisions")) {
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

            const backgroundImage = getBackgroundImage(course.title);
            const backgroundStyle = getBackgroundStyle(course.title);

            return (
            <Card key={index} className="evidence-card group relative overflow-hidden">
              {/* 背景图片层 - 3:2比例适配 */}
              {backgroundImage && (
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
              )}
              {/* 渐变遮罩层 - 从左上角透明到右下角不透明 */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/80 group-hover:to-white/90 transition-all duration-300" />
              {/* 内容层 */}
              <div className="relative z-10">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="heading-clinical text-2xl">{course.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs">{course.role}</Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {course.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {course.institution}, {course.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.participants}
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {course.tags?.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Overview */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Course Overview
                  </h4>
                  <p className="text-clinical text-sm">{course.description}</p>
                </div>

                {/* Impact Metrics */}
                <div className="bg-accent/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-primary">Teaching Impact</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary counter-animate">{course.impact.metric}</div>
                      <div className="text-sm text-clinical">{course.impact.description}</div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-clinical">{course.impact.details}</p>
                    </div>
                  </div>
                </div>

                {/* Format */}
                <div className="bg-muted/40 rounded-lg p-4">
                  <span className="text-sm font-semibold heading-clinical">Format: </span>
                  <span className="text-sm text-clinical">{course.format}</span>
                </div>

                {/* Topics Covered */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Topics Covered
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {course.topics.map((topic: string, idx: number) => (
                      <li key={idx} className="text-clinical text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-3">Course Materials</h4>
                  <div className="flex gap-2 flex-wrap">
                    {course.materials.map((material: any, idx: number) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        disabled={!material.available}
                        asChild={!!material.available && !!material.url}
                        className={!material.available ? "opacity-70" : ""}
                      >
                        {material.available && material.url ? (
                          <a href={material.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="h-3 w-3" />
                            {material.type}
                          </a>
                        ) : (
                          <>
                            {material.type} (Available upon request)
                          </>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
              </div>
            </Card>
            );
          })}
        </div>

        {/* Future Teaching Plans */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold heading-clinical mb-2">Future Teaching Initiatives</h3>
            <p className="text-clinical max-w-2xl mx-auto">
              Upcoming collaborations and curricula focused on equity-centered, community-informed health education.
            </p>
          </div>

          {futurePlans.map((plan, index) => (
            <Card key={index} className="evidence-card group">
              <CardHeader>
                <CardTitle className="heading-clinical text-xl">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {plan.initiatives.map((initiative, idx) => (
                  <div key={idx} className="border-l-4 border-primary/30 pl-4 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h4 className="font-semibold heading-clinical text-lg">{initiative.name}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {initiative.timeline}
                        </div>
                        <Badge variant="secondary" className="text-xs">{initiative.status}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-clinical">{initiative.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {initiative.tags?.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {idx < plan.initiatives.length - 1 && (
                      <div className="border-t border-border/50 pt-4"></div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Teaching Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">{teachingExperience.length}</div>
            <div className="text-clinical">Active/Recent Teaching Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">1,000+</div>
            <div className="text-clinical">Learners & Readers Reached</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">{futurePlans.length}</div>
            <div className="text-clinical">Upcoming Initiatives</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
