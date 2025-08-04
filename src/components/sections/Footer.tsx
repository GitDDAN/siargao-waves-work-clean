import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Waves, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Twitter,
  MapPin,
  Phone,
  Clock,
  Heart
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Community", href: "#community" },
    { label: "Rooms", href: "#rooms" },
    { label: "Workspace", href: "#workspace" },
    { label: "Siargao Guide", href: "#siargao" }
  ];

  const contact = [
    { 
      icon: Mail, 
      label: "hello@siargaocoliving.com",
      href: "mailto:hello@siargaocoliving.com"
    },
    { 
      icon: MessageCircle, 
      label: "WhatsApp: +63 917 123 4567",
      href: "https://wa.me/639171234567"
    },
    { 
      icon: Phone, 
      label: "Emergency: +63 917 765 4321",
      href: "tel:+639177654321"
    }
  ];

  const social = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Siargao</span>
                <span className="text-xs text-primary font-medium -mt-1">Coliving</span>
              </div>
            </div>
            <p className="text-sm text-background/70 max-w-xs">
              Siargao's premier digital nomad community where productivity meets paradise.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-background/70">General Luna, Siargao Island</span>
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
              <Button variant="ocean" size="sm" className="w-full">
                Apply Now
              </Button>
              <div className="flex space-x-3">
                {social.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
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
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-xs text-background/70">Community Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">98%</div>
              <div className="text-xs text-background/70">WiFi Uptime</div>
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
              <span>&copy; 2024 Siargao Coliving. All rights reserved.</span>
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