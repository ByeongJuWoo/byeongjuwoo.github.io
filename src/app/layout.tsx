import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif, Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

// app/layout.tsx
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://byeongjuwoo.github.io/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: [{ url: "/images/umich.png", sizes: "any" }],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: customMetadata.title || aboutMe.name,
    description: customMetadata.description || aboutMe.description,
    images: [
      {
        url: "/images/profile_3.jpg",
        width: 374,
        height: 267,
        alt: `${aboutMe.name} – preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: customMetadata.title || aboutMe.name,
    description: customMetadata.description || aboutMe.description,
    images: ["/images/profile_3.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} ${inter.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
