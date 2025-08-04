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
  Mountain
} from "lucide-react";

const SiargaoSection = () => {
  const advantages = [
    {
      title: "Cost of Living",
      subtitle: "70% less than Bali",
      description: "Affordable paradise with quality infrastructure",
      details: [
        "Meals from ₱150-400",
        "Motorbike rental ₱300/day", 
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
      name: "Cloud 9",
      distance: "1km",
      activity: "World-famous surf break",
      icon: Waves
    },
    {
      name: "General Luna Town",
      distance: "2km", 
      activity: "Restaurants, cafes, shops",
      icon: Utensils
    },
    {
      name: "Sayak Airport",
      distance: "45km",
      activity: "Daily flights to Manila/Cebu",
      icon: Car
    },
    {
      name: "Doot Beach",
      distance: "3km",
      activity: "Sunset views, beach bars",
      icon: Sun
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
          <h3 className="text-2xl font-bold text-center mb-8">Strategic Location</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <location.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{location.name}</h4>
                <p className="text-primary font-bold text-lg mb-2">{location.distance}</p>
                <p className="text-sm text-muted-foreground">{location.activity}</p>
              </div>
            ))}
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
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
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
            <Button variant="tropical" size="lg">
              <MapPin className="w-4 h-4" />
              Explore Local Guide
            </Button>
            <Button variant="outline" size="lg">
              <Waves className="w-4 h-4" />
              Watch Island Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiargaoSection;