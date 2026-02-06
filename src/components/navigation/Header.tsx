import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
// Utility function to combine class names
const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ');
};
import { Menu, X, Waves, Users, Home, Laptop, MapPin, Send } from "lucide-react";

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
    { label: "Remote Work", href: "#remote-work", icon: Laptop },
    { label: "Siargao", href: "#siargao", icon: MapPin },
  ];

  const Logo = () => (
    <a href="#" className="flex items-center space-x-2 overflow-hidden" aria-label="Back to top">
      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
        <Waves className="w-5 h-5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-base font-bold text-foreground truncate">Siargao Salamat</span>
        <span className="text-xs text-orange-500 font-medium -mt-1">Villa</span>
      </div>
    </a>
  );
  
  const CtaButtons = ({ mobile = false }: { mobile?: boolean }) => {
    const contactUrl = "https://wa.me/639083339477?text=Hi!%20I'd%20like%20to%20ask%20a%20question%20about%20Salamat%20Villa%20Siargao.";
    const applyUrl = "https://wa.me/639083339477?text=Hi!%20I'm%20interested%20in%20applying%20to%20stay%20at%20Salamat%20Villa%20Siargao.";

    return (
      <div className={`flex ${mobile ? 'flex-col space-y-3 w-full' : 'flex-row space-x-3'}`}>
        <Button asChild variant="outline" size={mobile ? "lg" : "sm"} className={mobile ? "w-full" : "hover:bg-primary/10 hover:border-primary/50 transition-colors"}>
          <a href={contactUrl} target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </Button>
        <Button asChild variant="default" size={mobile ? "lg" : "sm"} className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 ${mobile ? 'w-full' : ''}`}>
          <a href={applyUrl} target="_blank" rel="noopener noreferrer">
            <Send className={`w-4 h-4 ${mobile ? 'mr-2' : 'mr-1'}`} />
            Apply Now
          </a>
        </Button>
      </div>
    );
  };

  const MobileNavOverlay = () => (
    <div 
      className={`fixed inset-0 z-40 bg-background md:hidden`}
      id="mobile-menu"
    >
      {/* Header with logo and close button */}
      <div className="bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Navigation content */}
      <div className="flex flex-col h-[calc(100dvh-4rem)] bg-background">
        {/* Navigation items */}
        <div className="flex-1 flex flex-col justify-center px-4">
          <nav className="space-y-6">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-4 text-xl font-semibold text-foreground hover:text-orange-500 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-6 h-6 text-orange-500" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
        
        {/* CTA Buttons at bottom */}
        <div className="p-6 border-t border-border/50 bg-gray-50/50">
          <CtaButtons mobile />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
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
                className="hover:bg-gray-100"
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
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500 focus:outline-none focus:text-orange-500 disabled:pointer-events-none disabled:opacity-50",
                            activeLink === item.href ? "text-orange-500" : "text-muted-foreground"
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