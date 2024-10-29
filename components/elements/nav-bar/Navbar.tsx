"use client"
import Link from 'next/link'
import { DarkModeToggle } from "@/elements";
import Logo from '@/components/icons/logo';

const NavBar = () => {
    return(
        <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Logo />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#experience">
            Experience
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#education">
            Education
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact">
            Contact
          </Link>
          <DarkModeToggle />
        </nav>
      </header>
    );
};
export default NavBar;
