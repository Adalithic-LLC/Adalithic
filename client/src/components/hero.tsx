import { useState, useEffect, useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TypewriterAnimation from "./typewriter-animation";
// Import the hero images from public directory (absolute paths so they resolve
// from any URL depth, e.g. /es/... locale routes).
const heroImageOriginal = "/Hero%20image%2001.png";
const heroImage01 = "/copy.png";
const heroImage02 = "/homographs.png";
const heroImage03 = "/pasteview.png";
const heroImage04 = "/reverse-translations.png";
const heroImage05 = "/reword-options.png";
const heroImage06 = "/synonyms.png";

export default function Hero() {
  const { t } = useTranslation();
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrowMobile, setShowLeftArrowMobile] = useState(false);
  const [showRightArrowMobile, setShowRightArrowMobile] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const checkScrollPosition = (element: HTMLDivElement | null, setLeft: (val: boolean) => void, setRight: (val: boolean) => void) => {
    if (!element) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = element;
    setLeft(scrollLeft > 10);
    setRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleScroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const scrollAmount = 400;
    const newScrollLeft = direction === 'left' 
      ? ref.current.scrollLeft - scrollAmount 
      : ref.current.scrollLeft + scrollAmount;
    
    ref.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const desktopElement = desktopScrollRef.current;
    const mobileElement = mobileScrollRef.current;

    const handleDesktopScroll = () => checkScrollPosition(desktopElement, setShowLeftArrow, setShowRightArrow);
    const handleMobileScroll = () => checkScrollPosition(mobileElement, setShowLeftArrowMobile, setShowRightArrowMobile);

    if (desktopElement) {
      desktopElement.addEventListener('scroll', handleDesktopScroll);
      checkScrollPosition(desktopElement, setShowLeftArrow, setShowRightArrow);
    }

    if (mobileElement) {
      mobileElement.addEventListener('scroll', handleMobileScroll);
      checkScrollPosition(mobileElement, setShowLeftArrowMobile, setShowRightArrowMobile);
    }

    return () => {
      if (desktopElement) {
        desktopElement.removeEventListener('scroll', handleDesktopScroll);
      }
      if (mobileElement) {
        mobileElement.removeEventListener('scroll', handleMobileScroll);
      }
    };
  }, []);

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-12">
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-secondary leading-tight max-w-4xl mx-auto">
              <Trans
                i18nKey="hero.title"
                components={{ brand: <span className="text-[#0040DD]" /> }}
              />
            </h1>
            <p className="text-xl md:text-2xl font-bold text-secondary">{t("hero.tagline")}</p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t("hero.description")}</p>
            <div className="flex justify-center my-8">
              <TypewriterAnimation />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
              <Button
                size="lg"
                onClick={() => scrollToSection("products")}
                className="bg-primary hover:bg-[#0036BB] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                data-testid="button-learn-more"
              >{t("hero.learnMore")}</Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200"
                data-testid="button-get-in-touch"
              >
                {t("hero.getInTouch")}
              </Button>
            </div>
          </div>
          
          {/* App Screenshots */}
          <div className="mt-20 animate-slide-up">
            {/* Desktop: Horizontal Scroll */}
            <div className="hidden lg:block relative">
              {showLeftArrow && (
                <button
                  onClick={() => handleScroll('left', desktopScrollRef)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Scroll left"
                  data-testid="button-scroll-left-desktop"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {showRightArrow && (
                <button
                  onClick={() => handleScroll('right', desktopScrollRef)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Scroll right"
                  data-testid="button-scroll-right-desktop"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
              <div ref={desktopScrollRef} className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-8 px-4 pb-4 justify-start">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={heroImageOriginal} 
                    alt="Arcatext Translation Interface" 
                    className="w-auto h-[640px] object-contain"
                  />
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={heroImage01} 
                    alt="Arcatext Copy Feature" 
                    className="w-auto h-[640px] object-contain"
                  />
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={heroImage02} 
                    alt="Arcatext Homographs Feature" 
                    className="w-auto h-[640px] object-contain"
                  />
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={heroImage03} 
                    alt="Arcatext Paste & Translate" 
                    className="w-auto h-[640px] object-contain"
                  />
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={heroImage04} 
                    alt="Arcatext Reverse Translations" 
                    className="w-auto h-[640px] object-contain"
                  />
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={heroImage05} 
                    alt="Arcatext Reword Options" 
                    className="w-auto h-[640px] object-contain"
                  />
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={heroImage06} 
                    alt="Arcatext Synonyms Feature" 
                    className="w-auto h-[640px] object-contain"
                  />
                </div>
              </div>
              </div>
            </div>
            
            {/* Mobile & Tablet: Horizontal Scroll */}
            <div className="lg:hidden relative">
              {showLeftArrowMobile && (
                <button
                  onClick={() => handleScroll('left', mobileScrollRef)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
                  aria-label="Scroll left"
                  data-testid="button-scroll-left-mobile"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              {showRightArrowMobile && (
                <button
                  onClick={() => handleScroll('right', mobileScrollRef)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
                  aria-label="Scroll right"
                  data-testid="button-scroll-right-mobile"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
              <div ref={mobileScrollRef} className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-6 px-4 pb-4 justify-start">
                <div className="flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src={heroImageOriginal} 
                    alt="Arcatext Translation Interface" 
                    className="w-auto h-[512px] object-contain"
                  />
                </div>
                
                <div className="flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src={heroImage01} 
                    alt="Arcatext Copy Feature" 
                    className="w-auto h-[512px] object-contain"
                  />
                </div>
                
                <div className="flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src={heroImage02} 
                    alt="Arcatext Homographs Feature" 
                    className="w-auto h-[512px] object-contain"
                  />
                </div>
                
                <div className="flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src={heroImage03} 
                    alt="Arcatext Paste & Translate" 
                    className="w-auto h-[512px] object-contain"
                  />
                </div>
                
                <div className="flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src={heroImage04} 
                    alt="Arcatext Reverse Translations" 
                    className="w-auto h-[512px] object-contain"
                  />
                </div>
                
                <div className="flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src={heroImage05} 
                    alt="Arcatext Reword Options" 
                    className="w-auto h-[512px] object-contain"
                  />
                </div>
                
                <div className="flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src={heroImage06} 
                    alt="Arcatext Synonyms Feature" 
                    className="w-auto h-[512px] object-contain"
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
