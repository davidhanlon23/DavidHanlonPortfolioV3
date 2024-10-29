"use client"
import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
import { DarkModeToggle } from "@/elements";
import Logo from '@/components/icons/logo';

const NavBar = () => {
    return(
        <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Logo orientation="horizontal" width={150} />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#features">
            Features
          </Link>
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link> */}
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sign-in">
            Sign In
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sign-up">
            Sign Up
          </Link>
          <DarkModeToggle />
        </nav>
      </header>
    );
};
export default NavBar;
