import Hero from "@/components/hero";
import Sobre from "@/components/sobre";
import Projetos from "@/components/projetos";
import Experiencia from "@/components/experiencia";
import { about, experience, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre about={about} />
      <Projetos projects={projects} />
      <Experiencia items={experience} />
    </>
  );
}
