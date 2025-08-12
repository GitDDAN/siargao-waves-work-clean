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
import { useState } from "react"; // Import useState

const WorkspaceSection = () => {
  // State to manage the coffee button animation
  const [showCoffeeAnimation, setShowCoffeeAnimation] = useState(false);

  const handleCoffeeClick = () => {
    // Show the animation
    setShowCoffeeAnimation(true);
    // Hide it after the animation completes (1.5 seconds)
    setTimeout(() => {
      setShowCoffeeAnimation(false);
    }, 1500);
  };

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
      title: "2 x Focus Hammock",
      description: "Outdoor productivity space for quiet coliving work",
      capacity: "1 person",
      features: ["Jungle views", "Natural ventilation", "Private workspace"],
      hourlyRate: "Included",
      icon: Headphones
    },
    {
      title: "Private Zones", 
      description: "Shared Working Balcony areas designed for coliving community projects",
      capacity: "2-4 people",
      features: ["Bamboo architecture", "Group workspace", "Community collaboration"],
      hourlyRate: "Included",
      icon: Monitor
    },
    {
      title: "Café Style Workspace",
      description: "Focus Table coworking environment perfect for coliving social work",
      capacity: "All coliving members",
      features: ["Coffee station", "Tropical setting", "Community atmosphere"],
      hourlyRate: "Included",
      icon: Coffee
    }
  ];

  return (
    <section id="workspace" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Work Flexibility
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Free Coffee - True Island Spirit
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Work from the hammock, dining table, garden, or bedroom desk - choose your daily office! For AC comfort and Fast WiFi speeds, we know the best cafes on the island. Need serious focus? We'll show you the top coworking offices for those important meeting days.
          </p>
        </div>

        {/* Workspace Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">All Coliving Rooms Include Dedicated Coworking Setup</h3>
          <p className="text-center text-muted-foreground mb-8">Every coliving room features a large table and high-speed fiber WiFi</p>
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
                  
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Coliving Members Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  TH
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Thomas</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    "Perfect setup for my online fitness coaching! Hit CrossFit next door in the morning, then straight to my room's coworking space for client calls. The WiFi is solid and my room stays cool for those early morning coaching sessions."
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>🇳🇱 Netherlands</span>
                    <span>3-month stay</span>
                    <span>Online Fitness Coach</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  AN
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Anna</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    "Love how I can check the surf, drive down to any spot in 3 minutes, then come back to work privately in my room with jungle views and blasting cold AC! The flexibility is unreal - surf when it's good, work when I need to focus."
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>🇩🇪 Germany</span>
                    <span>2-month stay</span>
                    <span>Digital Marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to work from paradise?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Simple, reliable workspace setup with the flexibility to work wherever inspiration strikes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0">
              <a href="https://www.speedtest.net/result/18061767991" target="_blank" rel="noopener noreferrer">
                <Shield className="w-4 h-4 mr-2" />
                See Our WiFi Speed
              </a>
            </Button>
            {/* --- UPDATED: Button is now wrapped for positioning and has an onClick handler --- */}
            <div className="relative">
              <Button 
                variant="outline" 
                size="lg"
                className="hover:bg-primary/10 hover:border-primary/50 transition-colors w-full"
                onClick={handleCoffeeClick}
              >
                <Coffee className="w-4 h-4 mr-2" />
                Free Coffee Always
              </Button>
              {/* --- ADDED: This is the animation element --- */}
              {showCoffeeAnimation && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Coffee className="w-10 h-10 text-primary animate-ping" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;
