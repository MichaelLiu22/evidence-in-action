import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Users, Target, TrendingUp, Calendar, ExternalLink } from "lucide-react";

const Leadership = () => {
  const fellowship = {
    title: "Coro Youth Climate Fellowship",
    period: "2025",
    location: "Los Angeles, CA",
    description: "系统思维训练与跨部门合作的气候政策青年领导力项目",
    components: [
      "政府机构实地走访与政策制定流程学习",
      "非营利组织运营模式与社区动员策略",
      "企业可持续发展实践与利益相关者管理",
      "跨部门访谈与协作项目设计"
    ],
    skills: [
      "Systems thinking & policy analysis",
      "Stakeholder engagement & negotiation",
      "Community organizing & advocacy",
      "Cross-sector collaboration"
    ],
    teamProject: "气候适应与健康公平交叉议题研究：低收入社区极端天气应对策略",
    relevance: "将系统思维应用于健康公平议题，特别是环境因素对脆弱人群健康结果的影响"
  };

  const competitions = [
    {
      title: "Wharton Global Youth Program",
      type: "Business Case Competition",
      year: "2023",
      focus: "Healthcare Innovation & Finance",
      role: "Team Strategy Lead",
      outcome: "Completed Program Certificate",
      description: "医疗创新商业模式分析，重点关注可持续融资与患者可及性平衡",
      skills: ["Financial modeling", "Market analysis", "Presentation skills", "Team leadership"],
      relevance: "为医疗创新项目提供商业可行性分析能力"
    },
    {
      title: "NFTE National Competition",
      type: "Entrepreneurship Challenge",
      year: "2024",
      focus: "Social Enterprise Development",
      role: "Founder & Presenter",
      outcome: "Regional Advancement",
      description: "社会企业模式设计，聚焦解决医疗资源不平等问题",
      skills: ["Business plan development", "Social impact measurement", "Pitch delivery", "Financial planning"],
      relevance: "将创业思维应用于医疗健康领域社会问题解决"
    },
    {
      title: "Harvard Crimson Business Competition",
      type: "Case Analysis Challenge",
      year: "2024",
      focus: "Healthcare Policy & Economics",
      role: "Research Analyst",
      outcome: "Top 25% Performance",
      description: "医疗政策经济学案例分析，评估政策干预的成本效益",
      skills: ["Policy analysis", "Economic modeling", "Data interpretation", "Strategic thinking"],
      relevance: "政策分析能力直接支持健康公平研究与倡导工作"
    },
    {
      title: "Blue Ocean Strategy Competition",
      type: "Innovation Strategy Challenge",
      year: "2024",
      focus: "Healthcare Access Innovation",
      role: "Innovation Strategist",
      outcome: "Innovation Award",
      description: "医疗服务创新策略设计，创造患者、提供者、支付方的价值共赢",
      skills: ["Innovation strategy", "Value proposition design", "Market creation", "Collaborative problem-solving"],
      relevance: "创新思维应用于医疗服务模式改进与健康公平提升"
    }
  ];

  const leadershipPhilosophy = {
    approach: "Evidence-based collaborative leadership",
    principles: [
      "数据驱动决策：所有倡议均基于严格的证据评估",
      "包容性参与：确保不同背景声音在决策过程中被听到",
      "系统性思维：关注根本原因而非表面症状",
      "可持续影响：设计长期可持续的干预策略"
    ],
    application: "将商业策略思维与社会公益目标结合，在医疗健康领域创造可测量的积极变化"
  };

  return (
    <section id="leadership" className="py-section px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Leadership & Strategic Development
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Cross-sector leadership experience combining policy analysis, 
            business strategy, and systems thinking for healthcare innovation
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <Tabs defaultValue="fellowship" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fellowship">Fellowship</TabsTrigger>
            <TabsTrigger value="competitions">Competitions</TabsTrigger>
            <TabsTrigger value="philosophy">Leadership Approach</TabsTrigger>
          </TabsList>

          {/* Fellowship Tab */}
          <TabsContent value="fellowship" className="space-y-8">
            <Card className="evidence-card">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl heading-clinical mb-2">
                      {fellowship.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {fellowship.period}
                      </div>
                      <Badge variant="outline">
                        {fellowship.location}
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                        Current Program
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-accent/50 rounded-lg p-4">
                  <p className="text-clinical text-lg">{fellowship.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Program Components */}
                  <div>
                    <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      Program Components
                    </h4>
                    <ul className="space-y-2 text-sm text-clinical">
                      {fellowship.components.map((component, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Development */}
                  <div>
                    <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Leadership Skills Developed
                    </h4>
                    <ul className="space-y-2 text-sm text-clinical">
                      {fellowship.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Team Project */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Collaborative Team Project
                  </h4>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-clinical font-medium mb-2">{fellowship.teamProject}</p>
                    <p className="text-clinical text-sm italic">{fellowship.relevance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Competitions Tab */}
          <TabsContent value="competitions" className="space-y-6">
            <div className="grid gap-6">
              {competitions.map((comp, index) => (
                <Card key={index} className="evidence-card group hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-lg heading-clinical group-hover:text-primary transition-colors">
                          {comp.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline">{comp.type}</Badge>
                          <Badge variant="secondary">{comp.year}</Badge>
                          <Badge variant="outline">{comp.role}</Badge>
                        </div>
                      </div>
                      
                      <div className="text-center lg:text-right">
                        <div className="text-sm font-semibold text-primary">{comp.outcome}</div>
                        <div className="text-xs text-muted-foreground">{comp.focus}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-clinical">{comp.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm heading-clinical mb-2">Skills Applied</h5>
                        <div className="flex flex-wrap gap-1">
                          {comp.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-sm heading-clinical mb-2">Healthcare Relevance</h5>
                        <p className="text-xs text-clinical">{comp.relevance}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Competition Statistics */}
            <Card className="evidence-card border-accent">
              <CardHeader>
                <CardTitle className="heading-clinical text-center">Competition Performance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">4</div>
                    <div className="text-sm text-muted-foreground">Competitions Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">2</div>
                    <div className="text-sm text-muted-foreground">Awards Received</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Team Collaborations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">Years Active</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leadership Philosophy Tab */}
          <TabsContent value="philosophy" className="space-y-8">
            <Card className="evidence-card">
              <CardHeader>
                <CardTitle className="text-2xl heading-clinical">Leadership Philosophy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold heading-clinical mb-4">
                    {leadershipPhilosophy.approach}
                  </h3>
                  <p className="text-clinical max-w-2xl mx-auto">
                    {leadershipPhilosophy.application}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold heading-clinical mb-4 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Core Leadership Principles
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {leadershipPhilosophy.principles.map((principle, idx) => (
                      <div key={idx} className="bg-accent/30 rounded-lg p-4">
                        <p className="text-clinical text-sm">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leadership Impact Areas */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Policy & Advocacy",
                  description: "Systems-level thinking for healthcare policy development",
                  examples: ["Climate health policy", "Maternal health advocacy", "Health equity initiatives"]
                },
                {
                  title: "Innovation & Strategy", 
                  description: "Business strategy applied to healthcare challenges",
                  examples: ["Patient care innovation", "Sustainable program design", "Cross-sector partnerships"]
                },
                {
                  title: "Community Engagement",
                  description: "Inclusive leadership for diverse stakeholder alignment",
                  examples: ["Student voice amplification", "Community health outreach", "Cultural competency advocacy"]
                }
              ].map((area, index) => (
                <Card key={index} className="evidence-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg heading-clinical">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-clinical text-sm">{area.description}</p>
                    <div>
                      <h5 className="font-semibold text-xs heading-clinical mb-2">Applications:</h5>
                      <ul className="space-y-1">
                        {area.examples.map((example, idx) => (
                          <li key={idx} className="text-xs text-clinical flex items-start gap-1">
                            <span className="text-primary mt-1">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Leadership;