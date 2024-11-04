import { CryptoHero, Showcase, Experience, Education, Contact, About } from '../../components';

const DefaultView = () => {
    return (
        <>
            <CryptoHero />
            <About />
            <Experience />
            <Education />
            <Showcase />
            <Contact /> 
        </>
    );
};

export default DefaultView;
