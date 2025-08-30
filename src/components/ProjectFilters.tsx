
"use client";

import { Button } from "./ui/button";

interface ProjectFiltersProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectFilters({ filters, activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "default" : "outline"}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
