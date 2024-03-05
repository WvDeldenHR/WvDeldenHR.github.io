// Components
import { ImageConcept } from "../components/images/ImageConcept";

// Images
import ImageConcept01 from "./../assets/images/concept01/image_concept_01_home.png"
import ImageConcept02 from "./../assets/images/concept01/image_concept_01_shorts.png"
import ImageConcept03 from "./../assets/images/concept01/image_concept_01_discover.png"

const imageUrls = [
    ImageConcept01,
    ImageConcept02,
    ImageConcept03,
]

export function Concept01() {
    return (
        <div className="mt-8" id="Concept-1">
            <div className="">
                <span className="text-sm md:text-xs uppercase font-light text-white opacity-60">
                    Concept 1
                </span>
                <span className="mx-3 md:mx-2 text-sm md:text-xs uppercase font-light text-white opacity-60">|</span>
                <span className="text-sm md:text-xs uppercase font-light text-white opacity-60">
                    Nieuw Publiek (Be)trekken en vasthouden 
                </span>
            </div>
            <div className="my-4 md:my-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">NPO Start + NPO Shorts</h3>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse md:my-8">
                <div className="my-4 md:ml-12 md:max-w-[50%]">
                    <p className="mb-4 text-lg leading-6 font-light text-white">
                        Shorts, zoals de korte video's op platforms als YouTube, zijn uitermate effectief in het grijpen
                        en vasthouden van de aandacht van kijkers, met name door hun bondige formaat, directe aanpak, en
                        visuele aantrekkingskracht. Deze eigenschappen resoneren sterk met de snelle
                        informatieconsumptie van vandaag, waardoor ze bijzonder aantrekkelijk zijn voor een
                        jongerenpubliek.
                    </p>
                    <p className="text-lg leading-6 font-light text-white">
                        Door de kernaspecten van shorts—korte, directe content en visuele aantrekkelijkheid—te benutten,
                        kunnen nieuwsorganisaties hun berichtgeving toegankelijker en memorabeler maken. Dit maakt het
                        nieuws niet alleen boeiender voor de kijkers maar vergroot ook de kans op betrokkenheid bij met
                        name het jongere publiek.
                    </p>
                </div>

                <div className="my-8 md:my-0 w-full">
                    <div className="block rounded-2xl w-full h-[160px] md:h-full bg-transparent bg-contain bg-center bg-no-repeat" 
                            style={{ backgroundImage: `url(${ImageConcept01})` }}></div>
                </div>
            </div>


            <div className="my-4 md:my-16">
                <p className="text-lg leading-6 font-light text-white">
                    Hieronder wordt weergegeven hoe we van plan zijn deze aanpak te integreren in de bestaande NPO-app.
                    Gebruikers kunnen content liken, erop reageren en deze extern delen. De interface is vertrouwd voor
                    jongeren, wat de gebruikerservaring ten goede komt. Cruciaal zijn ook de diverse kanalen binnen de
                    NPO. In het getoonde voorbeeld heeft de gebruiker de optie om NOS, een van de NPO-kanalen, toe te
                    voegen aan zijn of haar voorkeuren.
                </p>
            </div>

            <div className="carousel | flex gap-8 my-8 -mx-8 md:mx-0 overflow-y-hidden">
                <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[1]} />
                <ImageConcept imageUrl={imageUrls[2]} />
                {/* <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[0]} /> */}
            </div>
        </div>
    );
}