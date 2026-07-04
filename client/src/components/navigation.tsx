import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLocation } from "wouter";
import LanguageSwitcher from "@/components/language-switcher";
import { useLocale } from "@/lib/locale";

// Import the Adalithic logo (absolute path so it resolves from any URL depth)
const adalithicLogo = "/Adalithic%20logo.png";

export default function Navigation() {
  const { t } = useTranslation();
  const { withLocale } = useLocale();
  const homePath = withLocale("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [intendedSection, setIntendedSection] = useState("home"); // User's click intent - drives underline
  const [visibleSection, setVisibleSection] = useState("home"); // Scroll spy detection
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [location, navigate] = useLocation();
  const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const isClickNavigating = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll spy effect - only updates visibleSection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect which section is in view
      const sections = ["home", "about", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for better UX
      
      let detected = "home";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            detected = sectionId;
            break;
          }
        }
      }
      
      // Default to home if at top
      if (window.scrollY < 100) {
        detected = "home";
      }
      
      setVisibleSection(detected);
      
      // When NOT click navigating, sync intended to visible
      if (!isClickNavigating.current) {
        setIntendedSection(detected);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update underline position when intended section changes (user's explicit choice)
  useEffect(() => {
    const updateUnderlinePosition = () => {
      const activeButton = navRefs.current[intendedSection];
      
      if (activeButton) {
        // Use offsetLeft and offsetWidth directly - gap doesn't add margin
        setUnderlineStyle({
          left: activeButton.offsetLeft,
          width: activeButton.offsetWidth,
        });
      }
    };

    // Immediate update - no delay
    updateUnderlinePosition();
    
    // Also update on window resize
    window.addEventListener('resize', updateUnderlinePosition);
    
    return () => {
      window.removeEventListener('resize', updateUnderlinePosition);
    };
  }, [intendedSection]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Cancel any pending timeout from previous clicks
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    
    // Set click navigation flag and intended section immediately
    isClickNavigating.current = true;
    setIntendedSection(sectionId); // This drives the underline immediately
    
    // Re-enable scroll spy sync after scroll completes
    clickTimeoutRef.current = setTimeout(() => {
      isClickNavigating.current = false;
      clickTimeoutRef.current = null;
    }, 1200);
    
    // If not on homepage, navigate to homepage first
    if (location !== homePath) {
      navigate(homePath);
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    // If not on homepage, navigate to homepage first
    if (location !== homePath) {
      navigate(homePath);
      // Wait for navigation to complete, then scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      // Already on homepage, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Arcatext" },
    { id: "about", label: t("nav.about") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm"
    } border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src={adalithicLogo} 
                alt="Adalithic Logo" 
                className="h-6 w-auto object-contain"
              />
              <h1 className="text-xl font-bold text-secondary">Adalithic</h1>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div ref={containerRef} className="ml-10 flex items-baseline gap-8 relative pb-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  ref={(el) => (navRefs.current[item.id] = el)}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:bg-gray-100 transition-colors duration-200 font-medium px-3 py-2 rounded-md"
                  data-testid={`nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              {/* Animated underline */}
              {underlineStyle.width > 0 && (
                <div
                  className="absolute bottom-0 h-0.5 bg-[#0040DD] transition-all duration-300 ease-out"
                  style={{
                    left: `${underlineStyle.left}px`,
                    width: `${underlineStyle.width}px`,
                  }}
                />
              )}
            </div>
          </div>

          {/* Desktop language switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-2">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
