"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Coffee, Code } from "lucide-react";
import { cn } from "@/lib/utils";

interface WelcomeMessageProps {
  className?: string;
  variant?: "default" | "compact" | "hero";
}

const welcomeMessages = [
  {
    icon: Sparkles,
    message: "Bienvenue sur le portfolio de Nour ! 🌟 Je suis ravie de vous accompagner dans la découverte de ses créations.",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Heart,
    message: "Salut ! 👋 Je suis l'IA de Nour et je suis là pour vous aider à naviguer dans son univers créatif.",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Coffee,
    message: "Bonjour ! ☕ Prenez un moment pour explorer le travail passionnant de Nour. Je suis là pour vous guider !",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Code,
    message: "Hello ! 💻 Découvrez les projets innovants de Nour. Je suis votre guide personnel dans ce voyage technologique !",
    color: "from-green-500 to-emerald-600"
  }
];

export function WelcomeMessage({ className, variant = "default" }: WelcomeMessageProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Changer le message toutes les 5 secondes
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % welcomeMessages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const message = welcomeMessages[currentMessage];
  const Icon = message.icon;

  if (variant === "compact") {
    return (
      <div className={cn("transition-all duration-500", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", className)}>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon className="h-4 w-4 text-primary" />
          <span>{message.message}</span>
        </div>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", className)}>
        <Card className="border-0 shadow-lg bg-gradient-to-r from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-800/70 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className={cn("p-3 rounded-full bg-gradient-to-r", message.color)}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium text-foreground mb-2">
                  {message.message}
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    Découvrir les projets
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn("transition-all duration-500", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", className)}>
      <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg bg-gradient-to-r", message.color)}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                {message.message}
              </p>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={() => setCurrentMessage((prev) => (prev + 1) % welcomeMessages.length)}
              className="text-xs opacity-70 hover:opacity-100"
            >
              ✨
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
