import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/lib/AOSWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Persco Delivery",
  description: "Your Excellent Partner in Healthcare Delivery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
