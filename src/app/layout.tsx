import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prafful Patil | World-Class Software Engineer",
  description: "Senior Full Stack & AI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="selection:bg-primary/30 antialiased">
        {children}
      </body>
    </html>
  );
}
