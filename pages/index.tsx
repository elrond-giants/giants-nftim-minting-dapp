import Footer from '../components/Footer';
import About from '../components/MintPage/About';
import Carousel from '../components/MintPage/Carousel';
import Faq from '../components/MintPage/Faq';
import Header from '../components/MintPage/Header';
import Roadmap from '../components/MintPage/Roadmap';
import Team from '../components/MintPage/Team';
import Navbar from '../components/Navbar';

import type {NextPage} from 'next'
const Home: NextPage = () => {
    return (
        <>
            
                <Navbar />
                <Header />
                <About />
                <Carousel />
                <Roadmap />
                <Team />
                <Faq />
                <Footer footerLanding />
            
        </>
        
    );
};

export default Home;

