// Images
import { ReactComponent as IconDownload } from "./../assets/icon/icon_download_01.svg";

export function Documents() {
    return (
        <div className="">
            <div className="flex items-center">
                <span className="block mr-2 rounded-full w-2 h-5 bg-primary"></span>
                <h2 className="text-2xl font-semibold text-white">Documents</h2>
            </div>

            <div className="table my-8">
                <div className="table-row items-center w-full">
                    <div className="table-cell border-b-[1px] border-white py-3 pl-3 w-full text-base font-light text-white">Bronnen Onderzoek</div>
                    <div className="table-cell border-b-[1px] border-l-[1px] border-white py-3 pl-6 pr-3">
                        <IconDownload className="transition-fast | w-5 h-5 fill-white hover:fill-primary cursor-pointer" /></div>
                </div>
                <div className="table-row items-center w-full">
                    <div className="table-cell border-b-[1px] border-white py-3 pl-3 w-full text-base font-light text-white">Doelgroep Onderzoek</div>
                    <div className="table-cell border-b-[1px] border-l-[1px] border-white py-3 pl-6 pr-3">
                        <IconDownload className="transition-fast | w-5 h-5 fill-white hover:fill-primary cursor-pointer" /></div>
                </div>
                <div className="table-row items-center w-full">
                    <div className="table-cell py-3 pl-3 w-full text-base font-light text-white">Markt Onderzoek</div>
                    <div className="table-cell border-l-[1px] border-white py-3 pl-6 pr-3">
                        <IconDownload className="transition-fast | w-5 h-5 fill-white hover:fill-primary cursor-pointer" /></div>
                </div>
            </div>
        </div>
    );
}