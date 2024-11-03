import { CryptoHero, Projects, Experience, Education, Contact, About } from '../../components';

const DefaultView = () => {
    return (
        <>
            <CryptoHero />
            <About />
            <Experience />
            <Education />
            <Projects />
            <Contact /> 
        </>
    );
};

export default DefaultView;
