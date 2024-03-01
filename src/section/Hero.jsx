// Components
import { ImageHero } from "../components/images/ImageHero";

// Images
import { ReactComponent as IconArrowDown } from "./../assets/icon/icon_arrow_down_01.svg";

import ImageHero01 from "./../assets/images/npo-bg4.jpg";
import ImageHero02 from "./../assets/images/npo-bg1.jpeg";
import ImageHero03 from "./../assets/images/image_stock_phote_01.jpg";
import ImageHero04 from "./../assets/images/npo-bg9.jpeg";
import ImageHero05 from "./../assets/images/npo-bg8.jpeg";
import ImageHero06 from "./../assets/images/npo-bg5.jpeg";
import ImageHero07 from "./../assets/images/npo-bg3.jpg";
import ImageHero08 from "./../assets/images/npo-bg2.jpeg";
import ImageHero09 from "./../assets/images/npo-bg7.jpeg";
import ImageHero10 from "./../assets/images/npo-bg6.jpeg";

const imageUrls = [
    ImageHero01,
    ImageHero02,
    ImageHero03,
    ImageHero04,
    ImageHero05,
    ImageHero06,
    ImageHero07,
    ImageHero08,
    ImageHero09,
    ImageHero10,
];

export function Hero() {
    return (
        <div className="relative md:w-full md:flex">
            <div className="absolute flex justify-center md:order-1 mt-12 md:-mt-4 w-full md:w-1/2 h-screen">
                <div className="rounded-b-full w-3/4 md:w-1/2 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
            <div className="md:flex md:justify-end md:order-3 md:w-full">
                <div className="relative flex gap-6 -mt-16 md:w-full overflow-hidden z-10">
                <div className="flex flex-col gap-6 -ml-20 md:ml-0 w-full">
                    <ImageHero imageUrl={imageUrls[0]} />
                    <ImageHero imageUrl={imageUrls[1]} />
                    <div className="hidden md:block">
                        <ImageHero imageUrl={imageUrls[2]} />
                    </div>
                </div>

                <div className="flex flex-col gap-7 -mt-32 w-full">
                    <ImageHero imageUrl={imageUrls[3]} />
                    <ImageHero imageUrl={imageUrls[4]} />
                    <ImageHero imageUrl={imageUrls[5]} />
                    <div className="hidden md:block">
                        <ImageHero imageUrl={imageUrls[6]} />
                    </div>
                </div>

                <div className="flex flex-col gap-6 -mr-20 md:mr-0 w-full">
                    <ImageHero imageUrl={imageUrls[7]} />
                    <ImageHero imageUrl={imageUrls[8]} />
                    <div className="hidden md:block">
                        <ImageHero imageUrl={imageUrls[9]} />
                    </div>
                </div>
                </div>

            </div>

            <div className="relative flex flex-col md:justify-center items-center gap-2 md:order-2 mt-8 mb-24 w-full h-full md:h-screen z-10">
                <div className="hidden md:flex flex-col md:mb-12">
                    <h1 className="text-4xl font-['Quicksand'] font-bold text-white">Lorem ipsum dolor sit ame</h1>
                    <h1 className="text-4xl font-['Quicksand'] font-bold text-white opacity-80">Lorem ipsum dolor sit ame</h1>
                    <h1 className="text-4xl font-['Quicksand'] font-bold text-white opacity-60">Lorem ipsum dolor sit ame</h1>
                    <h1 className="text-4xl font-['Quicksand'] font-bold text-white opacity-40">Lorem ipsum dolor sit ame</h1>
                </div>

                <div className="flex flex-col gap-2">
                    <a href="/" className="transition-normal | flex items-center py-3 px-7 rounded-full text-lg font-semibold text-white bg-neutral-900 hover:opacity-80">
                        Bekijk Project
                        <IconArrowDown className="ml-2 w-6 h-6 fill-white" />
                    </a>
                    <span className="text-lg text-center font-normal text-white">of lees verder</span>
                </div>
            </div>
        </div>
    );
}