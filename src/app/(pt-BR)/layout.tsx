import type { ReactNode } from "react";
import PortfolioDocument from "@/components/portfolio-document";
import { portfolioMetadata } from "@/lib/metadata";
export const metadata = portfolioMetadata("pt-BR");
export const viewport = { themeColor: "#0B0F14" };
export default function PortugueseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <PortfolioDocument locale="pt-BR">{children}</PortfolioDocument>;
}
