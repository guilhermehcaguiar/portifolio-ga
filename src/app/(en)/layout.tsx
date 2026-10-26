import type { ReactNode } from "react";
import PortfolioDocument from "@/components/portfolio-document";
import { portfolioMetadata } from "@/lib/metadata";
export const metadata = portfolioMetadata("en");
export const viewport = { themeColor: "#0B0F14" };
export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <PortfolioDocument locale="en">{children}</PortfolioDocument>;
}
