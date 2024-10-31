import Link from "next/link";
import { DarkModeToggle, RandomThemeButton } from '@/elements';

const DesktopNavBar = () => {
    return(
        <nav className="ml-auto gap-4 sm:gap-6 items-center hidden md:flex">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sign-in">
            Sign In
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sign-up">
            Sign Up
          </Link>
          <DarkModeToggle />
          <RandomThemeButton />
        </nav> 
    );
};
export default DesktopNavBar;
