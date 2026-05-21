"use client";

import { useMemo, useState } from "react";
import type { Category } from "@/data/projects";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilters } from "@/components/ProjectFilters";

export function ProjectGrid() {
  const [activeFilters, setActiveFilters] = useState<Set<Category>>(new Set());

  const toggleFilter = (category: Category) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const filteredProjects = useMemo(() => {
    if (activeFilters.size === 0) return projects;
    return projects.filter((project) =>
      project.categories.some((cat) => activeFilters.has(cat)),
    );
  }, [activeFilters]);

  return (
    <>
      <ProjectFilters active={activeFilters} onToggle={toggleFilter} />
      <section className="px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-x-6 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="py-24 text-center font-body text-sm text-muted">
            No projects match the selected filters.
          </p>
        )}
      </section>
    </>
  );
}
