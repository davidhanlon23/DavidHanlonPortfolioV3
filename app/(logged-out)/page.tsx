import { Home } from "@/screens";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Trendz - Smart Trading Journal Software for Data-Driven Traders. Transform your trading performance with Trendz, the all-in-one trading journal that helps you track, analyze, and improve your trades. Features advanced analytics, performance metrics, and actionable insights to optimize your trading strategy.",
};

export default function HomePage() {
  return <Home />;
}
