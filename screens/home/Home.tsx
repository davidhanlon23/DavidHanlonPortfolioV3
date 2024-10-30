"use client"
import { Testimonials, LiveHero, Education, Experience, Projects, Contact } from './components';

const Home = () => {
    return(
            <div className="flex flex-col min-h-screen">
              <LiveHero />
              <Projects />
              <Experience />
              <Education />
              <Contact />
              <Testimonials />
          </div>
    );
};
export default Home;