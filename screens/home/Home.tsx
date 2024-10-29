"use client"
import { Testimonials, HeroSection, Education, Experience, Projects} from './components';

const Home = () => {
    return(
            <div className="flex flex-col min-h-screen">
              <HeroSection />
              <Projects />
              <Experience />
              <Education />
              <Testimonials />
          </div>
    );
};
export default Home;