import type { Metadata } from "next";
import { AppSidebar } from '@/elements';
import { SidebarInset, SidebarProvider, SidebarTrigger, Separator, Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbPage, BreadcrumbItem, BreadcrumbSeparator } from "@/ui";
import "../globals.css";

export default function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main>
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>

          
    </>
  );
}
