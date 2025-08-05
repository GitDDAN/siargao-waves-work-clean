import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Waves, Users, Home, Briefcase, MapPin, Send } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to prevent background scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to ensure scroll is restored on component unmount
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
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-accent to-orange-500 rounded-lg flex items-center justify-center">
        <Waves className="w-5 h-5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-foreground">Siargao</span>
        <span className="text-xs text-accent font-medium -mt-1">Coliving</span>
      </div>
    </div>
  );
  
  // Renders the full-screen mobile navigation overlay
  const MobileNavOverlay = () => (
    <div 
      className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden animate-fade-in`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar inside overlay with logo and close button */}
        <div className="flex items-center justify-between h-16 border-b border-border/50">
          <Logo />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center mt-12 space-y-6 animate-slide-in-from-top">
           {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-3 text-xl font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          ))}

          {/* Buttons at the bottom */}
          <div className="flex flex-col space-y-3 pt-8 w-full max-w-xs">
            <Button variant="outline" size="lg">Contact</Button>
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                className="hover:bg-primary/10 hover:border-primary/50 transition-colors"
              >
                Contact
              </Button>
              <Button 
                variant="default" 
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
              >
                <Send className="w-4 h-4 mr-1" />
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen} // Accessibility improvement
              aria-controls="mobile-menu" // Accessibility improvement
            >
              {/* This button remains in the header, while the menu is a separate overlay */}
              <Menu className="w-6 h-6" />
            </Button>
          </nav>
        </div>
      </header>
      
      {/* Conditionally render the mobile overlay */}
      {isMenuOpen && <MobileNavOverlay />}
    </>
  );
};

export default Header;