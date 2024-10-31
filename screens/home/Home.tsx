"use client"
import { LiveHero, Education, Experience, Projects, Contact } from './components';

const Home = () => {
    return(
            <div className="flex flex-col min-h-screen">
              <LiveHero />
              <Projects />
              <Experience />
              <Education />
              <Contact />
          </div>
    );
};
export default Home;