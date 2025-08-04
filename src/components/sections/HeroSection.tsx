import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wifi, Users, Waves } from "lucide-react";
import heroImage from "@/assets/hero-coworking.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Badge */}
          <Badge variant="secondary" className="mx-auto bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <MapPin className="w-3 h-3 mr-1" />
            General Luna, Siargao • 1km to Cloud 9
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Live, Work,{" "}
            <span className="bg-gradient-to-r from-secondary to-orange-400 bg-clip-text text-transparent">
              Surf
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 max-w-3xl mx-auto">
            Siargao's premier digital nomad community where productivity meets paradise
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 py-4">
            {[
              { icon: Users, text: "Community Focused" },
              { icon: Wifi, text: "100+ Mbps WiFi" },
              { icon: Waves, text: "5 min to surf" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-4 h-4" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="sunset" size="xl" className="group">
              <Users className="w-5 h-5 group-hover:animate-wave" />
              Join Our Community
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Waves className="w-5 h-5" />
              View Rooms
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-center">
            {[
              { number: "150+", label: "Digital Nomads" },
              { number: "4.9", label: "Community Rating" },
              { number: "85%", label: "Return Rate" },
            ].map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-wave" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;