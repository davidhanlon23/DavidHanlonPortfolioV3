
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {  } from '@/components/providers';
import { RootLayoutProps } from "../_types";

const inter = Inter({ subsets: ["latin"] });


export default function AuthLayout({ children }: RootLayoutProps) {
  return (
        <main id="sign-in-page" className="min-h-screen flex items-center justify-center">
            {children}
        </main>
  )
}
