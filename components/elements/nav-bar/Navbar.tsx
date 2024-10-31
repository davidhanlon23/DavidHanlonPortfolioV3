"use client"
import Link from 'next/link'
import Logo from '@/components/icons/logo'
import DesktopNavBar from './desktop-nav-bar/DesktopNavBar';
import MobileNavBar from './mobile-nav-bar/MobileNavBar';

const NavBar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-black">
      <div className="flex w-full items-center justify-between">
        <div id="logo-container" className="flex-shrink-0 -mt-4">
          <Link className="flex items-center justify-center" href="/"> 
            <Logo classes="w-36 h-36 text-primary dark:text-primary hover:text-black dark:hover:text-white" />
          </Link>
        </div>
      
        <div id="nav-items-container" className="flex-grow flex justify-end">
          <MobileNavBar />
          <DesktopNavBar />
        </div>
      </div>
    </header>
  )
}

export default NavBar
