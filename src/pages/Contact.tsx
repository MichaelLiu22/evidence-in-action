import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, ExternalLink, Download, Linkedin, MapPin, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { openResume } from "@/lib/utils";

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleResumeDownload = () => {
    // Open Google Drive resume folder
    openResume();
  };

  const contactInfo = {
    email: "makaylawang07@gmail.com",
    phone: "(626) 491-9968",
    linkedin: "linkedin.com/in/makaylawang",
    location: "Pasadena, CA"
  };

  return (
    <section data-glass="contact" className="py-section">
      <div className="mx-auto max-w-6xl px-6 py-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold heading-clinical mb-4">
            Contact & Collaboration
          </h2>
          <p className="text-xl text-clinical max-w-3xl mx-auto">
            Get in touch for research collaborations, clinical partnerships, and health equity initiatives.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="evidence-card group relative overflow-hidden">
            {/* 背景图片层 */}
            <div 
              className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: "url('/lovable-uploads/sample21.png')",
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
              <CardHeader>
                <CardTitle className="heading-clinical flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact & Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="font-bold heading-clinical mb-4 flex items-center gap-2 bg-white/90 px-3 py-2 rounded-lg shadow-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <div className="flex items-center gap-2">
                        {showEmail ? (
                          <a href={`mailto:${contactInfo.email}`} className="evidence-link text-sm font-semibold bg-white/90 px-2 py-1 rounded shadow-sm">
                            {contactInfo.email}
                          </a>
                        ) : (
                          <span className="text-sm text-muted-foreground font-semibold bg-white/70 px-2 py-1 rounded">Click to reveal email</span>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowEmail(!showEmail)}
                          className="h-6 w-6 p-0 bg-white/90 rounded shadow-sm"
                        >
                          {showEmail ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <div className="flex items-center gap-2">
                        {showPhone ? (
                          <a href={`tel:${contactInfo.phone}`} className="evidence-link text-sm font-semibold bg-white/90 px-2 py-1 rounded shadow-sm">
                            {contactInfo.phone}
                          </a>
                        ) : (
                          <span className="text-sm text-muted-foreground font-semibold bg-white/70 px-2 py-1 rounded">Click to reveal phone</span>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowPhone(!showPhone)}
                          className="h-6 w-6 p-0 bg-white/90 rounded shadow-sm"
                        >
                          {showPhone ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold bg-white/90 px-2 py-1 rounded shadow-sm">{contactInfo.location}</span>
                    </div>
                  </div>
                </div>

                {/* Available For */}
                <div>
                  <h3 className="font-bold heading-clinical mb-4 bg-white/90 px-3 py-2 rounded-lg shadow-sm">Available For</h3>
                  <div className="space-y-2">
                    {[
                      "Research Collaborations",
                      "Clinical Partnerships", 
                      "Health Equity Initiatives",
                      "Speaking Opportunities",
                      "Mentorship Programs",
                      "Community Outreach"
                    ].map((item) => (
                      <Badge key={item} variant="outline" className="mr-2 mb-2 font-semibold bg-white/90 shadow-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Connect */}
                <div>
                  <h3 className="font-bold heading-clinical mb-4 bg-white/90 px-3 py-2 rounded-lg shadow-sm">Connect</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full justify-start font-semibold bg-white/90 shadow-sm" asChild>
                      <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn Profile
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start font-semibold bg-white/90 shadow-sm" onClick={handleResumeDownload}>
                      <Download className="h-4 w-4 mr-2" />
                      View Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
