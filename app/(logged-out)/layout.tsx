import { NavBar, Footer } from "@/elements";
import "../globals.css";

export default function LoggedOutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <NavBar/>
        {children}
        <Footer />
      </>
  );
}
