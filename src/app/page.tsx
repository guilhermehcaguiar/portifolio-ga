import Hero from "@/components/hero";
import Sobre from "@/components/sobre";
import Experiencia from "@/components/experiencia";
import { about, experience } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre about={about} />
      <Experiencia items={experience} />
    </>
  );
}
