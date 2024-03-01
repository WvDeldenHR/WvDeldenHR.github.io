// Sections
import { Concept01 } from "./Concept01";
import { Concept02 } from "./Concept02";
import { Concept03 } from "./Concept03";
import { Concept04 } from "./Concept04";


export function Concepts() {
    return (
        <div className="my-20 md:my-24" id="Concepten">
            <div className="flex items-center">
                <span className="block mr-2 rounded-full w-2 h-5 md:h-6 bg-primary"></span>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">Concepten</h2>
            </div>

            <Concept01 />
            <Concept02 />
            <Concept03 />
            <Concept04 />
        </div>
    );
}