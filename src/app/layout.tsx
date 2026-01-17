import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif, Inter } from "next/font/google";
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

// app/layout.tsx
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://byeongjuwoo.github.io/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: [{ url: "/male-technologist.png", sizes: "any" }],
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
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} ${inter.variable} antialiased`}
      >
        <main className="">{children}</main>

        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
            <span>
              © {new Date().getFullYear()} {aboutMe.name}.
            </span>

            <span className="whitespace-nowrap">
              Built with{" "}
              <a
                href="https://github.com/tovacinni/research-website-template"
                className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
              >
                research-website-template
              </a>
            </span>
          </div>
        </footer>

      </body>
    </html>
  );
}
