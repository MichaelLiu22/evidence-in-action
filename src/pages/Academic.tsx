import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Download, MapPin, Calendar, Award, Users, BookOpen } from "lucide-react";

const Academic = () => {
  const openResume = () => {
    if (typeof window !== "undefined") window.open("/Makayla_Resume.pdf", "_blank");
  };

  const papers = [
    {
      title:
        "Maternal Mortality Disparities in the United States: A Systematic Analysis of Racial and Socioeconomic Factors",
      authors: "Makayla Wang, Elizabeth Maglio",
      year: "2025",
      status: "In Progress",
      type: "Independent Research",
      description:
        "Comprehensive analysis of maternal mortality rates and health disparities across demographic groups in the US",
      links: [
        { type: "Research Proposal", url: "#", available: false },
        { type: "Methodology", url: "#research", available: true },
      ],
      impact: {
        metric: "2025",
        description: "Target completion",
        details: "Submit manuscript for academic review",
      },
      tags: ["Maternal Health", "Health Equity", "Epidemiology"],
    },
  ];

  const teaching = [
    {
      title: "Health Advocacy Workshop Series",
      role: "Student Leader",
      period: "2024 - 2025",
      institution: "Westridge School",
      description:
        "Student-led workshops on health equity and evidence-based advocacy for high school students",
      materials: [
        { type: "Workshop Materials", url: "#", available: false },
        { type: "Student Resources", url: "#", available: false },
      ],
      impact: { metric: "45+", description: "Students engaged", details: "Multi-session series" },
      tags: ["Advocacy", "Health Equity", "Workshop"],
    },
    {
      title: "Financial Literacy for Health Decisions",
      role: "Content Creator",
      period: "2023 - Present",
      institution: "Online Platform",
      description:
        "Educational blog content on financial literacy and healthcare decision-making for students",
      materials: [
        {
          type: "Blog Posts",
          url: "https://makaylamoneymindset.weebly.com/blog",
          available: true,
        },
        { type: "Resource Guides", url: "#", available: false },
      ],
      impact: { metric: "1,000+", description: "Readers reached", details: "Articles & guides" },
      tags: ["Financial Literacy", "Public Health", "Education"],
    },
  ];

  const notes = [
    {
      title: "Clinical Research Methods",
      category: "Research Notes",
      description: "Notes and methodology cards from clinical research training",
      topics: ["Study Design", "Data Analysis", "Ethics in Research", "Statistical Methods"],
      status: "Ongoing",
      url: "#",
    },
    {
      title: "Healthcare Policy Analysis",
      category: "Policy Writing",
      description: "Analysis of maternal health policies and intervention strategies",
      topics: ["Health Equity", "Policy Impact", "Evidence-Based Interventions"],
      status: "2025",
      url: "#",
    },
    {
      title: "Financial Health Literacy",
      category: "Educational Content",
      description:
        "Cross-disciplinary exploration of financial literacy and health outcomes",
      topics: ["Healthcare Economics", "Student Financial Health", "Insurance Literacy"],
      status: "Active",
      url: "https://makaylamoneymindset.weebly.com/blog",
    },
  ];

  return (
    <section data-glass="academic" className="py-section">
      <div className="mx-auto max-w-6xl px-6 py-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        {/* Section Header / Bio */}
        <div className="mb-12">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-8">
            <div className="w-32 h-40 md:w-48 md:h-60 rounded-2xl overflow-hidden shadow-lg border border-white/20">
              <img
                src="/lovable-uploads/Makayla.png"
                alt="Makayla Wang"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold heading-clinical text-center md:text-left">Makayla Wang</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Sociology / Public Health / Social Justice Track</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Westridge School, Pasadena, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Class of 2026</span>
                </div>
              </div>

              <p className="text-clinical max-w-3xl">
              Hi! I’m Makayla Wang, a senior at Westridge School with a deep passion for sociology, health equity, and social justice. I’m driven by a desire to understand how social systems shape people’s lives—and how we can create change through research, advocacy, and community engagement.
Outside the classroom, I’ve explored my interests through leadership conferences, community service, and volunteer work, all centered on uplifting others and amplifying diverse voices. I also express my creativity as a blogger and small business owner, where I share ideas about finance, wellness, and empowerment.
When I’m not working on new projects, you can find me at an amusement park with friends, trying new restaurants and cafés, or in the kitchen baking for my family. I love finding joy in little adventures and meaningful connections.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Maternal Health Research</Badge>
                <Badge variant="secondary">Health Equity</Badge>
                <Badge variant="secondary">Clinical Volunteering</Badge>
                <Badge variant="secondary">Evidence-Based Practice</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
                <Button variant="outline" size="sm" onClick={openResume} className="w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-1" /> CV
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                  <a href="mailto:makayla.wang@example.com">
                    <Mail className="h-4 w-4 mr-1" /> Email
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Divider underline to match Research section style */}
          <div className="w-500 h-1 bg-primary rounded-full mt-8"></div>
        </div>

        {/* Research Papers */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold heading-clinical mb-2">Research</h2>
            <p className="text-clinical max-w-2xl mx-auto">
              Evidence-based investigations focused on maternal health disparities and equitable care.
            </p>
          </div>

          {papers.map((paper, index) => {
            // 根据论文标题选择背景图片
            const getBackgroundImage = (paperTitle: string) => {
              if (paperTitle.includes("Maternal Mortality Disparities in the United States")) {
                return "/lovable-uploads/sample2.png";
              }
              return "";
            };

            const backgroundImage = getBackgroundImage(paper.title);

            return (
            <Card key={index} className="evidence-card group relative overflow-hidden">
              {/* 背景图片层 */}
              {backgroundImage && (
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'rgba(59, 130, 246, 0.05)' // 淡蓝色填充
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
                    <CardTitle className="heading-clinical text-xl md:text-2xl">{paper.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {paper.year}
                      </div>
                      <Badge
                        variant={paper.status === "In Progress" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {paper.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">{paper.type}</Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {paper.tags?.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 flex-wrap self-start">
                    {paper.links.map((link, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        disabled={!link.available}
                        asChild={!!link.available}
                        className="w-full sm:w-auto"
                      >
                        {link.available ? (
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="h-3 w-3" /> {link.type}
                          </a>
                        ) : (
                          <>{link.type} (Coming Soon)</>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Overview */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Overview
                  </h4>
                  <p className="text-clinical text-sm">{paper.description}</p>
                </div>

                {/* Impact Metrics strip */}
                <div className="bg-accent/30 rounded-lg p-3 md:p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                    <span className="font-semibold text-primary text-sm md:text-base">Research Target</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-primary counter-animate">{paper.impact.metric}</div>
                      <div className="text-xs md:text-sm text-clinical">{paper.impact.description}</div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-xs md:text-sm text-clinical">{paper.impact.details}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              </div>
            </Card>
            );
          })}
        </div>

        {/* Teaching & Writing */}
        <div className="mt-16 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold heading-clinical mb-2">Teaching & Writing</h2>
            <p className="text-clinical max-w-2xl mx-auto">
              Educational initiatives, content creation, and documentation focused on advocacy, literacy, and applied public health.
            </p>
          </div>

          {/* Teaching Section */}
          <div className="space-y-8">
            <div className="border-l-4 border-primary/30 pl-4">
              <h3 className="text-xl font-semibold heading-clinical mb-4">Teaching & Instruction</h3>
              <Card className="evidence-card group relative overflow-hidden">
                {/* 背景图片层 - 3:2比例适配 */}
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(/lovable-uploads/beach.png)`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'rgba(59, 130, 246, 0.05)' // 淡蓝色填充
                  }}
                />
                {/* 渐变遮罩层 - 从左上角透明到右下角不透明 */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/80 group-hover:to-white/90 transition-all duration-300" />
                {/* 内容层 */}
                <div className="relative z-10">
                <CardContent className="space-y-6">
                  {teaching.map((course, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4 space-y-3">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 md:gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold heading-clinical text-base md:text-lg">{course.title}</h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">{course.role}</Badge>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {course.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {course.institution}
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {course.tags?.map((tag: string, i: number) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Materials */}
                        <div className="flex gap-2 flex-wrap self-start">
                          {course.materials.map((m, idx) => (
                            <Button key={idx} variant="outline" size="sm" disabled={!m.available} asChild={!!m.available} className="w-full sm:w-auto text-xs md:text-sm">
                              {m.available ? (
                                <a href={m.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                  <ExternalLink className="h-3 w-3" /> {m.type}
                                </a>
                              ) : (
                                <>{m.type} (Private)</>
                              )}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold heading-clinical mb-2 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          Overview
                        </h5>
                        <p className="text-clinical text-sm">{course.description}</p>
                      </div>

                      {/* Impact strip */}
                      {course.impact && (
                        <div className="bg-accent/30 rounded-lg p-2 md:p-3">
                          <div className="flex items-center gap-2 md:gap-3 mb-2">
                            <Award className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                            <span className="font-semibold text-primary text-xs md:text-sm">Teaching Impact</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                            <div className="text-center">
                              <div className="text-lg md:text-xl font-bold text-primary counter-animate">{course.impact.metric}</div>
                              <div className="text-xs text-clinical">{course.impact.description}</div>
                            </div>
                            <div className="md:col-span-2">
                              <p className="text-xs text-clinical">{course.impact.details}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      {index < teaching.length - 1 && (
                        <div className="border-t border-border/50 pt-4"></div>
                      )}
                    </div>
                  ))}
                </CardContent>
                </div>
              </Card>
            </div>

            {/* Writing Section */}
            <div className="border-l-4 border-blue-500/30 pl-4">
              <h3 className="text-xl font-semibold heading-clinical mb-4">Notes & Writing</h3>
              <Card className="evidence-card group relative overflow-hidden">
                {/* 背景图片层 - 3:2比例适配 */}
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(/lovable-uploads/Makaylapub.png)`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'rgba(34, 197, 94, 0.05)' // 淡绿色填充
                  }}
                />
                {/* 渐变遮罩层 - 从左上角透明到右下角不透明 */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/80 group-hover:to-white/90 transition-all duration-300" />
                {/* 内容层 */}
                <div className="relative z-10">
                <CardContent className="space-y-6">
                  {notes.map((note, index) => (
                    <div key={index} className="border-l-2 border-blue-500/20 pl-4 space-y-3">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold heading-clinical text-lg">{note.title}</h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">{note.category}</Badge>
                            <Badge variant="secondary" className="text-xs">{note.status}</Badge>
                          </div>
                        </div>
                        {note.url && note.url !== "#" && (
                          <Button variant="outline" size="sm" asChild className="self-start">
                            <a href={note.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <ExternalLink className="h-3 w-3" /> View Content
                            </a>
                          </Button>
                        )}
                      </div>

                      <div>
                        <h5 className="font-semibold heading-clinical mb-2">Overview</h5>
                        <p className="text-clinical text-sm">{note.description}</p>
                      </div>

                      <div>
                        <h5 className="font-semibold heading-clinical mb-2">Topics</h5>
                        <div className="flex flex-wrap gap-2">
                          {note.topics.map((t, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {index < notes.length - 1 && (
                        <div className="border-t border-border/50 pt-4"></div>
                      )}
                    </div>
                  ))}
                </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Summary Strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">{papers.length}</div>
            <div className="text-clinical">Active Research Papers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">{teaching.length}</div>
            <div className="text-clinical">Teaching Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">{notes.length}</div>
            <div className="text-clinical">Writing Tracks</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-clinical border-t border-white/20 mt-16 pt-8">
          <p>© {new Date().getFullYear()} Makayla Wang. All rights reserved.</p>
          <p className="mt-2">
            Contact: <a href="mailto:makayla.wang@example.com" className="text-primary hover:underline">makayla.wang@example.com</a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Academic;
