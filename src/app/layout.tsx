import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Week 8 Assignment",
  description: "BCIT COMP 3013 Week 8 Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
