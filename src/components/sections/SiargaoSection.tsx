import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Waves,
  MapPin,
  DollarSign,
  Thermometer,
  Utensils,
  Car,
  Heart,
  Leaf,
  Sun,
  Mountain,
  Dumbbell,
  Music,
  Camera,
  Bike,
  ExternalLink
} from "lucide-react";

const SiargaoSection = () => {
  const advantages = [
    {
      title: "Cost of Living",
      subtitle: "70% less than Bali",
      description: "Affordable paradise with quality infrastructure",
      details: [
        "Meals from ₱150-400",
        "Motorbike rental ₱350/day via GoldenBellSiargao.com", 
        "Local transport ₱50-100",
        "Massage ₱500/hour"
      ],
      icon: DollarSign,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Perfect Weather",
      subtitle: "28-32°C year-round",
      description: "Consistent tropical climate ideal for productivity",
      details: [
        "Dry season: March-October",
        "Surf season: August-November",
        "Light rain refreshes afternoons",
        "Gentle trade winds"
      ],
      icon: Thermometer,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Island Adventures",
      subtitle: "Work-life balance",
      description: "Easy access to world-class experiences",
      details: [
        "Cloud 9 surf break (1km)",
        "Island hopping tours",
        "Sohoton Cave tours",
        "Magpupungko tidal pools"
      ],
      icon: Waves,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const locations = [
    {
      name: "CrossFit Siargao",
      distance: "200m walk",
      activity: "Morning workouts & fitness",
      icon: Dumbbell
    },
    {
      name: "General Luna Club",
      distance: "250m walk",
      activity: "Local nightlife & events",
      icon: Music
    },
    {
      name: "Kermit Surf Resort",
      distance: "400m walk",
      activity: "Italian restaurant & bar",
      icon: Utensils
    },
    {
      name: "Cemetery Surf Spot",
      distance: "3-minute drive",
      activity: "Local favorite surf spot",
      icon: Waves
    },
    {
      name: "Cloud 9",
      distance: "5-minute drive",
      activity: "World-famous surf break",
      icon: Waves
    },
    {
      name: "Sunset Bridge",
      distance: "2km drive",
      activity: "Sunset views & photography",
      icon: Camera
    },
    {
      name: "General Luna Town",
      distance: "2km drive", 
      activity: "Restaurants, cafes, shops",
      icon: Utensils
    },
    {
      name: "Bravo Beach Resort",
      distance: "300m Walk",
      activity: "Sunrise views, beach bars",
      icon: Sun
    },
    {
      name: "Golden Bell Siargao",
      distance: "Partner Service",
      activity: "Trusted motorbike rentals",
      icon: Bike,
      featured: true,
      link: "https://goldenbellsiargao.com"
    },
    {
      name: "Sayak Airport",
      distance: "45km drive",
      activity: "Daily flights to Manila/Cebu",
      icon: Car
    }
  ];

  const experiences = [
    {
      title: "Surf Culture",
      description: "Learn from world-class surfers and local experts",
      activities: ["Daily surf lessons", "Board rentals", "Surf photography", "Competition viewing"],
      icon: Waves
    },
    {
      title: "Local Cuisine",
      description: "Fresh seafood and authentic Filipino flavors",
      activities: ["Beach BBQ nights", "Cooking classes", "Food tours", "Local markets"],
      icon: Utensils
    },
    {
      title: "Island Exploration", 
      description: "Discover hidden gems across the archipelago",
      activities: ["Motorbike adventures", "Cave exploration", "Beach hopping", "Waterfall hikes"],
      icon: Mountain
    },
    {
      title: "Sustainable Living",
      description: "Support eco-conscious tourism and local communities",
      activities: ["Beach cleanups", "Local business support", "Eco-workshops", "Conservation projects"],
      icon: Leaf
    }
  ];

  return (
    <section id="siargao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <MapPin className="w-3 h-3 mr-1" />
            Siargao Island Experience
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Siargao?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why digital nomads are choosing Siargao as their long-term base
          </p>
        </div>

        {/* Key Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${advantage.color} p-6 text-white`}>
                  <advantage.icon className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-white/90 font-medium">{advantage.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{advantage.description}</p>
                  <ul className="space-y-2">
                    {advantage.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Map */}
        <div className="bg-muted/50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Perfect Location - Everything Within Walking Distance</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location: any, index) => (
              location.featured ? (
                <a
                  key={index}
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-yellow-400 hover:scale-105 cursor-pointer block"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <location.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <h4 className="font-bold text-yellow-700">{location.name}</h4>
                    <ExternalLink className="w-4 h-4 text-yellow-600" />
                  </div>
                  <p className="text-yellow-600 font-bold text-sm mb-2">🏍️ Recommended Partner</p>
                  <p className="text-sm text-gray-600">{location.activity}</p>
                  <p className="text-xs text-yellow-700 mt-2 font-medium">Click to visit website →</p>
                </a>
              ) : (
                <div key={index} className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <location.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1">{location.name}</h4>
                  <p className="text-primary font-bold text-lg mb-2">{location.distance}</p>
                  <p className="text-sm text-muted-foreground">{location.activity}</p>
                </div>
              )
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Everything you need is just a short walk or quick motorbike ride away!
            </p>
          </div>
        </div>

        {/* Island Experiences */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Island Experiences</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((experience, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <experience.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{experience.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
                  <ul className="space-y-1">
                    {experience.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="text-xs text-muted-foreground">
                        • {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 mb-12 relative overflow-hidden">
          {/* Future Goals Stamp - Updated with tropical colors */}
          <div className="absolute top-4 right-4 transform rotate-12">
            <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg border-2 border-white shadow-lg">
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-wider">Future Goals</div>
                <div className="text-sm font-medium">2025-2027</div>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <span className="inline-block bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">Coming Soon</span>
            <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Supporting Local Community</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our coliving space is committed to sustainable tourism and supporting the local Siargao community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background/50 rounded-xl">
              <div className="text-2xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm">Local Jobs Created</div>
            </div>
            <div className="text-center p-6 bg-background/50 rounded-xl">
              <div className="text-2xl font-bold text-primary mb-2">₱2M+</div>
              <div className="text-sm">Local Business Revenue</div>
            </div>
            <div className="text-center p-6 bg-background/50 rounded-xl">
              <div className="text-2xl font-bold text-secondary mb-2">12</div>
              <div className="text-sm">Conservation Projects</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to experience Siargao?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join a community that's building the future while respecting island culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Explore Local Guide
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary/10 hover:border-primary/50 transition-colors"
            >
              <Waves className="w-4 h-4 mr-2" />
              Watch Island Tour
            </Button>
          </div>
        </div>

        <div className="text-center space-y-4 mt-8">
          <p className="text-sm text-muted-foreground">
            Exact coordinates: <a href="https://maps.google.com/?q=9.791547987108133,126.15896492864357" target="_blank" rel="noopener noreferrer" className="underline">9.791547987108133, 126.15896492864357</a>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary/10 hover:border-primary/50 transition-colors"
              onClick={() => {
                const message = "Hi Ali, please send me the Welcome Package!";
                window.open(`https://wa.me/639083339477?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Request Welcome Package
            </Button>
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0"
              onClick={() => {
                const message = "Hi Ali, I'd like to join the community WhatsApp group!";
                window.open(`https://wa.me/639083339477?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Join Community WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiargaoSection;