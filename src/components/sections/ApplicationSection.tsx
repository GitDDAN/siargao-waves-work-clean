import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Send, 
  CheckCircle, 
  Users, 
  Calendar,
  MessageCircle,
  Shield,
  Clock,
  Star
} from "lucide-react";

const ApplicationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    duration: "",
    project: "",
    experience: "",
    why: ""
  });

  const applicationSteps = [
    {
      step: "01",
      title: "Submit Application",
      description: "Tell us about yourself and your projects",
      icon: Send,
      duration: "5 minutes"
    },
    {
      step: "02", 
      title: "Community Review",
      description: "Our community reviews your fit and interests",
      icon: Users,
      duration: "24-48 hours"
    },
    {
      step: "03",
      title: "Video Interview",
      description: "Quick chat to ensure mutual alignment",
      icon: MessageCircle,
      duration: "15 minutes"
    },
    {
      step: "04",
      title: "Welcome Package",
      description: "Arrival info, community intro, local guide",
      icon: CheckCircle,
      duration: "Instant"
    }
  ];

  const membershipBenefits = [
    { benefit: "Priority room selection", icon: Star },
    { benefit: "Member-only events access", icon: Users },
    { benefit: "24/7 community support", icon: Shield },
    { benefit: "Flexible booking terms", icon: Calendar },
    { benefit: "Local partnership discounts", icon: CheckCircle },
    { benefit: "Alumni network access", icon: MessageCircle }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Application submitted:", formData);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Join Our Community
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Apply to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Join Us
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're selective about our community to ensure everyone thrives together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Application Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="w-5 h-5 text-primary" />
                <span>Community Application</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="profession">Profession/Field *</Label>
                    <Select onValueChange={(value) => handleInputChange("profession", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your field" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="developer">Software Developer</SelectItem>
                        <SelectItem value="designer">UX/UI Designer</SelectItem>
                        <SelectItem value="marketer">Digital Marketer</SelectItem>
                        <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                        <SelectItem value="writer">Content Creator/Writer</SelectItem>
                        <SelectItem value="consultant">Consultant</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Intended Stay *</Label>
                    <Select onValueChange={(value) => handleInputChange("duration", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="How long?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                        <SelectItem value="1month">1 month</SelectItem>
                        <SelectItem value="2-3months">2-3 months</SelectItem>
                        <SelectItem value="6months">6+ months</SelectItem>
                        <SelectItem value="exploring">Still exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Current Project/Goals *</Label>
                  <Textarea
                    id="project"
                    value={formData.project}
                    onChange={(e) => handleInputChange("project", e.target.value)}
                    placeholder="Tell us about what you're working on or hoping to achieve during your stay..."
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Remote Work Experience</Label>
                  <Select onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Your remote work background" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New to remote work</SelectItem>
                      <SelectItem value="1year">Less than 1 year</SelectItem>
                      <SelectItem value="1-3years">1-3 years</SelectItem>
                      <SelectItem value="3-5years">3-5 years</SelectItem>
                      <SelectItem value="5+years">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="why">Why Siargao Coliving? *</Label>
                  <Textarea
                    id="why"
                    value={formData.why}
                    onChange={(e) => handleInputChange("why", e.target.value)}
                    placeholder="What draws you to our community and Siargao? How do you see yourself contributing?"
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" variant="ocean" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Submit Application
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By applying, you agree to our community guidelines and selection process
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Process & Benefits */}
          <div className="space-y-8">
            {/* Application Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Application Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {applicationSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{step.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Membership Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Membership Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {membershipBenefits.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{item.benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Questions About Applying?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our community manager for instant answers
                </p>
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4" />
                  Chat with Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Trusted by Digital Nomads Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Community Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Happy Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Return Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;