import { Container } from "@/components/container";
import { Inter, Roboto_Mono } from "@next/font/google";
import { Footer } from "./footer";
import "./globals.css";
import { Header } from "./header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "optional",
});

export const metadata = {
  title: {
    default: "Dakota Smith",
    template: "%s | Dakota Smith",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Dakota Smith",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    // google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    // yandex: '14d2e73487fa6c71',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <head />
      <body>
        <Header />
        <Container className="h-screenHeightWithoutHeader min-h-screenHeightWithoutHeader">
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
