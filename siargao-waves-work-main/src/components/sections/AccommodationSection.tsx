import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Bed, 
  Users, 
  Wifi, 
  AirVent, 
  Coffee, 
  Car,
  Shield,
  Calendar,
  Share2,
  MessageCircle,
  Bath,
  Zap,
  Heart // <-- Add this line
} from "lucide-react";
import ensuiteMasterImage from "@/assets/ensuite-master.png";
import balconyRoomImage from "@/assets/balcony-room.png";
import cozyRoomImage from "@/assets/cozy-room.png";
import { format } from "date-fns"; // Make sure date-fns is installed

const AccommodationSection = () => {
  const { toast } = useToast();

  const roomTypes = [
    {
      title: "Ensuite Master",
      subtitle: "Your Private Coliving Suite",
      monthlyPrice: "₱33,000",
      weeklyPrice: "₱9,500",
      image: ensuiteMasterImage,
      perfectFor: "Digital nomads seeking premium coliving with privacy and focused coworking space",
      features: [
        "Private ensuite bathroom",
        "Dedicated coworking workspace",
        "Queen bed with premium linens",
        "AC + ceiling fan comfort",
        "High-speed fiber WiFi",
        "24/7 local WhatsApp support"
      ],
      popular: false,
      capacity: "Max 2 guests",
      amenities: [Bath, Bed, Wifi, AirVent, Shield]
    },
    {
      title: "Balcony Room",
      subtitle: "Coliving with Paradise Views",
      monthlyPrice: "₱31,000",
      weeklyPrice: "₱8,500",
      image: balconyRoomImage,
      perfectFor: "Couples enjoying coliving lifestyle with outdoor morning routines and collaborative workspace",
      features: [
        "Private balcony with jungle views",
        "Coworking space with nature views",
        "Queen bed in tropical setting",
        "AC + natural ventilation",
        "High-speed fiber WiFi",
        "Shared bathroom (2 guests max)"
      ],
      popular: true,
      capacity: "Max 2 guests",
      amenities: [Bed, Wifi, AirVent, Coffee]
    },
    {
      title: "Cozy Room",
      subtitle: "Essential Coliving Experience",
      monthlyPrice: "₱28,000",
      weeklyPrice: "₱7,500",
      image: cozyRoomImage,
      perfectFor: "Solo nomads maximizing coliving value for extended community living",
      features: [
        "Garden view workspace",
        "Comfortable double bed",
        "Air conditioning comfort",
        "High-speed fiber WiFi",
        "Shared bathroom with hot shower",
        "Perfect for budget-conscious nomads"
      ],
      popular: false,
      capacity: "Max 1 guest",
      amenities: [Bed, Wifi, AirVent, Coffee]
    }
  ];

  const getAvailabilityDates = (room: typeof roomTypes[0]) => {
    // Updated with specific availability dates
    const availabilityMap = {
      "Cozy Room": {
        nextAvailable: new Date(2025, 7, 7), // August 7, 2025
        availableUntil: new Date(2025, 11, 31) // December 31, 2025
      },
      "Ensuite Master": {
        nextAvailable: new Date(2025, 7, 15), // August 15, 2025
        availableUntil: new Date(2025, 11, 31) // December 31, 2025
      },
      "Balcony Room": {
        nextAvailable: new Date(2025, 7, 15), // August 15, 2025
        availableUntil: new Date(2025, 11, 31) // December 31, 2025
      }
    };
    
    return {
      from: format(availabilityMap[room.title].nextAvailable, 'MMM dd, yyyy'),
      until: format(availabilityMap[room.title].availableUntil, 'MMM dd, yyyy')
    };
  };

  const shareRoom = (room: typeof roomTypes[0]) => {
    const availability = getAvailabilityDates(room);
    const imageUrl = window.location.origin + room.image; // Get full URL for image
    const shareText = `
🌊 Discover Your Perfect Coliving Space in Siargao!

${room.title} - ${room.subtitle}
📅 Available: ${availability.from} to ${availability.until}

💰 Stay with Us:
• Monthly: ${room.monthlyPrice}
• Weekly: ${room.weeklyPrice}

✨ Room Highlights:
${room.features.map(f => `• ${f}`).join('\n')}

👥 Perfect for: ${room.perfectFor}

🏠 View the space: ${imageUrl}

🌴 Book your stay: ${window.location.href}

Contact us on WhatsApp to reserve your spot!
`.trim();

    if (navigator.share) {
      navigator.share({
        title: `${room.title} at Siargao Coliving`,
        text: shareText,
        url: window.location.href
      }).catch(err => {
        navigator.clipboard.writeText(shareText);
        toast({
          title: "Room details copied!",
          description: "Share this room with your friends",
        });
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Room details copied!",
        description: "Share this room with your friends",
      });
    }
  };

  const openWhatsApp = (room: typeof roomTypes[0]) => {
    const message = `Hi! I'm interested in the ${room.title} for coliving at Siargao. Can you share availability for both short and long-term stays?`;
    const whatsappUrl = `https://wa.me/639083339477?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const amenities = [
    { icon: Wifi, label: "High-Speed Fiber WiFi", description: "Reliable 100+ Mbps" },
    { icon: Coffee, label: "24/7 Kitchen", description: "Fully equipped coliving kitchen space" },
    { icon: Shield, label: "24/7 Security", description: "CCTV system and secure coliving environment" },
    { icon: Calendar, label: "Flexible Stays", description: "Weekly and monthly coliving rates" },
    { icon: Users, label: "Live-in Hosts for 24/7 Support", description: "On-property team for all your needs" },
    { icon: Heart, label: "Island Partnership Network", description: "Best local guides & experiences" }
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Tropical Paradise Coliving
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Siargao Villa
            </span>{" "}
            Coliving Suites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Your Dream Island Living & Coworking Space Awaits
          </p>
          <div className="bg-primary/5 p-4 rounded-lg inline-block">
            <h3 className="text-lg font-semibold text-primary mb-2">Next Available Suites:</h3>
            <p className="text-sm text-muted-foreground">
              🌟 Cozy Room - Available August 7th | Ensuite Master & Balcony Suite - Available August 15th
            </p>
          </div>
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
                  <Button
                    variant="secondary"
                    size="sm" 
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white text-black"
                    onClick={() => shareRoom(room)}
                  >
                    <Share2 className="w-3 h-3 mr-1" />
                    Share
                  </Button>
                </div>
                
                <CardTitle className="text-xl">{room.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-3">{room.subtitle}</p>
                
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-primary">{room.monthlyPrice}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-semibold text-secondary">{room.weeklyPrice}</span>
                    <span className="text-muted-foreground text-sm">/week</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
                  <Users className="w-4 h-4" />
                  <span>{room.capacity}</span>
                </div>

                <div className="flex flex-col gap-2 mt-3 bg-primary/5 p-3 rounded-lg border border-primary/10">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">Suite Availability:</span>
                  </div>
                  <span className="text-sm text-primary font-medium">
                    Move in from {getAvailabilityDates(room).from}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Perfect For */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm font-medium mb-1">Perfect For:</p>
                  <p className="text-sm text-muted-foreground">{room.perfectFor}</p>
                </div>

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

                <div className="flex gap-2">
                  <Button 
                    variant={room.popular ? "ocean" : "outline"} 
                    size="lg" 
                    className="flex-1"
                    onClick={() => openWhatsApp(room)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => shareRoom(room)}
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
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

        {/* Coliving Concierge Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Your Coliving Concierge Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "✈️", title: "Arrival Coordination", description: "Seamless coliving guest arrivals" },
              { icon: "🗺️", title: "Community Orientation", description: "Island integration for coliving members" },
              { icon: "🏄", title: "Surf Buddy Connections", description: "Connect with surf-loving colivers" },
              { icon: "☕", title: "Best Coworking Cafés", description: "Local workspace recommendations" },
              { icon: "🏢", title: "External Coworking Partnerships", description: "Access to Coco Space & more" },
              { icon: "💆", title: "Wellness Recommendations", description: "Maintain health during long-term stays" },
              { icon: "📅", title: "Weekly Community Activities", description: "Regular coliving events & meetups" },
              { icon: "🏍️", title: "Transportation Arrangements", description: "Motorbike rentals & island transport" }
            ].map((service, index) => (
              <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl mb-2">{service.icon}</div>
                <h4 className="font-medium mb-1 text-sm">{service.title}</h4>
                <p className="text-xs text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Coliving Community?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Experience authentic tropical coliving with professional coworking facilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="ocean" 
              size="lg"
              onClick={() => {
                const message = "Hi! I'm interested in joining your coliving community at Siargao. Can you share more details about availability for both short and long-term stays?";
                window.open(`https://wa.me/639083339477?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Join Our Coliving Community
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const message = "Hi! I'd like to schedule a virtual tour of your coliving space. When would be a good time?";
                window.open(`https://wa.me/639083339477?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Schedule Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;