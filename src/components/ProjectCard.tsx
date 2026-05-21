import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <a href={`#project-${project.id}`} className="block">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/5">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
        <div className="pt-3 pb-8 md:pt-4">
          <h3 className="font-body text-sm font-medium leading-snug text-foreground md:text-[0.95rem]">
            {project.name}
          </h3>
          <p className="mt-1 font-body text-xs font-light text-muted">{project.location}</p>
        </div>
      </a>
    </article>
  );
}
