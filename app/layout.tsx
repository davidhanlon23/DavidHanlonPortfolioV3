import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, GlobalProvider } from '@/components/providers';
import { Toaster } from '@/ui';
import { RootLayoutProps } from "./_types";
import { SidebarProvider } from "@/ui";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: '',
    template: `%s | David M. Hanlon`
  },
  metadataBase: new URL('https://davidmhanlon.com'),
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="google-site-verification" content="8I7pQhdRQJJMjGxjer8DutuV-GZv1vQU9lTgergLCVY" />
        </head>
        <body>
        <QueryClientProvider client={queryClient}>

          <ThemeProvider
            enableColorScheme
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            value={{
              light: "light",
              dark: "dark",
              zinc: "theme-zinc",
              slate: "theme-slate",
              stone: "theme-stone",
              gray: "theme-gray",
              neutral: "theme-neutral",
              red: "theme-red",
              rose: "theme-rose",
              orange: "theme-orange",
              green: "theme-green",
              blue: "theme-blue",
              yellow: "theme-yellow",
              violet: "theme-violet",
            }}
            storageKey="david-hanlon-theme"
          >
            <SidebarProvider>
              <GlobalProvider>
                {children}
              </GlobalProvider>
            </SidebarProvider>
            </ThemeProvider>
          </QueryClientProvider>
          <Toaster />
        </body>
      </html>
    </>
  )
}
