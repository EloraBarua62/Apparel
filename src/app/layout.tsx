// 'use client'
import { Poppins } from "next/font/google";
import "./globals.scss";
import { Metadata } from "next";
import Providers from "./template/Providers/Providers";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Apparel",
  description: "This is multivendor clothing site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster position="top-right" reverseOrder={false} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
