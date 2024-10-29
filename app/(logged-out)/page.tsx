import { Home } from "@/screens";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "David M. Hanlon | Senior Software Engineer - Professional portfolio showcasing full-stack development expertise, innovative projects, and technical leadership. Explore my work in software engineering, web development, and technology solutions."
};

export default function HomePage() {
  return <Home />;
}
