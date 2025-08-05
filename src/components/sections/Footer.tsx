import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Waves, // Kept for consistency if you want to use it
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Clock,
  Heart
} from "lucide-react";

// This is the same custom SVG logo from your original file.
const SiargaoLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" rx="40" ry="40" fill="#f97316"/>
    <g transform="translate(30, 40)">
      <path d="M20 50 L70 20 L120 50 L20 50 Z" fill="white" stroke="none"/>
      <path d="M35 50 L70 30 L105 50 L35 50 Z" fill="#f97316"/>
      <rect x="20" y="50" width="100" height="80" fill="white" stroke="none"/>
      <rect x="25" y="55" width="90" height="70" fill="#f97316"/>
      <g fill="white">
        <path d="M35 70 Q45 65 55 70 T75 70 T95 70 Q100 65 105 70" stroke="white" strokeWidth="4" fill="none"/>
        <path d="M35 85 Q45 80 55 85 T75 85 T95 85 Q100 80 105 85" stroke="white" strokeWidth="4" fill="none"/>
        <path d="M35 100 Q45 95 55 100 T75 100 T95 100 Q100 95 105 100" stroke="white" strokeWidth="4" fill="none"/>
      </g>
      <rect x="30" y="130" width="15" height="15" fill="white"/>
      <rect x="95" y="130" width="15" height="15" fill="white"/>
    </g>
    <ellipse cx="100" cy="175" rx="80" ry="8" fill="#d97706"/>
  </svg>
);

const Footer = () => {
  const quickLinks = [
    { label: "Community", href: "#community" },
    { label: "Rooms", href: "#rooms" },
    { label: "Workspace", href: "#workspace" },
    { label: "Siargao Guide", href: "#siargao" }
  ];

  // --- UPDATED: WhatsApp link now includes the full name ---
  const contact = [
    {
      icon: Mail,
      label: "alisamarijaen@gmail.com",
      href: "mailto:alisamarijaen@gmail.com"
    },
    {
      icon: Phone,
      label: "+63 908 333 9477",
      href: "tel:+639083339477"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/639083339477?text=Hi!%20I'd%20like%20to%20ask%20a%20question%20about%20Siargao%20Salamat%20Villa%20Coliving."
    }
  ];

  const social = [
    { icon: Instagram, href: "https://www.instagram.com/alisaaaa.j/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/alisa.jaen.3", label: "Facebook" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8">
                <SiargaoLogo size={32} />
              </div>
              {/* --- UPDATED: Logo text changed --- */}
              <div className="flex flex-col">
                <span className="text-lg font-bold">Siargao Salamat</span>
                <span className="text-xs text-accent font-medium -mt-1">Villa Coliving</span>
              </div>
            </div>
            <p className="text-sm text-background/70 max-w-xs">
              Siargao's premier digital nomad community where productivity meets paradise.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-background/70">General Luna, Purok 5</span>
              <span className="text-background/70">Siargao Island</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              {contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-2 text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Join Us</h4>
            <div className="space-y-4">
              <p className="text-sm text-background/70">
                Ready to be part of our community?
              </p>
              <Button
                variant="default"
                size="sm"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0"
                onClick={() => {
                  // --- UPDATED: WhatsApp message with new name ---
                  const message = "Hi! I'm interested in booking a stay at Siargao Salamat Villa Coliving. Can you share more details about availability?";
                  window.open(`https://wa.me/639083339477?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Book Now
              </Button>
              <div className="flex space-x-3">
                {social.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={item.label}
                  >
                    <item.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">Goal 150+</div>
              <div className="text-xs text-background/70">Community Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">100+</div>
              <div className="text-xs text-background/70">WiFi Speed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">4.9</div>
              <div className="text-xs text-background/70">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs text-background/70">Community Support</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-background/70">
              {/* --- UPDATED: Copyright with new name --- */}
              <span>&copy; 2025 Siargao Salamat Villa Coliving. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>in Siargao</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <Badge variant="secondary" className="bg-background/10 text-background border-background/20">
                <Clock className="w-3 h-3 mr-1" />
                GMT+8
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;