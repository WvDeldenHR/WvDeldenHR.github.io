// Components
import { ImageConcept } from "../components/images/ImageConcept";

// Images
import ImageConcept01 from "./../assets/images/image_stock_phote_01.jpg"

const imageUrls = [
    ImageConcept01,
]

export function Concept02() {
    return (
        <div className="mt-36" id="Concept-2">
            <div className="">
                <span className="text-sm md:text-xs uppercase font-light text-white opacity-60">
                    Concept 2
                </span>
                <span className="mx-3 md:mx-2 text-sm md:text-xs uppercase font-light text-white opacity-60">|</span>
                <span className="text-sm md:text-xs uppercase font-light text-white opacity-60">
                    Nieuw Publiek (Be)trekken en vasthouden 
                </span>
            </div>
            <div className="my-4 md:my-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">NOS Kaart</h3>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse md:my-8">
                <div className="my-4 md:ml-12 md:max-w-[50%]">
                    <p className="mb-4 text-lg leading-6 font-light text-white">
                    De NOS Kaart is een innovatief voorstel voor een uitbreiding van de bestaande NOS-applicatie. Het hoofddoel is om nieuws voor jongeren op een overzichtelijke manier te presenteren, afgestemd op hun individuele interesses. 
                    Uit ons doelgroeponderzoek is gebleken dat jongeren nieuws vaak verwarrend vinden en te sterk gericht op politieke en traditionele onderwerpen. 
                    Met de introductie van de NOS Kaart lossen we dit probleem op door middel van de volgende functionaliteiten.
                    </p>
                    {/* <p className="text-lg leading-6 font-light text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Sodales neque sodales ut etiam sit amet nisl.
                    </p> */}
                </div>

                <div className="my-8 md:my-0 w-full">
                    <div className="block rounded-2xl w-full h-[160px] md:h-full bg-transparent bg-contain bg-center bg-no-repeat" 
                            style={{ backgroundImage: `url(${ImageConcept01})` }}></div>
                </div>
            </div>


            <div className="my-4 md:my-16">
                <h4 className="text-xl leading-3 text-white mb-7 font-bold">Wireframes</h4>
                <p className="text-lg leading-6 font-light text-white">
                De NOS Kaart stelt gebruikers in staat om een specifiek onderwerp te kiezen dat hen interesseert, en vervolgens het actuele nieuws van de dag te 
                verkennen door in en uit te zoomen op een interactieve kaart. Daarnaast bevat de kaart een geavanceerd aanbevelingssysteem dat nieuwsartikelen presenteert 
                op basis van de individuele interesses van de gebruiker. Hierdoor wordt niet alleen relevant nieuws weergegeven, maar ontvangt de gebruiker ook aanbevelingen 
                voor algemene nieuwsitems die mogelijk interessant zijn. Daarnaast worden populaire nieuwsberichten ook overzichtelijk gepresenteerd, waardoor de NOS Kaart een 
                dynamische en gepersonaliseerde nieuwservaring biedt voor jongeren.
                </p>
                {/* <p className="text-lg leading-6 font-light text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Sodales neque sodales ut etiam sit amet nisl.
                </p> */}
            </div>

            <div className="carousel | flex gap-8 my-8 -mx-8 md:mx-0 overflow-y-hidden">
                <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[0]} />
            </div>
        </div>
    );
}