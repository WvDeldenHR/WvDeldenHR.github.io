// Components
import { ImageConcept } from "../components/images/ImageConcept";

// Images
import ImageConcept01 from "./../assets/images/finalconcept/image_finalconcept_01.png"
import ImageConcept02 from "./../assets/images/finalconcept/image_finalconcept_02.png"
import ImageConcept03 from "./../assets/images/finalconcept/image_finalconcept_03.png"
import ImageConcept04 from "./../assets/images/finalconcept/image_finalconcept_04.png"
import ImageConcept05 from "./../assets/images/finalconcept/image_finalconcept_05.png"
import ImageConcept06 from "./../assets/images/finalconcept/image_finalconcept_06.png"
import ImageConcept07 from "./../assets/images/finalconcept/image_finalconcept_07.png"
import ImageConcept08 from "./../assets/images/finalconcept/image_finalconcept_08.png"
import ImageConcept09 from "./../assets/images/finalconcept/image_finalconcept_09.png"
import ImageConcept10 from "./../assets/images/finalconcept/image_finalconcept_10.png"
import ImageConcept11 from "./../assets/images/finalconcept/image_finalconcept_11.png"

const imageUrls = [
    ImageConcept01,
    ImageConcept02,
    ImageConcept03,
    ImageConcept04,
    ImageConcept05,
    ImageConcept06,
    ImageConcept07,
    ImageConcept08,
    ImageConcept09,
    ImageConcept10,
    ImageConcept11,
]

export function FinalConcept() {
    return (
        <div className="mt-8 mb-20" id="Eindconcept">
            <div className="">
                <span className="text-sm md:text-xs uppercase font-light text-white opacity-60">
                    Eindconcept
                </span>
                <span className="mx-3 md:mx-2 text-sm md:text-xs uppercase font-light text-white opacity-60">|</span>
                <span className="text-sm md:text-xs uppercase font-light text-white opacity-60">
                    Nieuw Publiek (Be)trekken en vasthouden 
                </span>
            </div>
            <div className="my-4 md:my-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">NPO Visuals</h3>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse md:my-8">
                <div className="my-4 md:ml-12 md:max-w-[50%]">
                    <p className="mb-4 text-lg leading-6 font-light text-white">
                        Met NPO Visuals worden afbeeldingen gegenereerd door middel van AI. Deze afbeeldingen kunnen eenvoudig 
                        worden gemaakt door de redactie van een NPO-omroep, met behulp van een Chrome-extensie waar prompts 
                        kunnen worden ingevuld. Posts worden weergegeven op basis van de interesses van de gebruiker, om de 
                        app beter af te stemmen op de individuele gebruiker. Als een gebruiker uit zijn 'bubbel' wil komen, 
                        kan hij of zij gebruikmaken van het verrassingselement, dat willekeurige posts weergeeft.
                    </p>
                    <p className="text-lg leading-6 font-light text-white">
                        NPO Visuals bouwt voort op het concept van NPO Comic Stories. Met NPO Visuals streven we ernaar om de 
                        doelgroep te interesseren in short form content op een vergelijkbare manier als Cest Mocro op Instagram. 
                        Uit onderzoek is gebleken dat dit een populaire manier is om content te ontvangen.
                    </p>
                </div>

                <div className="my-8 md:my-0 w-full">
                    <div className="block rounded-2xl w-full h-[160px] md:h-full bg-transparent bg-contain bg-center bg-no-repeat" 
                            style={{ backgroundImage: `url(${ImageConcept01})` }}></div>
                </div>
            </div>


            <div className="my-4 md:my-16">
                <p className="text-lg leading-6 font-light text-white">
                    Het ontwerp maakt gebruik van dezelfde vormgeving en kleurenpalet als dat van de NPO. De layout van de app is 
                    vergelijkbaar met die van andere populaire apps, zoals Instagram, om de overstap voor de doelgroep zo klein 
                    mogelijk te maken. Bovendien zorgt het ontwerp voor gebruiksvriendelijkheid dankzij de doordachte indeling.
                </p>
            </div>

            <div className="carousel | flex md:flex-wrap gap-8 my-8 -mx-8 md:mx-0 overflow-y-hidden">
                <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[1]} />
                <ImageConcept imageUrl={imageUrls[2]} />
                <ImageConcept imageUrl={imageUrls[3]} />
                <ImageConcept imageUrl={imageUrls[4]} />
                <ImageConcept imageUrl={imageUrls[5]} />
                <ImageConcept imageUrl={imageUrls[6]} />
                <ImageConcept imageUrl={imageUrls[7]} />
                <ImageConcept imageUrl={imageUrls[8]} />
                <ImageConcept imageUrl={imageUrls[9]} />
                <ImageConcept imageUrl={imageUrls[10]} />
            </div>
        </div>
    );
}