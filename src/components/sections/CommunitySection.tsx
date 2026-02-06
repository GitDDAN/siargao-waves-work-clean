import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code, Camera, Palette, TrendingUp, MessageCircle, Calendar, Sparkles, Clock } from "lucide-react";
import communityImage from "@/assets/community-collab.jpg";

const CommunitySection = () => {
  const members = [
    {
      name: "Sarah Chen",
      role: "Full-Stack Developer",
      skills: ["React", "Node.js", "AWS"],
      avatar: "SC",
      project: "Building a surf forecast app",
      flag: "🇺🇸"
    },
    {
      name: "Miguel Rodriguez", 
      role: "UX Designer",
      skills: ["Figma", "Design Systems", "Research"],
      avatar: "MR",
      project: "Designing for sustainable tourism",
      flag: "🇪🇸"
    },
    {
      name: "Yuki Tanaka",
      role: "Digital Marketer",
      skills: ["SEO", "Content", "Analytics"],
      avatar: "YT", 
      project: "Marketing for eco-startups",
      flag: "🇯🇵"
    }
  ];

  const projects = [
    {
      title: "Siargao Island Guide App",
      participants: 4,
      skills: ["React Native", "Travel Tech"],
      status: "Launching Soon",
      icon: Code
    },
    {
      title: "Sustainable Tourism Documentary",
      participants: 6,
      skills: ["Video Production", "Environmental"],
      status: "In Production",
      icon: Camera
    },
    {
      title: "Local Artisan Marketplace",
      participants: 3,
      skills: ["E-commerce", "Local Business"],
      status: "MVP Ready",
      icon: Palette
    }
  ];

  return (
    // --- UPDATED: Adjusted padding and removed max-height for better scaling ---
    <section id="community" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* --- UPDATED: Banner is now vertically centered --- */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-xl shadow-lg p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex space-x-2">
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                  <Clock className="w-4 h-4 text-white animate-bounce" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-xl font-bold text-white">
                    🚀 Community Hub Launching August 2025
                  </h3>
                  <p className="text-xs text-white/90 hidden md:block">
                    Get ready for collaborative projects & skill sharing!
                  </p>
                </div>
              </div>
              <Button
                variant="default"
                size="sm"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-3 py-1 rounded-full text-sm border-0 flex-shrink-0 w-full sm:w-auto"
                onClick={() => {
                  const message = "Hi! I'm interested in joining the community when it launches. Can you add me to the early access list?";
                  window.open(`https://wa.me/639083339477?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Join Early Access
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/40 to-accent/40 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-0 filter blur-[2px] opacity-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge variant="outline" className="mb-2 bg-white/80 text-xs">
              Community First
            </Badge>
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our
              </span> Community Hub
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Join our community where digital nomads connect, collaborate, and create amazing projects together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-center mb-8">
            <div className="relative">
              <img
                src={communityImage}
                alt="Digital nomads collaborating"
                className="rounded-xl shadow-lg w-full h-[150px] object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-white rounded-lg p-2 shadow-lg">
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium">24/7 Community Chat</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-background rounded-lg shadow-sm">
                  <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="text-lg font-bold">75%</div>
                  <div className="text-xs text-muted-foreground">Launch Projects</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg shadow-sm">
                  <Calendar className="w-5 h-5 text-accent mx-auto mb-1" />
                  <div className="text-lg font-bold">15+</div>
                  <div className="text-xs text-muted-foreground">Events/Month</div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold">What makes our community special?</h3>
                <ul className="space-y-1 text-muted-foreground text-xs">
                  <li className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span>Daily hangouts and skill sharing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    <span>Weekly project showcases and feedback sessions</span>
                  </li>
                </ul>
              </div>

              <Button 
                variant="default"
                size="sm" 
                className="w-full opacity-70 cursor-not-allowed text-xs bg-gradient-to-r from-primary to-secondary text-white border-0"
                disabled
              >
                Join Our Community (Coming Soon)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
