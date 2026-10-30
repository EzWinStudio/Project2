import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EzWin — Bot, Panel, FiveM ve Kurgu",
  description:
    "EzWin: Discord botları, web panelleri, FiveM altyapısı, AniMax anime platformu ve kısa form kurgu. Tek kişilik prodüksiyon, fikirden yayına.",
  keywords: ["EzWin", "Discord bot", "FiveM", "Next.js", "portfolyo", "AniMax"],
  authors: [{ name: "EzWin", url: "https://github.com/EzWinStudio" }],
  creator: "EzWin",
  openGraph: {
    title: "EzWin — Bot, Panel, FiveM ve Kurgu",
    description:
      "Sistemleri kuran, reel'i kesen ve yayına alan tek kişilik prodüksiyon.",
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "EzWin",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "EzWin — bot, panel, FiveM ve kurgu; tek masada.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EzWin — Bot, Panel, FiveM ve Kurgu",
    description: "Sistemleri kuran, reel'i kesen ve yayına alan tek kişilik prodüksiyon.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07060a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/archivo-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
