import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bed, 
  Users, 
  Wifi, 
  AirVent, 
  Coffee, 
  Car,
  Shield,
  Calendar
} from "lucide-react";
import roomImage from "@/assets/room-private.jpg";

const AccommodationSection = () => {
  const roomTypes = [
    {
      title: "Private Ocean Room",
      price: "₱35,000",
      period: "/month",
      discount: "Save 40%",
      image: roomImage,
      features: [
        "Private bathroom",
        "Ocean view workspace",
        "Queen bed",
        "AC + Fan",
        "100+ Mbps WiFi",
        "24/7 access"
      ],
      popular: true,
      capacity: "1 person",
      amenities: [Bed, Shield, Wifi, AirVent]
    },
    {
      title: "Shared Community Room",
      price: "₱22,000", 
      period: "/month",
      discount: "Save 35%",
      image: roomImage,
      features: [
        "Shared bathroom",
        "Community workspace", 
        "Single bed",
        "AC + Fan",
        "100+ Mbps WiFi",
        "Community events"
      ],
      popular: false,
      capacity: "2-3 people",
      amenities: [Users, Coffee, Wifi, AirVent]
    },
    {
      title: "Pod-Style Bed",
      price: "₱15,000",
      period: "/month", 
      discount: "Save 30%",
      image: roomImage,
      features: [
        "Shared facilities",
        "Curtain privacy",
        "Personal storage",
        "Fan cooling",
        "100+ Mbps WiFi",
        "Backpacker friendly"
      ],
      popular: false,
      capacity: "1 person",
      amenities: [Bed, Car, Wifi, Coffee]
    }
  ];

  const amenities = [
    { icon: Wifi, label: "100+ Mbps WiFi", description: "Starlink backup available" },
    { icon: Coffee, label: "24/7 Kitchen", description: "Fully equipped workspace cafe" },
    { icon: Car, label: "Motorbike Rental", description: "Explore Siargao easily" },
    { icon: Shield, label: "24/7 Security", description: "Safe and secure environment" },
    { icon: Calendar, label: "Flexible Stays", description: "Daily, weekly, monthly rates" },
    { icon: Users, label: "Community Events", description: "Surf trips, skill shares, parties" }
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Accommodation Options
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Basecamp
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from private rooms to community pods - all designed for productivity and connection
          </p>
        </div>

        {/* Room Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {roomTypes.map((room, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                room.popular ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              {room.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
                    {room.discount}
                  </div>
                </div>
                
                <CardTitle className="text-xl">{room.title}</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-primary">{room.price}</span>
                  <span className="text-muted-foreground">{room.period}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{room.capacity}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Amenity Icons */}
                <div className="flex justify-center space-x-4">
                  {room.amenities.map((Icon, iconIndex) => (
                    <div 
                      key={iconIndex}
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {room.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={room.popular ? "ocean" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  <Calendar className="w-4 h-4" />
                  Check Availability
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 bg-muted/50 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <amenity.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{amenity.label}</h4>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to make Siargao your basecamp?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join our waitlist for priority booking and exclusive member benefits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ocean" size="lg">
              Join Waitlist
            </Button>
            <Button variant="outline" size="lg">
              Schedule Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;