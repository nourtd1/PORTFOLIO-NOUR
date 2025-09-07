"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { personalizeLayoutOnServer } from "@/app/actions";
import { Loader2, Sparkles } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { cn } from "@/lib/utils";

interface Props {
  onLayoutChange: (layout: "grid" | "list") => void;
}

const interests = [
    { id: 'UI/UX Design', label: 'UI/UX Design' },
    { id: 'React Development', label: 'Développement React' },
    { id: 'Complex Applications', label: 'Applications Complexes' },
]

export function LayoutPersonalizer({ onLayoutChange }: Props) {
  const [userInterests, setUserInterests] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    layout: string;
    reasoning: string;
  } | null>(null);

  const toggleInterest = (interest: string) => {
    setUserInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handlePersonalize = async () => {
    setLoading(true);
    setRecommendation(null);
    const behaviorString = `L'utilisateur a montré de l'intérêt pour: ${
      userInterests.join(", ") || "la navigation générale des projets"
    }.`;

    const availableLayouts = [
      {
        name: "grid",
        description:
          "Une disposition en grille compacte, idéale pour scanner rapidement de nombreux projets visuellement.",
      },
      {
        name: "list",
        description:
          "Une disposition en liste détaillée, idéale pour lire les descriptions et les détails des projets un par un.",
      },
    ];

    try {
      const result = await personalizeLayoutOnServer(
        behaviorString,
        JSON.stringify(availableLayouts)
      );
      if (result.recommendedLayout === "grid" || result.recommendedLayout === "list") {
        onLayoutChange(result.recommendedLayout);
        setRecommendation({
          layout: result.recommendedLayout,
          reasoning: result.reasoning,
        });
      } else {
        console.error("Invalid layout recommended:", result.recommendedLayout);
        onLayoutChange("grid");
      }
    } catch (error) {
      console.error("Failed to get personalized layout", error);
       onLayoutChange("grid");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="my-8 border-2 border-primary/20 shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
           <Sparkles className="text-primary h-6 w-6" />
           <CardTitle className="font-headline text-2xl">Personnalisez votre vue</CardTitle>
        </div>
        <CardDescription>
          Salut ! 👋 Je suis l'IA de Nour et je suis ravie de vous aider à personnaliser votre expérience ! 
          Laissez-moi vous suggérer la meilleure disposition en fonction de vos intérêts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <p className="text-sm font-semibold mb-3">
            Qu'est-ce qui vous intéresse le plus ? Je suis curieuse de connaître vos préférences ! 😊
          </p>
          <div className="flex flex-wrap gap-2">
             {interests.map(interest => (
                 <Button
                    key={interest.id}
                    variant={userInterests.includes(interest.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleInterest(interest.id)}
                    className="transition-all"
                >
                    {interest.label}
                </Button>
            ))}
          </div>
        </div>
        <Button onClick={handlePersonalize} disabled={loading}>
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Personnaliser avec l'IA ✨
        </Button>
        {recommendation && (
          <Alert className="mt-4 bg-background/50">
            <Sparkles className="h-4 w-4" />
            <AlertTitle className="font-semibold">
              Recommandation de l'IA : Vue "{recommendation.layout}" activée
            </AlertTitle>
            <AlertDescription>{recommendation.reasoning}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
