"use client"
import Link from "next/link";
import * as React from "react"
import {
  GraduationCap,
  Contact,
  BriefcaseBusiness,
  FolderGit2,
  User
} from "lucide-react"
import { DarkModeToggle, HackerModeButton, NavMain, RandomThemeButton } from '@/elements';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/ui"
import Logo from '@/components/icons/logo';

const data = {
  navMain: [
    {
      title: "About",
      url: "#about",
      icon: User,
    },
    {
      title: "Experience",
      url: "#experience",
      icon: BriefcaseBusiness,
    },
    {
      title: "Education",
      url: "#education",
      icon: GraduationCap,
    },
    {
      title: "Showcase",
      url: "#showcase",
      icon: FolderGit2,
    },
    {
      title: "Contact",
      url: "#contact",
      icon: Contact,
    },
  ],
}

const MobileSideBar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { isMobile } = useSidebar();
  if(!isMobile) return null;
  return (
    <Sidebar variant="inset" {...props} className="bg-black dark:bg-black">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center h-full w-full -mt-[10px]">
                  <Logo /> 
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <HackerModeButton />
        <RandomThemeButton />
        <DarkModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}

export default MobileSideBar;