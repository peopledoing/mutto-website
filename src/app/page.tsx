import { Navigation } from "@/components/Navigation";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <ProjectGrid />
      </main>
    </>
  );
}
