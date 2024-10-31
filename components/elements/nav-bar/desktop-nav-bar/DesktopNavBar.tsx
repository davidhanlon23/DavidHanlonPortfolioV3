import Link from "next/link";
import { DarkModeToggle, RandomThemeButton } from '@/elements';

const DesktopNavBar = () => {
    return(
        <nav className="ml-auto gap-4 sm:gap-6 items-center hidden md:flex">
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
          <RandomThemeButton />
        </nav> 
    );
};
export default DesktopNavBar;
