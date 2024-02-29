import React, { useState } from 'react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="fixed flex py-8 px-4 md:px-8 w-full top-0 z-[50]">
                <div className="w-full">
                    <a href="/" className="transition-fast | rounded-lg py-1 px-3 text-4xl font-['Quicksand'] font-bold text-neutral-900 hover:text-white bg-primary shadow">kcb</a>
                </div>

                <div className="flex flex-col items-end gap-2 -mt-2 rounded-xl py-6 px-4 bg-primary shadow" onClick={toggleMenu}>
                    <span className={`transition-fast | block rounded-full h-1 bg-neutral-900 ${isMenuOpen ? 'translate-y-[12px] rotate-45 w-[36px]' : 'w-[48px]'}`}></span>
                    <span className={`transition-fast | block rounded-full w-[36px] h-1 bg-neutral-900 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`transition-fast | block rounded-full h-1 bg-neutral-900 ${isMenuOpen ? 'translate-y-[-12px] -rotate-45 w-[36px]' : 'w-[24px]'}`}></span>
                </div>
            </div>

            <div className={`transition-normal ${isMenuOpen ? ' fixed w-full h-screen top-0 bg-transparent backdrop-blur-xl z-[30] translate-x-0' : 'translate-x-full'}`}></div>
            <div className={`transition-normal ${isMenuOpen ? ' fixed w-[70%] md:w-1/2 flex flex-col h-screen top-0 left-0 bg-neutral-900 z-[40] translate-x-0' : 'translate-x-[-100%]'}`}>
                <div className={`${isMenuOpen ? ' mt-40' : ''}`}></div>

                <div className={`${isMenuOpen ? '' : 'h-0'}`}>
                    <ul className="px-6 md:px-12">
                        <li className="my-3">
                            <a href="/" className="text-lg text-white font-['Quicksand'] font-semibold">Ons Team</a>
                        </li>
                        <li className="my-3">
                            <a href="/" className="text-lg text-white font-['Quicksand'] font-semibold opacity-60">Concepten</a>
                        </li>
                        <ul className="px-6">
                            <li className="my-3">
                                <a href="/" className="text-lg text-white font-['Quicksand'] font-semibold opacity-60">Concept 1</a>
                            </li>
                            <li className="my-3">
                                <a href="/" className="text-lg text-white font-['Quicksand'] font-semibold opacity-60">Concept 2</a>
                            </li>
                            <li className="my-3">
                                <a href="/" className="text-lg text-white font-['Quicksand'] font-semibold opacity-60">Concept 3</a>
                            </li>
                        </ul>
                        <li className="my-3">
                            <a href="/" className="text-lg text-white font-['Quicksand'] font-semibold opacity-60">Eindconcepten</a>
                        </li>
                        <li className="my-3">
                            <a href="/" className="text-lg text-white font-['Quicksand'] font-semibold opacity-60">Documenten</a>
                        </li>
                    </ul>
                </div>

                <div className={`${isMenuOpen ? ' flex items-end h-full' : 'h-0'}`}>
                    <span className="border-t-[1px] border-white p-4 w-full text-sm md:text-center font-light text-white">2024 NPO | Alle rechten voorbehouden</span>
                </div>
            </div>
        </>
    );
}