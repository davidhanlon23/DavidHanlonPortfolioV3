import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/providers';
import { Toaster } from '@/ui';
import { RootLayoutProps } from "./_types";
import { SidebarProvider } from "@/ui";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: '',
    template: `%s | David M. Hanlon`
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              {children}
            </SidebarProvider>
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </>
  )
}
