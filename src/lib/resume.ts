import "server-only";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/i18n/config";
// Static pages detect PDFs at build time. Restart dev / rebuild after adding a file.
export function getResume(locale: Locale): string | null {
  const filename =
    locale === "en" ? "guilherme-aguiar-en.pdf" : "guilherme-aguiar-pt-br.pdf";
  return existsSync(join(process.cwd(), "public", "curriculos", filename))
    ? `/curriculos/${filename}`
    : null;
}
