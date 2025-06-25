import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";


const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '700'], 
});

export const metadata: Metadata = {
  title: "Codefest 2025",
  description: "Official Website of SLIIT Codefest 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
