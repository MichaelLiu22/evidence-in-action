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
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-48 h-60 rounded-2xl overflow-hidden shadow-lg border border-white/20">
              <img
                src="/lovable-uploads/Makayla.png"
                alt="Makayla Wang"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold heading-clinical">Makayla Wang</h1>
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
                I am a high school student conducting independent research on maternal health disparities with a focus on evidence-based healthcare interventions. My work combines clinical volunteer experience at Huntington Hospital with systematic research on health equity issues. I am particularly interested in the intersection of policy, community health, and evidence-based practice in addressing healthcare disparities.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Maternal Health Research</Badge>
                <Badge variant="secondary">Health Equity</Badge>
                <Badge variant="secondary">Clinical Volunteering</Badge>
                <Badge variant="secondary">Evidence-Based Practice</Badge>
              </div>

              <div className="flex gap-3 pt-1">
                <Button variant="outline" size="sm" onClick={openResume}>
                  <Download className="h-4 w-4 mr-1" /> CV
                </Button>
                <Button variant="outline" size="sm" asChild>
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

          {papers.map((paper, index) => (
            <Card key={index} className="evidence-card group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="heading-clinical text-2xl">{paper.title}</CardTitle>
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
                <div className="bg-accent/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-primary">Research Target</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary counter-animate">{paper.impact.metric}</div>
                      <div className="text-sm text-clinical">{paper.impact.description}</div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-clinical">{paper.impact.details}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Teaching & Instruction */}
        <div className="mt-16 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold heading-clinical mb-2">Teaching & Instruction</h2>
            <p className="text-clinical max-w-2xl mx-auto">
              Workshops and content focused on advocacy, literacy, and applied public health.
            </p>
          </div>

          {teaching.map((course, index) => (
            <Card key={index} className="evidence-card group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="heading-clinical text-xl">{course.title}</CardTitle>
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
                      <Button key={idx} variant="outline" size="sm" disabled={!m.available} asChild={!!m.available}>
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
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold heading-clinical mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Overview
                  </h4>
                  <p className="text-clinical text-sm">{course.description}</p>
                </div>

                {/* Impact strip */}
                {course.impact && (
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
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notes & Writing */}
        <div className="mt-16 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold heading-clinical mb-2">Notes & Writing</h2>
            <p className="text-clinical max-w-2xl mx-auto">
              Documentation, policy analysis, and science communication.
            </p>
          </div>

          {notes.map((note, index) => (
            <Card key={index} className="evidence-card group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="heading-clinical text-xl">{note.title}</CardTitle>
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
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold heading-clinical mb-2">Overview</h4>
                  <p className="text-clinical text-sm">{note.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold heading-clinical mb-2">Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {note.topics.map((t, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
