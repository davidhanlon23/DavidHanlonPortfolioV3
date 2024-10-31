import { NavBar, Footer } from "@/elements";
import { MobileSideBar } from "@/components/elements/nav-bar";
import { Suspense } from "react";
import { SidebarInset } from "@/ui";
import "../globals.css";

export default function LoggedOutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
   <MobileSideBar />
    <SidebarInset>
      <Suspense fallback={<div className="h-14" />}>
        <NavBar />
      </Suspense>
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </SidebarInset> 
    </>
  );
}
