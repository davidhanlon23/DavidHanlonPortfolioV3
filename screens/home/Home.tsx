"use client"
import { Features, Testimonials, HeroSection } from './components';

const Home = () => {
    return(
            <div className="flex flex-col min-h-screen">
              <HeroSection />
              <Features />
              <Testimonials />
              {/* <Pricing /> */}
          </div>
    );
};
export default Home;