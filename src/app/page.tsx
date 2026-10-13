import Hero from "@/components/hero";
import Sobre from "@/components/sobre";
import Projetos from "@/components/projetos";
import Experiencia from "@/components/experiencia";
import Stack from "@/components/stack";
import BeyondTheCode from "@/components/beyond-the-code";
import Contato from "@/components/contato";
import Footer from "@/components/footer";
import {
  about,
  beyondInterests,
  contactChannels,
  experience,
  projects,
  stack,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre about={about} />
      <Projetos projects={projects} />
      <Experiencia items={experience} />
      <Stack categories={stack} />
      <BeyondTheCode interests={beyondInterests} />
      <Contato channels={contactChannels} />
      <Footer />
    </>
  );
}
