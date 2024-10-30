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
                       Full Stack Engineer, Entrepreneur, & Blockchain Enthusiast
                      </h1>
                      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                        Together lets change the world                      
                      </p>
                    </div>
                    <div className="space-x-4">
                      <Button onClick={() => window.open('/Resume/DavidHanlonResume.pdf')}>Resume <ChevronRight className="ml-2 h-4 w-4" /></Button>
                      <Link href="#contact">
                        <Button variant="outline">Work with Me</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
    );
};
export default HeroSection;