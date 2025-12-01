import { useState } from "react";
import { Menu, X, Calendar, Info, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  onBookNow: () => void;
}

const MobileNav = ({ onBookNow }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (action: () => void) => {
    setIsOpen(false);
    action();
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-display text-xl font-bold text-foreground">CCR</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background animate-fade-in">
          <div className="pt-20 px-6">
            <nav className="space-y-2">
              <button
                onClick={() => handleNavClick(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                })}
                className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-muted transition-colors text-left"
              >
                <Info className="w-5 h-5 text-secondary" />
                <span className="font-body text-lg text-foreground">About</span>
              </button>
              <button
                onClick={() => handleNavClick(onBookNow)}
                className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-muted transition-colors text-left"
              >
                <Calendar className="w-5 h-5 text-secondary" />
                <span className="font-body text-lg text-foreground">Book Session</span>
              </button>
              <button
                onClick={() => handleNavClick(() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                })}
                className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-muted transition-colors text-left"
              >
                <Mail className="w-5 h-5 text-secondary" />
                <span className="font-body text-lg text-foreground">Contact</span>
              </button>
            </nav>

            <div className="mt-8">
              <Button
                variant="hero"
                size="xl"
                className="w-full"
                onClick={() => handleNavClick(onBookNow)}
              >
                Book Your Session
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
