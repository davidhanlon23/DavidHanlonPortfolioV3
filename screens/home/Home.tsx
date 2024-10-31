"use client"
import { LiveHero,DefaultHero, AnotherHero, Education, Experience, Projects, Contact } from './components';

const Home = () => {
    return(
            <div className="flex flex-col min-h-screen">
              {/* <LiveHero /> */}
              {/* <DefaultHero /> */}
              <AnotherHero />
              <Projects />
              <Experience />
              <Education />
              <Contact />
          </div>
    );
};
export default Home;