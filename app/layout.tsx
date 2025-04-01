import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mega Mark",
  description: "Welcome to Mega Mark – your premier destination for the latest smartphones and electronics at the best prices! 💎📱💻 At Mega Mark, we offer a wide selection of the latest smartphones, smartwatches, tablets, and modern technology accessories from the best global brands. We are committed to providing 100% original products, certified warranties, and exclusive offers to suit your needs.",
  icons: {
    icon:"/Logo (2).webp",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
