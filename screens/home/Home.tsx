"use client"
import { CryptoHero, Education, Experience, Projects, Contact } from './components';

const Home = () => {
    return(
            <div className="flex flex-col min-h-screen">
              <CryptoHero />
              <Projects />
              <Experience />
              <Education />
              <Contact />
          </div>
    );
};
export default Home;