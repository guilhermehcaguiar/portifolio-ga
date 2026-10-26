import Hero from "./hero";
import Projetos from "./projetos";
import Sobre from "./sobre";
import Stack from "./stack";
import BeyondTheCode from "./beyond-the-code";
import Contato from "./contato";
import { getPortfolio } from "@/data/portfolio";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { getResume } from "@/lib/resume";
export default function HomeContent({ locale }: { locale: Locale }) {
  const data = getPortfolio(locale);
  const dict = getDictionary(locale);
  return (
    <>
      <Hero dict={dict} />
      <Projetos projects={data.projects} dict={dict} />
      <Sobre about={data.about} dict={dict} />
      <Stack categories={data.stack} dict={dict} />
      <BeyondTheCode interests={data.interests} dict={dict} />
      <Contato
        channels={data.channels}
        dict={dict}
        resume={getResume(locale)}
      />
    </>
  );
}
