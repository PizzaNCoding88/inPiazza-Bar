import "./globals.css";
import { Antic_Slab, Ms_Madi, Neonderthaw } from "next/font/google";
import localFont from "next/font/local";

const antic = Antic_Slab({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-antic",
});

const madi = Ms_Madi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-madi",
});

const neon = Neonderthaw({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-neon",
});

const americana = localFont({
  src: "../public/fonts/Americana.woff2",
  variable: "--font-americana",
});

export const metadata = {
  title: "inPiazza - Bar",
  description: "inPiazza Bar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${antic.variable} ${madi.variable} ${neon.variable} ${americana.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
