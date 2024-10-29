import Link from "next/link";
import { Button } from '@/ui';
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
    return(
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center min-h-screen">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Master Your Trades with Trendz
                      </h1>
                      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                        Track your trades, analyze your performance, and get personalized insights to improve your trading strategy.
                      </p>
                    </div>
                    <div className="space-x-4">
                      <Link href="/sign-up">
                        <Button>Join The Waitlist <ChevronRight className="ml-2 h-4 w-4" /></Button>
                      </Link>
                      <Link href="#features">
                        <Button variant="outline">Explore Features</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
    );
};
export default HeroSection;