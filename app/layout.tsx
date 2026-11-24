import type { Metadata } from "next";
import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { siteData } from "@/lib/siteData";
import { personSchema, websiteSchema, profilePageSchema } from "@/lib/jsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  manifest: "/site.webmanifest",
  applicationName: siteData.name,
  authors: [{ name: siteData.name, url: siteData.url }],
  creator: siteData.name,
  publisher: siteData.name,
  category: "technology",
  keywords: [
    siteData.name,
    siteData.handle,
    "Senior AI Engineer",
    "Applied AI",
    "Agentic Systems",
    "AI Engineer",
    "LLM Engineer",
    "Technical Lead",
    "Python",
    "RAG",
    "MCP",
    "Kubernetes",
    "Backend Engineer",
    "Go",
    "Bengaluru",
    ...siteData.knowsAbout,
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: `${siteData.name} · ${siteData.role}`,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.summary,
  openGraph: {
    title: siteData.name,
    description: siteData.summary,
    url: siteData.url,
    siteName: siteData.name,
    images: [
      { url: siteData.ogImage, width: 1200, height: 630, alt: siteData.name },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: `@${siteData.handle}`,
    title: siteData.name,
    description: siteData.summary,
    images: [siteData.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{const theme=localStorage.getItem("portfolio-theme");if(theme==="light"||theme==="dark")document.documentElement.dataset.theme=theme}catch{}` }} />
      </head>
      <body
        className={`${robotoMono.variable} ${poppins.variable} ${inter.variable} font-sans flex min-h-screen flex-col bg-background text-foreground antialiased`}
      >
        <JsonLd data={[personSchema(), websiteSchema(), profilePageSchema()]} />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
