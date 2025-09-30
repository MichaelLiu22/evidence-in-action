import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Users, Award, BookOpen } from "lucide-react";

const Research = () => {
  const researchProjects = [
    {
      title: "Independent Research on Maternal Mortality",
      period: "2024 - Present",
      location: "Independent Study",
      type: "Independent Research",
      focus: "Maternal Health Disparities & Health Equity",
      description: "Comprehensive analysis of maternal mortality rates, focusing on racial and socioeconomic disparities in healthcare access and outcomes.",
      methodology: [
        "Literature review of peer-reviewed research on maternal health disparities",
        "Statistical analysis of CDC and WHO maternal mortality data",
        "Comparative study of healthcare systems across different demographics",
        "Case study analysis of successful intervention programs"
      ],
      findings: [
        "Significant racial disparities in maternal mortality rates persist across all income levels",
        "Socioeconomic factors compound existing healthcare access barriers",
        "Community-based intervention programs show promising results in reducing disparities",
        "Policy changes and healthcare system reforms are critical for long-term improvement"
      ],
      impact: {
        metric: "2025",
        description: "Research completion target",
        details: "Comprehensive report on maternal health equity recommendations"
      },
      tags: ["Maternal Health", "Health Equity", "Data Analysis", "Policy Research"]
    },
    {
      title: "City of Hope — Clinical Research Internship",
      period: "2023 - Present",
      location: "Duarte, CA",
      type: "Clinical Research Internship",
      focus: "Cancer Research & Clinical Trials",
      description: "Hands-on experience in clinical research methodology, patient data analysis, and research protocol development in a leading cancer research institution.",
      methodology: [
        "Clinical trial data collection and analysis",
        "Patient recruitment and consent process management",
        "Research protocol development and implementation",
        "Statistical analysis of clinical outcomes"
      ],
      findings: [
        "Improved understanding of clinical research methodology and ethics",
        "Enhanced skills in data analysis and statistical interpretation",
        "Experience in patient-centered research approaches",
        "Knowledge of regulatory requirements for clinical trials"
      ],
      impact: {
        metric: "100+",
        description: "Clinical trial participants supported",
        details: "Contributed to ongoing cancer research studies"
      },
      evidence: {
        website: "https://www.cityofhope.org/",
        type: "Institutional Documentation"
      },
      tags: ["Clinical Research", "Cancer Research", "Data Analysis", "Patient Care"]
    }
  ];

  return (
    <section data-glass="research" className="py-section">
      <div className="mx-auto max-w-6xl px-6 py-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Research & Academic Work
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Evidence-based research focusing on maternal health disparities, clinical research methodology, and health equity initiatives.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Research Projects */}
        <div className="space-y-12">
          {researchProjects.map((project, index) => {
            // 根据研究项目类型选择背景图片
            const getBackgroundImage = (projectTitle: string) => {
              if (projectTitle.includes("City of Hope")) {
                return "/lovable-uploads/cityofhope.png";
              }
              if (projectTitle.includes("Independent Research on Maternal Mortality")) {
                return "/lovable-uploads/sample1.png";
              }
              return "";
            };

            // 根据研究项目类型选择背景图片的显示方式
            const getBackgroundStyle = (projectTitle: string) => {
              if (projectTitle.includes("City of Hope")) {
                return {
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundColor: 'rgba(59, 130, 246, 0.05)' // 淡蓝色填充
                };
              }
              if (projectTitle.includes("Independent Research on Maternal Mortality")) {
                return {
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundColor: 'rgba(59, 130, 246, 0.05)' // 淡蓝色填充
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
                    <div className="mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.focus}
                      </Badge>
                    </div>
                  </div>
                  
                  {project.evidence?.website && (
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
                  <h4 className="font-semibold heading-clinical mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Research Overview
                  </h4>
                  <p className="text-clinical text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div className="bg-accent/30 rounded-lg p-3 md:p-4">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Award className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                    <span className="font-semibold text-primary text-sm md:text-base">Research Impact</span>
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

                {/* Methodology */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Users className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                    Research Methodology
                  </h4>
                  <ul className="space-y-1.5 md:space-y-2">
                    {project.methodology.map((method, idx) => (
                      <li key={idx} className="text-clinical text-xs md:text-sm flex items-start gap-2">
                        <span className="text-primary mt-1 md:mt-1.5 text-xs">•</span>
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Findings */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Award className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                    Key Findings
                  </h4>
                  <ul className="space-y-1.5 md:space-y-2">
                    {project.findings.map((finding, idx) => (
                      <li key={idx} className="text-clinical text-xs md:text-sm flex items-start gap-2">
                        <span className="text-primary mt-1 md:mt-1.5 text-xs">•</span>
                        {finding}
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

        {/* Research Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">2</div>
            <div className="text-clinical">Active Research Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">100+</div>
            <div className="text-clinical">Research Hours Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary counter-animate mb-2">2025</div>
            <div className="text-clinical">Research Completion Target</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
