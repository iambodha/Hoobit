import type { Metadata } from "next";
import "./globals.css";

import "@fontsource-variable/inter";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hoobit",
  description: "Exploring your passions",
  icons: {
    icon: assetPath('/logo-tab.png'),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >{children}</body>
    </html>
  );
}
