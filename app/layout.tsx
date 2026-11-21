import { Inter_Tight, JetBrains_Mono } from "next/font/google";

import SidebarNav from "@/components/nav/SidebarNav";
import { themeInitScript } from "@/lib/theme";

import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${jetBrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <SidebarNav />
        <div className="flex min-h-full flex-1 flex-col lg:pl-72">
          {children}
        </div>
      </body>
    </html>
  );
}
