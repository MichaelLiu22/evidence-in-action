import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, BookOpen, FlaskConical, TrendingUp, Users, FileText, Calendar } from "lucide-react";

const Research = () => {
  const currentResearch = {
    title: "Maternal Mortality Independent Research",
    period: "2025",
    mentor: "Elizabeth Maglio",
    status: "In Progress",
    focus: "Rising maternal mortality rates in the US and disparities among low-SES/BIPOC populations",
    methodology: [
      "Public health data analysis (CDC, State Health Departments)",
      "Systematic literature review (PubMed, Cochrane Database)",
      "Historical policy review and impact assessment",
      "Statistical modeling and trend analysis"
    ],
    keyFindings: [
      "US maternal mortality rates significantly higher than other developed countries",
      "BIPOC population mortality rates 2-3 times higher than white populations",
      "Low-SES communities lack adequate prenatal care resources",
      "Insurance accessibility strongly correlates with health outcomes"
    ],
    interventions: [
      "Standardized doula support services",
      "Community prenatal care center development",
      "Insurance coverage expansion policies",
      "Culturally sensitive health education programs"
    ],
    proposedProgram: "Campus and nonprofit organization collaborative adolescent maternal health education program"
  };

  const futureResearch = {
    title: "City of Hope Research Internship",
    period: "2025 - Present",
    status: "Ongoing",
    description: "Clinical translational research internship focusing on cancer treatment and patient quality of life improvement",
    plannedOutputs: [
      "Laboratory records and methodological documentation",
      "Research reading notes and literature reviews",
      "Standardized operating procedure (SOP) cards",
      "Cross-disciplinary team collaboration experience summary"
    ]
  };

  const methodologyCards = [
    {
      title: "Data Sources",
      icon: <FileText className="h-5 w-5" />,
      items: [
        "CDC Wonder Database",
        "National Vital Statistics System",
        "State Health Department Records",
        "Healthcare Cost and Utilization Project"
      ]
    },
    {
      title: "Variables Analyzed",
      icon: <TrendingUp className="h-5 w-5" />,
      items: [
        "Maternal mortality ratios by race/ethnicity",
        "Socioeconomic status indicators",
        "Geographic accessibility metrics",
        "Insurance coverage patterns"
      ]
    },
    {
      title: "Analytical Framework",
      icon: <FlaskConical className="h-5 w-5" />,
      items: [
        "Descriptive epidemiological analysis",
        "Multivariate regression modeling",
        "Time series trend analysis",
        "Geographic information system mapping"
      ]
    }
  ];

  return (
    <section id="research" data-glass="research" className="py-section px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Research & Laboratory Experience
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Evidence-based investigation into maternal health disparities 
            and clinical research methodology training
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <Tabs defaultValue="current" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Current Research</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
            <TabsTrigger value="future">Future Work</TabsTrigger>
          </TabsList>

          {/* Current Research Tab */}
          <TabsContent value="current" className="space-y-8">
            <Card 
              id="research-maternal" 
              className="evidence-card relative overflow-hidden"
              style={{
                backgroundImage: "url('/lovable-uploads/sample1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              {/* 背景图片遮罩层 */}
              <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
              <CardHeader className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl heading-clinical mb-2">
                      {currentResearch.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {currentResearch.period}
                      </div>
                      <Badge variant="outline">
                        Mentor: {currentResearch.mentor}
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 border-green-300">
                        {currentResearch.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div className="bg-accent/50 rounded-lg p-4">
                  <h4 className="font-semibold heading-clinical mb-2">Research Focus</h4>
                  <p className="text-clinical">{currentResearch.focus}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Methodology */}
                  <div>
                    <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Research Methodology
                    </h4>
                    <ul className="space-y-2 text-sm text-clinical">
                      {currentResearch.methodology.map((method, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Findings */}
                  <div>
                    <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Key Findings
                    </h4>
                    <ul className="space-y-2 text-sm text-clinical">
                      {currentResearch.keyFindings.map((finding, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          {finding}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Intervention Strategies */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Proposed Intervention Strategies
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentResearch.interventions.map((intervention, idx) => (
                      <div key={idx} className="bg-primary/5 rounded-lg p-3">
                        <div className="text-sm text-clinical">{intervention}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Future Implementation */}
                <div className="border-t border-border/50 pt-6">
                  <h4 className="font-semibold heading-clinical mb-3">
                    Proposed Community Implementation
                  </h4>
                  <p className="text-clinical bg-accent/30 rounded-lg p-4">
                    {currentResearch.proposedProgram}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Methodology Tab */}
          <TabsContent value="methodology" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {methodologyCards.map((card, index) => (
                <Card key={index} className="evidence-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg heading-clinical flex items-center gap-2">
                      <div className="text-primary">{card.icon}</div>
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {card.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-clinical flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs">●</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Research Process Flow */}
            <Card className="evidence-card">
              <CardHeader>
                <CardTitle className="heading-clinical">Research Process Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: "1", title: "Literature Review", desc: "Systematic evidence mapping" },
                    { step: "2", title: "Data Collection", desc: "Multi-source data aggregation" },
                    { step: "3", title: "Analysis", desc: "Statistical modeling & trends" },
                    { step: "4", title: "Intervention Design", desc: "Evidence-based recommendations" }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center space-y-2">
                      <div className="w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center text-sm font-bold mx-auto">
                        {phase.step}
                      </div>
                      <div className="font-semibold text-sm">{phase.title}</div>
                      <div className="text-xs text-muted-foreground">{phase.desc}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Future Work Tab */}
          <TabsContent value="future" className="space-y-8">
            <Card id="research-coh" className="evidence-card">
              <CardHeader>
                <CardTitle className="text-2xl heading-clinical mb-2">
                  {futureResearch.title}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{futureResearch.period}</Badge>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                    {futureResearch.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-clinical text-lg">{futureResearch.description}</p>

                <div>
                  <h4 className="font-semibold heading-clinical mb-3">Planned Research Outputs</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {futureResearch.plannedOutputs.map((output, idx) => (
                      <div key={idx} className="bg-accent/30 rounded-lg p-3 flex items-center gap-3">
                        <FlaskConical className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-clinical">{output}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground italic">
                    * Detailed research records and methodology cards will be continuously updated during the internship,
                    including experimental design, data analysis methods, and cross-disciplinary collaboration experience summaries.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Research Skills Development */}
            <Card className="evidence-card">
              <CardHeader>
                <CardTitle className="heading-clinical">Research Skills Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technical Skills</h4>
                    <ul className="space-y-1 text-sm text-clinical">
                      <li>• Statistical analysis (R, SPSS)</li>
                      <li>• Database management</li>
                      <li>• GIS mapping</li>
                      <li>• Research design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Methodological</h4>
                    <ul className="space-y-1 text-sm text-clinical">
                      <li>• Systematic reviews</li>
                      <li>• Survey design</li>
                      <li>• Interview protocols</li>
                      <li>• Ethics compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Communication</h4>
                    <ul className="space-y-1 text-sm text-clinical">
                      <li>• Scientific writing</li>
                      <li>• Data visualization</li>
                      <li>• Presentation skills</li>
                      <li>• Policy briefings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Research;
