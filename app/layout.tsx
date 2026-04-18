import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap", weight: ["500", "600", "700"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "HR Compliance MCP — query US employment law by state",
  description:
    "Open source MCP server covering 50-state employment compliance. 19 tools, 8 states live, 42 in pipeline. Paste a job posting and see what it gets wrong.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${jetbrains.variable}`}>
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteNav() {
  return (
    <nav className="border-b border-line">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-5">
        <a href="/" className="font-display text-lg font-semibold tracking-tight">
          hr-compliance
        </a>
        <div className="flex items-center gap-8 text-[15px] text-ink-soft">
          <a href="/mcp" className="hover:text-ink">MCP</a>
          <a href="/states" className="hover:text-ink">States</a>
          <a href="/waitlist" className="hover:text-ink">API</a>
          <a
            href="https://github.com/"
            className="rounded-md border border-line px-3 py-1.5 text-[14px] hover:border-ink"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-6 py-10 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>50-state employment compliance for AI assistants. Open source, MIT.</div>
        <div className="flex gap-6">
          <a href="https://github.com/" className="hover:text-ink">GitHub</a>
          <a href="/states" className="hover:text-ink">Coverage</a>
          <a href="mailto:hi@example.dev" className="hover:text-ink">Contact</a>
        </div>
      </div>
    </footer>
  );
}
