// Components
import { ImageConcept } from "../components/images/ImageConcept";

// Images
import ImageConcept01 from "./../assets/images/concept04/image_concept_04_home.png"
import ImageConcept02 from "./../assets/images/concept04/image_concept_04_detail.png"

const imageUrls = [
    ImageConcept01,
    ImageConcept02,
]

export function Concept04() {
    return (
        <div className="mt-36" id="Concept-4">
            <div className="">
                <span className="text-sm md:text-xs uppercase font-light text-white opacity-60">
                    Concept 4
                </span>
                <span className="mx-3 md:mx-2 text-sm md:text-xs uppercase font-light text-white opacity-60">|</span>
                <span className="text-sm md:text-xs uppercase font-light text-white opacity-60">
                    Nieuw Publiek (Be)trekken en vasthouden 
                </span>
            </div>
            <div className="my-4 md:my-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">NPO Comic Stories</h3>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse md:my-8">
                <div className="my-4 md:ml-12 md:max-w-[50%]">
                    <p className="mb-4 text-lg leading-6 font-light text-white">
                        De NPO Comic Stories is een nieuwe manier van het overbrengen van informatie aan de doelgroep.
                        Door het gebruik van AI voor het generen van afbeeldigen in combinatie met bijvoorbeeld nieuws,
                        kunnen nieuwsberichten zo worden overgebracht dat ze voor de doelgroep interessanter kunnen zijn om te lezen.
                    </p>
                    <p className="text-lg leading-6 font-light text-white">
                        Uit onderzoek met doelgroep kwam onder andere naar boven dat de doelgroep meer geintresseerd zou zijn
                        in de onderwerpen van de NPO als deze zouden worden weergeven in (korte) video's of in comic stories.
                    </p>
                </div>

                <div className="my-8 md:my-0 w-full">
                    <div className="block rounded-2xl w-full h-[160px] md:h-full bg-transparent bg-contain bg-center bg-no-repeat" 
                            style={{ backgroundImage: `url(${ImageConcept01})` }}></div>
                </div>
            </div>


            <div className="my-4 md:my-16">
                <p className="text-lg leading-6 font-light text-white">
                    Voor het ontwerp hebben we het kleuren palet en vormgeving van de NPO behouden. De layout hebben we zo opgesteld dat het 
                    overzichtelijk en herkenbaar in gebruik is vergleken met andere (soortgelijke) apps. De gebruiker kan naast kiezen op basis
                    van tags of aanbevelingen, ook de keuze maken voor het gebruiken van een verassings thema, waarbij de gebruiker een willekeurig 
                    thema krijgt.
                </p>
            </div>

            <div className="carousel | flex gap-8 my-8 -mx-8 md:mx-0 overflow-y-hidden">
                <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[1]} />
            </div>
        </div>
    );
}