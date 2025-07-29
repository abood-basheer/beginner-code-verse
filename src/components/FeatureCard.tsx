import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => {
  const colorClasses = {
    primary: {
      bg: "bg-primary/10",
      icon: "text-primary",
      hover: "hover:shadow-[0_10px_40px_-15px_hsl(var(--primary)_/_0.3)]"
    },
    secondary: {
      bg: "bg-secondary/10", 
      icon: "text-secondary",
      hover: "hover:shadow-[0_10px_40px_-15px_hsl(var(--secondary)_/_0.3)]"
    },
    accent: {
      bg: "bg-accent/10",
      icon: "text-accent", 
      hover: "hover:shadow-[0_10px_40px_-15px_hsl(var(--accent)_/_0.3)]"
    }
  };

  return (
    <Card className={`group hover:scale-105 transition-all duration-500 ${colorClasses[color].hover} border-0 shadow-soft`}>
      <CardContent className="p-6 text-center">
        <div className={`w-16 h-16 ${colorClasses[color].bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-8 h-8 ${colorClasses[color].icon}`} />
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;