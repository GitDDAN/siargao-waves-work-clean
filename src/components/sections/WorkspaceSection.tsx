import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  Zap, 
  Monitor, 
  Headphones, 
  Coffee,
  Shield,
  Phone,
  Calendar,
  Clock,
  CheckCircle
} from "lucide-react";

const WorkspaceSection = () => {
  const techSpecs = [
    {
      feature: "High-Speed Fiber WiFi",
      spec: "100+ Mbps",
      backup: "Generator backup power",
      icon: Wifi,
      status: "guaranteed"
    },
    {
      feature: "Power Backup",
      spec: "Uninterrupted",
      backup: "Generator backup system",
      icon: Zap,
      status: "24/7"
    },
    {
      feature: "Workstations",
      spec: "Ergonomic Setup",
      backup: "Monitor, keyboard, mouse",
      icon: Monitor,
      status: "included"
    },
    {
      feature: "Meeting Rooms",
      spec: "Soundproof",
      backup: "Bookable by the hour",
      icon: Phone,
      status: "private"
    }
  ];

  const workspaceTypes = [
    {
      title: "Focus Hammock",
      description: "Outdoor productivity space for quiet coliving work",
      capacity: "1 person",
      features: ["Jungle views", "Natural ventilation", "Private workspace"],
      hourlyRate: "Included",
      icon: Headphones
    },
    {
      title: "Collaboration Zones", 
      description: "Shared coworking areas designed for coliving community projects",
      capacity: "2-8 people",
      features: ["Bamboo architecture", "Group workspace", "Community collaboration"],
      hourlyRate: "Included",
      icon: Monitor
    },
    {
      title: "Café Style Workspace",
      description: "Relaxed coworking environment perfect for coliving social work",
      capacity: "All coliving members",
      features: ["Coffee station", "Tropical setting", "Community atmosphere"],
      hourlyRate: "Included",
      icon: Coffee
    }
  ];

  const productivity = [
    { metric: "98%", label: "Uptime Guarantee" },
    { metric: "150+", label: "Mbps Average Speed" },
    { metric: "24/7", label: "Technical Support" },
    { metric: "5min", label: "Setup Time" }
  ];

  return (
    <section id="workspace" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Coworking Spaces
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Coworking
            </span> Spaces Within Our Coliving Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional coworking infrastructure designed for our coliving community members
          </p>
        </div>

        {/* Productivity Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {productivity.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techSpecs.map((tech, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{tech.feature}</h4>
                <div className="text-2xl font-bold text-primary mb-1">{tech.spec}</div>
                <p className="text-sm text-muted-foreground mb-3">{tech.backup}</p>
                <Badge variant="secondary" className="text-xs">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {tech.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workspace Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">All Coliving Rooms Include Dedicated Coworking Setup</h3>
          <p className="text-center text-muted-foreground mb-8">Every coliving room features an ergonomic desk and high-speed fiber WiFi</p>
          <div className="grid md:grid-cols-3 gap-8">
            {workspaceTypes.map((workspace, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <workspace.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{workspace.title}</h4>
                      <p className="text-sm text-muted-foreground">{workspace.capacity}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{workspace.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {workspace.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">{workspace.hourlyRate}</div>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Productivity Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                  JM
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Jake Morrison</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    "Launched my SaaS startup while staying here. The reliable internet and focused environment were game-changers."
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>🇦🇺 Australia</span>
                    <span>6-month stay</span>
                    <span>$50K ARR achieved</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                  AM
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Anna Mueller</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    "Completed my master's thesis here. The balance of work and surf kept me motivated throughout."
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>🇩🇪 Germany</span>
                    <span>4-month stay</span>
                    <span>Thesis completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to boost your productivity?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Experience workspace infrastructure that rivals Silicon Valley, in the heart of paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ocean" size="lg">
              <Shield className="w-4 h-4" />
              Test Our WiFi Speed
            </Button>
            <Button variant="outline" size="lg">
              <Clock className="w-4 h-4" />
              Book Day Pass
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;