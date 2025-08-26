import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, ShoppingBag, TrendingUp, Users, Package, CheckCircle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "heartbeat",
      title: "heARTbeat",
      subtitle: "住院患者艺术/感官护理包项目",
      status: "Active",
      launched: "2023",
      category: "Patient Care Innovation",
      description: "为住院患者特别是痴呆症患者及家属设计的艺术感官治疗包，通过标准化流程提供个性化护理支持。",
      target: "住院患者（重点：痴呆症、长期住院、ICU 患者家属）",
      impact: {
        packages: "200+",
        departments: "5+",
        feedback: "98%",
        expansion: "3 hospitals"
      },
      components: [
        "艺术创作材料（彩铅、画纸、涂色本）",
        "感官刺激物品（芳香疗法、触觉材料）",
        "认知支持工具（简单拼图、记忆卡片）",
        "情绪支持资源（冥想指导、音乐播放列表）"
      ],
      process: [
        "需求评估：与护理团队协商确定患者需求",
        "物资定制：根据科室特点调整包装内容",
        "分发协调：与社工团队建立分发机制",
        "效果跟踪：收集患者与家属反馈数据"
      ],
      collaborations: [
        "神经科 - 痴呆症患者专项",
        "ICU - 家属情绪支持",
        "老年科 - 认知刺激活动",
        "社工部 - 分发协调与效果评估"
      ],
      evidence: "https://heartbeatorganization.weebly.com/",
      nextSteps: [
        "扩展到更多医院系统",
        "开发数字化跟踪系统",
        "建立志愿者培训计划",
        "与医疗保险系统合作覆盖成本"
      ]
    },
    {
      id: "piggyco",
      title: "Piggy & Co Tote Bags",
      subtitle: "新手妈妈关怀包项目",
      status: "Expanding",
      launched: "2024",
      category: "Maternal Health Support",
      description: "为新手妈妈设计并分发的实用关怀包，重点关注产后即时需求与情绪支持。",
      target: "产科住院新手妈妈（特别是首次生产、高风险妊娠恢复期）",
      impact: {
        packages: "150+",
        departments: "3",
        feedback: "96%",
        partnerships: "2 clinics"
      },
      components: [
        "产后护理必需品（护理垫、舒适用品）",
        "婴儿护理基础工具（温度计、护理指南）",
        "情绪支持资源（产后抑郁信息、支持热线）",
        "营养恢复补充品（健康零食、水化提醒）"
      ],
      process: [
        "设计研究：调研新手妈妈最迫切需求",
        "物资采购：建立供应商关系与成本控制",
        "分发机制：与产科护理团队协作",
        "效果评估：产后 6 周随访调查"
      ],
      collaborations: [
        "产科 - 住院期间分发",
        "社工团队 - 高风险案例识别",
        "营养科 - 恢复期营养指导",
        "心理健康服务 - 产后抑郁筛查"
      ],
      evidence: "https://www.thepiggyco.com/",
      nextSteps: [
        "对接更多产科诊所",
        "开发产前版本关怀包",
        "建立捐助者网络",
        "研究长期健康结果影响"
      ]
    },
    {
      id: "money-mindset",
      title: "Makayla's Money Mindset",
      subtitle: "金融素养与心理学交叉科普写作",
      status: "Ongoing",
      launched: "2023",
      category: "Health Education & Advocacy",
      description: "通过博客平台探讨金融素养、心理健康与健康公平的交叉议题，为青少年提供实用的理财与健康决策指导。",
      target: "高中生及大学生（特别关注低收入背景学生的金融健康素养）",
      impact: {
        readers: "1000+",
        articles: "25+",
        engagement: "85%",
        shares: "500+"
      },
      topics: [
        "Healthcare costs & insurance literacy",
        "College financing & health insurance",
        "Mental health economics for students",
        "Financial stress & academic performance"
      ],
      approach: [
        "研究驱动内容：引用同行评议研究",
        "案例分析：真实场景应用",
        "行动指南：可操作的决策框架",
        "资源链接：可靠的金融与健康资源"
      ],
      collaborations: [
        "学校咨询中心 - 学生财务压力支持",
        "社区金融教育机构 - 内容审核",
        "同龄人网络 - 内容反馈与分享",
        "专业导师 - 内容准确性验证"
      ],
      evidence: "https://makaylamoneymindset.weebly.com/blog",
      nextSteps: [
        "开发针对医学预科生的专题系列",
        "与更多教育机构合作推广",
        "制作多媒体内容（播客、视频）",
        "建立同龄人金融健康互助网络"
      ]
    }
  ];

  return (
    <section id="projects" className="py-section px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Projects & Initiatives
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Self-initiated programs addressing real healthcare needs 
            with measurable community impact and sustainable implementation
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="evidence-card group hover:shadow-xl transition-all duration-300">
              <CardHeader className="border-b border-border/50">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl heading-clinical group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge className={project.status === 'Active' ? 'bg-green-100 text-green-800 border-green-300' : 'bg-blue-100 text-blue-800 border-blue-300'}>
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg text-clinical">{project.subtitle}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Launched {project.launched}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    {Object.entries(project.impact).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <div className="text-xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8 pt-6">
                {/* Description & Target */}
                <div className="space-y-4">
                  <p className="text-clinical text-lg leading-relaxed">{project.description}</p>
                  <div className="bg-accent/50 rounded-lg p-4">
                    <h4 className="font-semibold heading-clinical mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Target Population
                    </h4>
                    <p className="text-clinical text-sm">{project.target}</p>
                  </div>
                </div>

                {/* Components & Process */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold heading-clinical mb-4 flex items-center gap-2">
                      <Package className="h-4 w-4 text-primary" />
                      {project.id === 'money-mindset' ? 'Content Topics' : 'Package Components'}
                    </h4>
                    <ul className="space-y-2">
                      {(project.id === 'money-mindset' ? project.topics : project.components).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-clinical">
                          <CheckCircle className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold heading-clinical mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      {project.id === 'money-mindset' ? 'Content Approach' : 'Implementation Process'}
                    </h4>
                    <ul className="space-y-2">
                      {(project.id === 'money-mindset' ? project.approach : project.process).map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-clinical">
                          <span className="bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Collaborations */}
                <div>
                  <h4 className="font-semibold heading-clinical mb-4 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    Key Collaborations
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.collaborations.map((collab, idx) => (
                      <div key={idx} className="bg-primary/5 rounded-lg p-3 text-sm text-clinical">
                        {collab}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-border/50 pt-6">
                  <h4 className="font-semibold heading-clinical mb-4">Future Development</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.nextSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-clinical">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border/50">
                  <div className="space-y-1">
                    <div className="text-xs citation-style">
                      Project Documentation & Evidence
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last updated: {new Date().toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="evidence-link group">
                    <ExternalLink className="h-3 w-3 mr-2 group-hover:scale-110 transition-transform" />
                    View Project Site
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Impact Summary */}
        <div className="mt-16">
          <Card className="evidence-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-center heading-clinical">Collective Project Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">350+</div>
                  <div className="text-sm text-muted-foreground">Total Packages Distributed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Healthcare Partnerships</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Individuals Reached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">97%</div>
                  <div className="text-sm text-muted-foreground">Positive Feedback Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Years Active</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;