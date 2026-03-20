import type { Metadata } from "next";
import { Manrope} from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

import { TransitionProvider } from "../components/TransitionProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300","400","500","600","700"],
});

const matter = localFont({
  src: [
    {
      path: "../fonts/Matter-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Matter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Matter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Matter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Matter-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-matter",
});


export const metadata: Metadata = {
  title: "Keskese Limited",
  description: "Welcome to Keskese Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${matter.variable} ${manrope.variable} antialiased`}
      >
        <TransitionProvider>
          <Navbar />
          {children}
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
