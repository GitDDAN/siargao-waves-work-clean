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
import { useState } from "react";


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
      feature: "In-Room Desk",
      spec: "Every Room",
      backup: "Large table with natural light",
      icon: Monitor,
      status: "included"
    },
    {
      feature: "Cafe Recommendations",
      spec: "5+ Spots",
      backup: "AC cafes with fast WiFi nearby",
      icon: Coffee,
      status: "local tips"
    }
  ];

  const workspaceTypes = [
    {
      title: "Garden Hammocks",
      description: "Chill outdoor spots to work or relax with jungle views",
      capacity: "1 person",
      features: ["Jungle views", "Natural ventilation", "Quiet & shaded"],
      hourlyRate: "Included",
      icon: Headphones
    },
    {
      title: "Your Room",
      description: "Private room with desk for focused work",
      capacity: "Your Room",
      features: ["In-room desk", "Air conditioning"],
      hourlyRate: "Included",
      icon: Monitor
    },
    {
      title: "Common Area",
      description: "Shared dining table and garden — great for social work sessions",
      capacity: "All villa guests",
      features: ["Free coffee station", "Tropical setting", "Community vibes"],
      hourlyRate: "Included",
      icon: Coffee
    }
  ];

  return (
    <section id="remote-work" className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header — frosted pill */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block bg-white/70 backdrop-blur-md rounded-2xl px-4 py-4 sm:px-8 sm:py-6 shadow-lg shadow-black/5 border border-white/50">
            <Badge variant="outline" className="mb-3 sm:mb-4 bg-white/80 border-primary/30">
              Work-Friendly Setup
            </Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
                Free Coffee - True Island Spirit
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Work from the hammock, dining table, garden, or bedroom desk — choose your daily spot! Every room has a desk and 100+ Mbps fiber WiFi. For AC comfort or a change of scenery, we know the best work-friendly cafes on the island.
            </p>
          </div>
        </div>

        {/* Workspace Types */}
        <div className="mb-16">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-3 sm:p-5 md:p-8 shadow-lg shadow-black/5 border border-white/40">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-2">Every Room is Set Up for Remote Work</h3>
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">A desk, fast WiFi, and your choice of work spots around the villa</p>
            <div className="grid md:grid-cols-3 gap-6">
              {workspaceTypes.map((workspace, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm border-white/60 shadow-md shadow-black/5">
                  <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
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
        </div>

        {/* Success Stories */}
        <div className="bg-white/65 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 mb-12 shadow-lg shadow-black/5 border border-white/40">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8">What Our Guests Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 rounded-xl p-4 sm:p-6 shadow-md shadow-black/5 border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  TH
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Thomas</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    "Perfect setup for my online fitness coaching! Hit CrossFit next door in the morning, then straight to my room's desk for client calls. The WiFi is solid and my room stays cool for those early morning coaching sessions."
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>🇳🇱 Netherlands</span>
                    <span>3-month stay</span>
                    <span>Online Fitness Coach</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-xl p-4 sm:p-6 shadow-md shadow-black/5 border border-white/50">
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
        <div className="text-center bg-white/65 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg shadow-black/5 border border-white/40">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Ready to work from paradise?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Fast WiFi, a desk in every room, and the flexibility to work wherever you feel like
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 shadow-md">
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
                className="hover:bg-primary/10 hover:border-primary/50 transition-colors w-full bg-white/80"
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
