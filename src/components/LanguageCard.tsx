import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, Star } from "lucide-react";

interface LanguageCardProps {
  title: string;
  description: string;
  image: string;
  difficulty: string;
  duration: string;
  lessons: number;
  rating: number;
  color: "primary" | "secondary" | "accent";
}

const LanguageCard = ({
  title,
  description,
  image,
  difficulty,
  duration,
  lessons,
  rating,
  color
}: LanguageCardProps) => {
  const colorClasses = {
    primary: "hover:shadow-[0_10px_40px_-15px_hsl(var(--primary)_/_0.3)]",
    secondary: "hover:shadow-[0_10px_40px_-15px_hsl(var(--secondary)_/_0.3)]",
    accent: "hover:shadow-[0_10px_40px_-15px_hsl(var(--accent)_/_0.3)]"
  };

  return (
    <Card className={`group hover:scale-105 transition-all duration-500 ${colorClasses[color]} border-0 shadow-soft overflow-hidden`}>
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-foreground">
              {lessons} درس
            </Badge>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center space-x-1 space-x-reverse text-white">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1 space-x-reverse">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <Badge variant="outline" className="text-xs">
            {difficulty}
          </Badge>
        </div>
        
        <Button 
          variant={color === "primary" ? "default" : color === "secondary" ? "secondary" : "accent"} 
          className="w-full group-hover:scale-105 transition-transform"
        >
          <PlayCircle className="w-4 h-4 ml-2" />
          ابدأ التعلم
        </Button>
      </CardContent>
    </Card>
  );
};

export default LanguageCard;