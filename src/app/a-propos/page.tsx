"use client";

import { Button } from "@/components/ui/button";
import { personalInfo, skills } from "@/lib/data";
import { Download, Code, Palette, Zap, Briefcase, GraduationCap, Award, Users, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Import des nouveaux composants
import AboutHeroSection from "@/components/AboutHeroSection";
import BioSection from "@/components/BioSection";
import SkillsSection from "@/components/SkillsSection";
import TimelineSection from "@/components/TimelineSection";
import ValuesSection from "@/components/ValuesSection";
import AboutCTASection from "@/components/AboutCTASection";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Section Moderne */}
      <AboutHeroSection />

      {/* Section 2: Biographie */}
      <BioSection />

      {/* Section 3: Compétences */}
      <SkillsSection />

      {/* Section 4: Timeline */}
      <TimelineSection />

      {/* Section 5: Valeurs */}
      <ValuesSection />

      {/* Section 6: CTA Final Moderne */}
      <AboutCTASection />
    </div>
  );
}
