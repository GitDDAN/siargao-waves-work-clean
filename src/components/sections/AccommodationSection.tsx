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
  Heart
} from "lucide-react";
import ensuiteMasterImage from "@/assets/ensuite-master.png";
import balconyRoomImage from "@/assets/balcony-room.png";
import cozyRoomImage from "@/assets/cozy-room.png";
import { format } from "date-fns";

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
      socialTagline: "🌊 Premium Coliving Suite with Private Bathroom & Coworking Space in Paradise! Perfect for Digital Nomads seeking luxury island living.",
      features: [
        "Private ensuite bathroom",
        "Dedicated coworking workspace",
        "Queen bed with premium linens",
        "AC + ceiling fan comfort",
        "High-speed fiber WiFi",
        "New Linen & Towels Weekly",
        "Weekly Cleaning Service",
        "Extra Large balcony with Hammock"
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
      socialTagline: "🌴 Wake Up to Jungle Views Every Day! Coliving Suite with Private Balcony - Perfect for Couples & Digital Nomads in Siargao Paradise.",
      features: [
        "Private balcony with jungle views",
        "Coworking space with nature views",
        "Queen bed in tropical setting",
        "AC + natural ventilation",
        "High-speed fiber WiFi",,
        "New Linen & Towels Weekly",
        "Weekly Cleaning Service",
        "Perfect for couples or solo nomads"
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
      socialTagline: "🏄‍♂️ Budget-Friendly Island Coliving! Perfect for Solo Digital Nomads - Garden Views, Great Community, Unbeatable Value in Siargao.",
      features: [
        "Jungle view workspace",
        "Comfortable double bed",
        "Air conditioning comfort",
        "High-speed fiber WiFi",
        "Shared bathroom with hot shower",
        "Perfect for budget-conscious nomads",
         "New Linen & Towels Weekly",
        "Weekly Cleaning Service"
      ],
      popular: false,
      capacity: "Max 2 guest",
      amenities: [Bed, Wifi, AirVent, Coffee]
    }
  ];

  const getAvailabilityDates = (room) => {
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
    
    const roomData = availabilityMap[room.title];
    
    return {
      from: format(roomData.nextAvailable, 'MMM dd, yyyy'),
      until: format(roomData.availableUntil, 'MMM dd, yyyy'),
      fromShort: format(roomData.nextAvailable, 'MMM dd'),
      monthYear: format(roomData.nextAvailable, 'MMMM yyyy'),
      nextAvailable: roomData.nextAvailable // Add this for sorting
    };
  };

  const shareRoom = async (room) => {
    const availability = getAvailabilityDates(room);
    const currentUrl = window.location.href.split('#')[0]; // Remove any existing hash
    const roomUrl = `${currentUrl}#${room.title.toLowerCase().replace(/ /g, '-')}`;
    
    // Create absolute image URL - try multiple approaches
    let imageUrl;
    try {
      // Try to create absolute URL from relative path
      imageUrl = new URL(room.image, window.location.origin).href;
    } catch (error) {
      // Fallback to simple concatenation
      imageUrl = window.location.origin + room.image;
    }
    
    // Enhanced text for sharing with image
    const enhancedShareText = `
🏝️ ${room.title} - Siargao Coliving Paradise

${room.socialTagline}

📅 AVAILABLE: ${availability.from}
💰 PRICING:
• Monthly: ${room.monthlyPrice} 
• Weekly: ${room.weeklyPrice}

✨ ROOM HIGHLIGHTS:
${room.features.slice(0, 4).map(f => `• ${f}`).join('\n')}

👥 ${room.perfectFor}

🌊 Book your island coliving experience: ${roomUrl}

Contact us on WhatsApp to secure your spot! 🏄‍♀️

📸 See room photos: ${imageUrl}
    `.trim();

    // Update meta tags first for better social media previews
    updateMetaTags(room, availability, roomUrl, imageUrl);

    try {
      // For mobile devices with native sharing
      if (navigator.share) {
        const shareData = {
          title: `${room.title} - Siargao Coliving Paradise`,
          text: room.socialTagline,
          url: roomUrl
        };
        
        await navigator.share(shareData);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(enhancedShareText);
        toast({
          title: "Room details copied! 📋",
          description: "Perfect for sharing on social media - includes room image link and preview data!",
        });
      }
    } catch (err) {
      // Final fallback
      try {
        await navigator.clipboard.writeText(enhancedShareText);
        toast({
          title: "Room details copied! 📋", 
          description: "Share this amazing coliving space with your friends! Image link included.",
        });
      } catch (clipboardErr) {
        // Last resort - just copy the URL
        const fallbackText = `Check out this coliving room in Siargao: ${roomUrl}`;
        try {
          await navigator.clipboard.writeText(fallbackText);
          toast({
            title: "Link copied!",
            description: "Share this URL: " + roomUrl,
          });
        } catch (finalErr) {
          toast({
            title: "Share manually",
            description: "Copy this URL: " + roomUrl,
          });
        }
      }
    }
  };

  const updateMetaTags = (room, availability, roomUrl, imageUrl) => {
    // Remove existing meta tags
    const existingMetas = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]');
    existingMetas.forEach(meta => meta.remove());

    // Add new meta tags for rich social sharing with image
    const metaTags = [
      { property: 'og:title', content: `${room.title} - Siargao Coliving Paradise` },
      { property: 'og:description', content: `${room.socialTagline} Available from ${availability.from}. ${room.perfectFor}` },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${room.title} - ${room.subtitle}` },
      { property: 'og:url', content: roomUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Siargao Coliving Paradise' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${room.title} - Siargao Coliving` },
      { name: 'twitter:description', content: `${room.socialTagline} Available ${availability.fromShort}` },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:image:alt', content: `${room.title} - ${room.subtitle}` }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.property) meta.setAttribute('property', tag.property);
      if (tag.name) meta.setAttribute('name', tag.name);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });
  };

  const openWhatsApp = (room) => {
    const availability = getAvailabilityDates(room);
    const message = `Hi! I'm interested in the ${room.title} for coliving at Siargao. I saw it's available from ${availability.from}. Can you share more details about both short and long-term stays?`;
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

        {/* Room Types - Sorted by availability date */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {roomTypes
            .sort((a, b) => {
              // Sort by availability date - earliest first
              const dateA = getAvailabilityDates(a).nextAvailable || new Date(2099, 0, 1);
              const dateB = getAvailabilityDates(b).nextAvailable || new Date(2099, 0, 1);
              return dateA.getTime() - dateB.getTime();
            })
            .map((room, index) => (
            <Card 
              key={index} 
              id={room.title.toLowerCase().replace(/ /g, '-')}
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
                    alt={`${room.title} - ${room.subtitle} - Available from ${getAvailabilityDates(room).from}`}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="secondary"
                    size="sm" 
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white text-black transition-all hover:scale-105"
                    onClick={() => shareRoom(room)}
                  >
                    <Share2 className="w-3 h-3 mr-1" />
                    Share
                  </Button>
                  <div className="absolute bottom-3 left-3 bg-primary text-white px-2 py-1 rounded-md text-xs font-medium">
                    Available {getAvailabilityDates(room).fromShort}
                  </div>
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
                    variant={room.popular ? "default" : "outline"} 
                    size="lg" 
                    className={`flex-1 ${room.popular ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0' : ''}`}
                    onClick={() => openWhatsApp(room)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => shareRoom(room)}
                    className="hover:scale-105 transition-transform"
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
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0"
              onClick={() => {
                const message = "Hi! I'm interested in joining your coliving community at Siargao. Can you share more details about availability for both short and long-term stays?";
                window.open(`https://wa.me/639083339477?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Our Coliving Community
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary/10 hover:border-primary/50 transition-colors"
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