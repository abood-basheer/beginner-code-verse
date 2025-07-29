import Navigation from "@/components/Navigation";
import LanguageCard from "@/components/LanguageCard";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Zap, 
  Trophy, 
  Users, 
  PlayCircle, 
  ArrowLeft,
  BookOpen,
  Target,
  Lightbulb
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-coding.jpg";
import jsIcon from "@/assets/javascript-icon.jpg";
import pythonIcon from "@/assets/python-icon.jpg";
import conceptsIcon from "@/assets/concepts-icon.jpg";

const Index = () => {
  const languages = [
    {
      title: "JavaScript",
      description: "تعلم لغة JavaScript من البداية وحتى الاحتراف، وابني مشاريع تفاعلية رائعة",
      image: jsIcon,
      difficulty: "مبتدئ",
      duration: "6 أسابيع",
      lessons: 24,
      rating: 4.8,
      color: "accent" as const
    },
    {
      title: "Python",
      description: "اكتشف قوة Python في تطوير التطبيقات وتحليل البيانات والذكاء الاصطناعي",
      image: pythonIcon,
      difficulty: "مبتدئ",
      duration: "8 أسابيع", 
      lessons: 32,
      rating: 4.9,
      color: "primary" as const
    },
    {
      title: "مفاهيم البرمجة",
      description: "أسس قوية في مفاهيم البرمجة الأساسية: المتغيرات، الحلقات، الدوال وأكثر",
      image: conceptsIcon,
      difficulty: "مبتدئ",
      duration: "4 أسابيع",
      lessons: 16,
      rating: 4.7,
      color: "secondary" as const
    }
  ];

  const features = [
    {
      icon: Code2,
      title: "محرر كود تفاعلي",
      description: "اكتب وجرب الكود مباشرة في المتصفح مع التصحيح الفوري",
      color: "primary" as const
    },
    {
      icon: Zap,
      title: "تعلم سريع وفعال",
      description: "دروس قصيرة ومركزة تناسب جدولك اليومي المزدحم",
      color: "accent" as const
    },
    {
      icon: Trophy,
      title: "تحديات وإنجازات",
      description: "حل التحديات واكسب شارات الإنجاز لتحفيز رحلة التعلم",
      color: "secondary" as const
    },
    {
      icon: Users,
      title: "مجتمع المطورين",
      description: "انضم لمجتمع نشط من المتعلمين وشارك خبراتك",
      color: "primary" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right space-y-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                🚀 منصة تعليمية متطورة
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                تعلم البرمجة
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  بطريقة تفاعلية
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                ابدأ رحلتك في عالم البرمجة مع دروس تفاعلية ومشاريع عملية تُناسب جميع المستويات. 
                تعلم JavaScript وPython ومفاهيم البرمجة الأساسية بطريقة ممتعة وسهلة.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="text-lg">
                  <PlayCircle className="w-5 h-5 ml-2" />
                  ابدأ التعلم مجاناً
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  تصفح الدروس
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 space-x-reverse text-sm text-muted-foreground">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <BookOpen className="w-4 h-4" />
                  <span>+100 درس</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Users className="w-4 h-4" />
                  <span>+10K متعلم</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Trophy className="w-4 h-4" />
                  <span>شهادات معتمدة</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
              <img
                src={heroImage}
                alt="تعلم البرمجة"
                className="relative z-10 w-full h-auto rounded-3xl shadow-glow animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="lessons" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="px-4 py-2 mb-4">
              📚 دورات البرمجة
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              اختر لغة البرمجة المناسبة لك
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              دورات شاملة ومنظمة لتعلم أشهر لغات البرمجة مع مشاريع عملية وتطبيقات حقيقية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <LanguageCard key={index} {...language} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="px-4 py-2 mb-4">
              ⚡ المميزات
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              لماذا Learn2Code؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              منصة تعليمية متطورة مصممة لجعل تعلم البرمجة سهلاً وممتعاً للجميع
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                10,000+
              </div>
              <p className="text-muted-foreground">متعلم نشط</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                100+
              </div>
              <p className="text-muted-foreground">درس تفاعلي</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                98%
              </div>
              <p className="text-muted-foreground">معدل الرضا</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ابدأ رحلة التعلم اليوم
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              انضم لآلاف المتعلمين واكتسب مهارات البرمجة التي تحتاجها لبناء مستقبلك المهني
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg font-bold">
                <Target className="w-5 h-5 ml-2" />
                ابدأ مجاناً الآن
              </Button>
              <Button variant="outline" size="lg" className="text-lg bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Lightbulb className="w-5 h-5 ml-2" />
                اعرف المزيد
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Learn2Code
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Learn2Code. منصة تعليمية تفاعلية لتعلم البرمجة
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;