import sharp from "sharp";
import { fileURLToPath } from "node:url";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#0B0F14"/><rect x="60" y="60" width="1080" height="510" rx="24" fill="#111827" stroke="#253040"/><text x="110" y="145" font-family="sans-serif" font-size="42" font-weight="700" fill="#F8FAFC">GA<tspan fill="#3B82F6">.</tspan></text><text x="110" y="285" font-family="sans-serif" font-size="76" font-weight="700" fill="#F8FAFC">Guilherme Aguiar</text><text x="110" y="355" font-family="monospace" font-size="30" fill="#22D3EE">SOFTWARE DEVELOPER</text><path d="M110 410h110" stroke="#3B82F6" stroke-width="5"/><text x="110" y="490" font-family="sans-serif" font-size="24" fill="#A4B1C2">Java · Python · Software</text></svg>`;
await sharp(Buffer.from(svg))
  .png()
  .toFile(fileURLToPath(new URL("../public/og.png", import.meta.url)));
