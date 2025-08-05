import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, Waves, Users, Home, Briefcase, MapPin, Send } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#community");

  // Effect to prevent background scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: "Community", href: "#community", icon: Users },
    { label: "Rooms", href: "#rooms", icon: Home },
    { label: "Workspace", href: "#workspace", icon: Briefcase },
    { label: "Siargao", href: "#siargao", icon: MapPin },
  ];

  const Logo = () => (
    <a href="#" className="flex items-center space-x-2 overflow-hidden" aria-label="Back to top">
      <div className="w-8 h-8 bg-gradient-to-br from-accent to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
        <Waves className="w-5 h-5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-base font-bold text-foreground truncate">Siargao Salamat</span>
        <span className="text-xs text-accent font-medium -mt-1">Villa Coliving</span>
      </div>
    </a>
  );
  
  const CtaButtons = ({ mobile = false }: { mobile?: boolean }) => {
    const contactUrl = "https://wa.me/639083339477?text=Hi!%20I'd%20like%20to%20ask%20a%20question%20about%20Siargao%20Salamat%20Villa%20Coliving.";
    const applyUrl = "https://wa.me/639083339477?text=Hi!%20I'm%20interested%20in%20applying%20to%20stay%20at%20Siargao%20Salamat%20Villa%20Coliving.";

    return (
      <>
        <Button asChild variant="outline" size={mobile ? "lg" : "sm"} className={!mobile ? "hover:bg-primary/10 hover:border-primary/50 transition-colors" : ""}>
          <a href={contactUrl} target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </Button>
        <Button asChild variant="default" size={mobile ? "lg" : "sm"} className="bg-gradient-to-r from-primary to-secondary text-white">
          <a href={applyUrl} target="_blank" rel="noopener noreferrer">
            <Send className={`w-4 h-4 ${mobile ? 'mr-2' : 'mr-1'}`} />
            Apply Now
          </a>
        </Button>
      </>
    );
  };

  const MobileNavOverlay = () => (
    <div 
      className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden animate-fade-in`}
      id="mobile-menu"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 border-b border-border/50">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-16 space-y-8">
           {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-3 text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </a>
          ))}
          <div className="flex flex-col space-y-4 pt-8 w-full max-w-xs">
            <CtaButtons mobile />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* --- REDESIGNED: Simplified mobile and desktop layouts --- */}
            
            {/* Mobile Header (only logo and menu button) */}
            <div className="flex items-center justify-between w-full md:hidden">
              <Logo />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>

            {/* Desktop Header (full navigation) */}
            <div className="hidden md:flex items-center justify-between w-full">
              <Logo />
              <div className="flex items-center space-x-6">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.label}>
                        <a
                          href={item.href}
                          onClick={() => setActiveLink(item.href)}
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:text-primary disabled:pointer-events-none disabled:opacity-50",
                            activeLink === item.href ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.label}
                        </a>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center space-x-3">
                  <CtaButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {isMenuOpen && <MobileNavOverlay />}
    </>
  );
};

export default Header;
