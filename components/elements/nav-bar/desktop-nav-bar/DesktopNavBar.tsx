"use client"
import Link from "next/link";
import { DarkModeToggle, HackerModeButton, RandomThemeButton } from '@/elements';
import { usePathname, useRouter} from "next/navigation";

const DesktopNavBar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const scrollToSection = (sectionId: string) => async (e: React.MouseEvent) => {
        e.preventDefault();
        
        /* If we're not on the home page, navigate home first */
        if (pathname !== '/') {
            await router.push('/');
        }
        
        /**  Wait a bit for the new page to load if we navigated */
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, pathname !== '/' ? 100 : 0);
    };

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
