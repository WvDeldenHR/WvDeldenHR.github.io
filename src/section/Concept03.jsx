// Components
import { ImageConcept } from "../components/images/ImageConcept";

// Images
import ImageConcept01 from "./../assets/images/concept03/podcast01.png"
import ImageConcept02 from "./../assets/images/concept03/podcast02.png"
import ImageConcept03 from "./../assets/images/concept03/podcast03.png"


const imageUrls = [
    ImageConcept01,
    ImageConcept02,
    ImageConcept03,
]

export function Concept03() {
    return (
        <div className="mt-36" id="Concept-3">
            <div className="">
                <span className="text-sm md:text-xs uppercase font-light text-white opacity-60">
                    Concept 3
                </span>
                <span className="mx-3 md:mx-2 text-sm md:text-xs uppercase font-light text-white opacity-60">|</span>
                <span className="text-sm md:text-xs uppercase font-light text-white opacity-60">
                    Nieuw Publiek (Be)trekken en vasthouden 
                </span>
            </div>
            <div className="my-4 md:my-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">Podcast</h3>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse md:my-8">
                <div className="my-4 md:ml-12 md:max-w-[50%]">
                    <p className="mb-4 text-lg leading-6 font-light text-white">
                        NPO Podcast, brengt de NPO en publiek samen bij één.
                    </p>
                    <p className="text-lg leading-6 font-light text-white">
                        Op NPO Podcast kunnen kijkers meer dan alleen luisteren naar een podcast. Met NPO Podcast hebben de kijkers ook een impact,
                        en ook een stem. Breng kijkers als gast bij de podcasts om hun input te delen, en hun kant van het verhaal laten horen
                    </p>
                </div>

                <div className="my-8 md:my-0 w-full">
                    <div className="block rounded-2xl w-full h-[160px] md:h-full bg-transparent bg-contain bg-center bg-no-repeat" 
                            style={{ backgroundImage: `url(${ImageConcept01})` }}></div>
                </div>
            </div>


            <div className="my-4 md:my-16">
                <p className="text-lg leading-6 font-light text-white">
                    Download NPO Podcast en laat je stem horen
                </p>

            </div>

            <div className="carousel | flex gap-8 my-8 -mx-8 md:mx-0 overflow-y-hidden">
                <ImageConcept imageUrl={imageUrls[0]} />
                <ImageConcept imageUrl={imageUrls[1]} />
                <ImageConcept imageUrl={imageUrls[2]} />

            </div>
        </div>
    );
}