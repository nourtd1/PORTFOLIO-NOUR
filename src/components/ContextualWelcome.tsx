"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Moon, Coffee, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContextualWelcomeProps {
  className?: string;
  userName?: string;
}

const timeBasedMessages = {
  morning: {
    icon: Sun,
    greeting: "Bonjour",
    message: "Quelle belle matinée pour découvrir le portfolio de Nour ! ☀️",
    color: "from-yellow-400 to-orange-500"
  },
  afternoon: {
    icon: Coffee,
    greeting: "Bon après-midi",
    message: "Parfait moment pour explorer les créations de Nour ! ☕",
    color: "from-amber-500 to-yellow-600"
  },
  evening: {
    icon: Moon,
    greeting: "Bonsoir",
    message: "Une soirée idéale pour plonger dans l'univers créatif de Nour ! 🌙",
    color: "from-blue-600 to-purple-700"
  },
  night: {
    icon: Star,
    greeting: "Bonne nuit",
    message: "Même la nuit, l'inspiration de Nour brille ! ⭐",
    color: "from-indigo-600 to-purple-800"
  }
};

export function ContextualWelcome({ className, userName }: ContextualWelcomeProps) {
  const [timeOfDay, setTimeOfDay] = useState<keyof typeof timeBasedMessages>("morning");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 12) {
        setTimeOfDay("morning");
      } else if (hour >= 12 && hour < 17) {
        setTimeOfDay("afternoon");
      } else if (hour >= 17 && hour < 22) {
        setTimeOfDay("evening");
      } else {
        setTimeOfDay("night");
      }
    };

    updateTimeOfDay();
    
    // Mettre à jour toutes les heures
    const interval = setInterval(updateTimeOfDay, 3600000);
    
    return () => clearInterval(interval);
  }, []);

  const currentMessage = timeBasedMessages[timeOfDay];
  const Icon = currentMessage.icon;

  return (
    <div className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", className)}>
      <Card className="border-0 shadow-lg bg-gradient-to-r from-white/95 to-white/85 dark:from-slate-800/95 dark:to-slate-800/85 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className={cn("p-3 rounded-full bg-gradient-to-r", currentMessage.color)}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {currentMessage.greeting}{userName ? ` ${userName}` : ""} ! 👋
              </h3>
              <p className="text-muted-foreground">
                {currentMessage.message}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
