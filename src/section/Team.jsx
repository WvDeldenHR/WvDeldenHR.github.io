// Components
import { ImageTeam } from "../components/images/ImageTeam";

// Images
import ImageTeam01 from "./../assets/images/team/image_issam.png";
import ImageTeam02 from "./../assets/images/team/mike.png";
import ImageTeam03 from "./../assets/images/team/sena.JPEG";
import ImageTeam04 from "./../assets/images/team/image_wesley.jpg";

const imageUrls = [
    ImageTeam01,
    ImageTeam02,
    ImageTeam03,
    ImageTeam04,
]

export function Team() {
    return (
        <div className="relative" id="Ons-Team">
            <div className="relative flex items-center z-10">
                <span className="block mr-2 rounded-full w-2 h-5 bg-primary"></span>
                <h2 className="text-2xl text-white font-semibold">Ons Team</h2>
            </div>

            <div className="absolute -ml-8 md:ml-0 w-full h-[100px] top-[20%] bg-primary after:absolute after:block after:w-screen md:after:w-full after:h-full after:bg-primary"></div>

            <div className="relative flex gap-8 mb-6 -mx-8 overflow-y-hidden md:overflow-y-clip z-10">
                <div className="flex flex-col ml-12 min-w-[50%] md:min-w-[20%]">
                    <ImageTeam imageUrl={imageUrls[0]} />
                    <div className="flex flex-col">
                        <h4 className="my-3 text-lg font-semibold text-white">Issam Fissoune</h4>
                        <a href="/" className="border-[3px] border-primary rounded-full py-1 px-5 w-max text-base font-semibold text-primary">Back-end</a>
                        <p className="my-4 text-lg leading-6 font-light text-white">
                            Student op CMGT HR 23 jaar oud
                        </p>
                    </div>
                </div>
                <div className="flex flex-col min-w-[50%] md:min-w-[20%]">
                    <ImageTeam  imageUrl={imageUrls[1]}/>
                    <div className="flex flex-col">
                        <h4 className="my-3 text-lg font-semibold text-white">Mike Degrassi</h4>
                        <a href="/" className="border-[3px] border-primary rounded-full py-1 px-5 w-max text-base font-semibold text-primary">Back-end</a>
                        <p className="my-4 text-lg leading-6 font-light text-white">
                        Ik ben gefocust op de backend van de applicatie en wil zorgen voor een goed eindresultaat. Ik vind het belangrijk dat iedereen zijn mening eerlijk kan delen om een zo goed mogelijk product neer te zetten waar iedereen het mee een is.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col min-w-[50%] md:min-w-[20%]">
                    <ImageTeam imageUrl={imageUrls[2]} />
                    <div className="flex flex-col">
                        <h4 className="my-3 text-lg font-semibold text-white">Sena Babacan</h4>
                        <a href="/" className="border-[3px] border-primary rounded-full py-1 px-5 w-max text-base font-semibold text-primary">Front-end</a>
                        <p className="my-4 text-lg leading-6 font-light text-white">
                            Sena is een derde jaars student bij de opleiding Creative Media & Gametechnologies.
                            Haar interesses liggen vooral bij het werken aan designs en de front-end van websites en applicaties. 
                        </p>
                    </div>
                </div>
                <div className="flex flex-col mr-12 min-w-[50%] md:min-w-[20%]">
                    <ImageTeam imageUrl={imageUrls[3]} />
                    <div className="flex flex-col">
                        <h4 className="my-3 text-lg font-semibold text-white">Wesley van Delden</h4>
                        <a href="/" className="border-[3px] border-primary rounded-full py-1 px-5 w-max text-base font-semibold text-primary">Front-end</a>
                        <p className="my-4 text-lg leading-6 font-light text-white">
                            Wesley is een designer en developer. 
                            Hij heeft al enige ervaring met ontwerpen en ontwikkelen van websites.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}