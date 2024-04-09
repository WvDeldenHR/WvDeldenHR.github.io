import './App.css';

// Sections
import { Concepts } from './section/Concepts';
import { Documents } from './section/Documents';
import { GithubRepo } from './section/GithubRepo';
import { FinalConcept } from './section/FinalConcept';
import { Hero } from './section/Hero';
import { Team } from './section/Team';

// Components
import { Footer } from './components/Footer';
import { Navbar } from './components/nav/Navbar';


function App() {
    return (
        <>
            <Navbar />
            <Hero />

            <div className="mx-auto px-8 md:max-w-[1200px]">
                <div className="mt-32 md:-mt-32 mb-20 md:mb-32 md:pr-20 md:w-1/2">
                    <p className="text-lg text-center leading-6 font-light text-white">
                    In opdracht van de NPO hebben wij ons gericht op twee belangrijke aspecten: het mogelijk maken van betekenisvolle ontmoetingen voor jongeren en het verrijken van de beleving in de uitingen van de NPO. 
                    Met oog voor deze twee doelstellingen hebben we diverse concepten ontwikkeld om uiteindelijk het optimale product te realiseren.
                    </p>
                </div>

                <Team />
                <Concepts />
                <FinalConcept />
                <GithubRepo />
                <Documents />
            </div>

            <Footer />
        </>
    );
}

export default App;
