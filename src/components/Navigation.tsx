import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Code, Trophy, User } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "الصفحة الرئيسية", icon: BookOpen, href: "#" },
    { label: "الدروس", icon: Code, href: "#lessons" },
    { label: "التحديات", icon: Trophy, href: "#challenges" },
    { label: "الملف الشخصي", icon: User, href: "#profile" }
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Learn2Code
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 space-x-reverse text-foreground hover:text-primary transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-muted"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              ابدأ التعلم
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-white border-b border-border shadow-soft">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 space-x-reverse text-foreground hover:text-primary transition-colors duration-300 px-3 py-3 rounded-lg hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-lg">{item.label}</span>
                </a>
              ))}
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full">
                  ابدأ التعلم
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;