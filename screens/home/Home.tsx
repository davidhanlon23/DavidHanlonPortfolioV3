"use client"
import { Testimonials, HeroSection, Education, Experience, Projects, Contact } from './components';

const Home = () => {
    return(
            <div className="flex flex-col min-h-screen">
              <HeroSection />
              <Projects />
              <Experience />
              <Education />
              <Contact />
              <Testimonials />
          </div>
    );
};
export default Home;