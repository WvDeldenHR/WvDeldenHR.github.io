import './App.css';

// Sections
import { Concepts } from './section/Concepts';
import { Documents } from './section/Documents';
import { FinalConcept } from './section/FinalConcept';
import { Hero } from './section/Hero';
import { Team } from './section/Team';

// Components
import { Footer } from './components/Footer';
import { Navbar } from './components/nav/Navbar';
//test
function App() {
    return (
        <>
            <Navbar />
            <Hero />

            <div className="mx-auto px-8 md:max-w-[1200px]">
                <div className="mt-32 md:-mt-32 mb-20 md:mb-32 md:pr-20 md:w-1/2">
                    <p className="text-lg text-center leading-6 font-light text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Sodales neque sodales ut etiam sit amet nisl.
                    </p>
                </div>

                <Team />
                <Concepts />
                <FinalConcept />
                <Documents />
            </div>

            <Footer />
        </>
    );
}

export default App;
