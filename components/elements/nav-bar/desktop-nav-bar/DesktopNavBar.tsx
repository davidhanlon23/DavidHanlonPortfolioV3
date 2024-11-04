"use client"
import Link from "next/link";
import { DarkModeToggle, HackerModeButton, RandomThemeButton } from '@/elements';
import { useScrollToSection } from "@/hooks";

const DesktopNavBar = () => {
    const { scrollToSection } = useScrollToSection();

    return(
        <nav className="ml-auto gap-4 sm:gap-6 items-center hidden md:flex">
          <Link 
            className="text-sm font-medium hover:underline underline-offset-4" 
            href="/#about"
            onClick={scrollToSection('about')}
          >
            About
          </Link>
          <Link 
            className="text-sm font-medium hover:underline underline-offset-4" 
            href="/#experience"
            onClick={scrollToSection('experience')}
          >
            Experience
          </Link>
          <Link 
            className="text-sm font-medium hover:underline underline-offset-4" 
            href="/#education"
            onClick={scrollToSection('education')}
          >
            Education
          </Link>
          <Link 
            className="text-sm font-medium hover:underline underline-offset-4" 
            href="/#showcase"
            onClick={scrollToSection('showcase')}
          >
            Showcase
          </Link>
          <Link 
            className="text-sm font-medium hover:underline underline-offset-4" 
            href="/#contact"
            onClick={scrollToSection('contact')}
          >
            Contact
          </Link>
          <DarkModeToggle />
          <HackerModeButton />
          <RandomThemeButton />
        </nav> 
    );
};
export default DesktopNavBar;
