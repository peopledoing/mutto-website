"use client";

import type { Category } from "@/data/projects";
import { categories } from "@/data/projects";

interface ProjectFiltersProps {
  active: Set<Category>;
  onToggle: (category: Category) => void;
}

export function ProjectFilters({ active, onToggle }: ProjectFiltersProps) {
  return (
    <div className="sticky top-14 z-40 border-b border-border bg-background md:top-16">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 md:gap-x-6 md:px-8 md:py-4 lg:px-10">
        {categories.map((cat) => {
          const isActive = active.has(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onToggle(cat.id)}
              className={`font-body text-[0.65rem] transition-opacity md:text-xs ${
                isActive
                  ? "font-medium text-foreground"
                  : "font-normal text-foreground/60 hover:text-foreground"
              }`}
            >
              +{cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
