// Images
import { ReactComponent as IconDownload } from "./../assets/icon/icon_download_01.svg";
// Documents
import documentFile01 from "./../assets/documents/onderzoek.docx";
// import documentFile02 from "./../assets/images/image_stock_phote_01.jpg";
// import documentFile03 from "./../assets/images/image_stock_phote_01.jpg";

export function Documents() {
    return (
        <div className="" id="Documenten">
            <div className="flex items-center">
                <span className="block mr-2 rounded-full w-2 h-5 bg-primary"></span>
                <h2 className="text-2xl font-semibold text-white">Documents</h2>
            </div>

            <div className="table my-8">
                <div className="table-row items-center w-full">
                    <div className="table-cell border-b-[1px] border-white py-3 pl-3 w-full text-base font-light text-white">Onderzoek</div>
                    <a href={documentFile01} className="table-cell border-b-[1px] border-l-[1px] border-white py-3 pl-6 pr-3" download="Onderzoek">
                        <IconDownload className="transition-fast | w-5 h-5 fill-white hover:fill-primary cursor-pointer" /></a>
                </div>
                {/* <div className="table-row items-center w-full">
                    <div className="table-cell border-b-[1px] border-white py-3 pl-3 w-full text-base font-light text-white">Doelgroep Onderzoek</div>
                    <a href={documentFile02} className="table-cell border-b-[1px] border-l-[1px] border-white py-3 pl-6 pr-3" download="Doelgroep Onderzoek">
                        <IconDownload className="transition-fast | w-5 h-5 fill-white hover:fill-primary cursor-pointer" /></a>
                </div>
                <div className="table-row items-center w-full">
                    <div className="table-cell py-3 pl-3 w-full text-base font-light text-white">Markt Onderzoek</div>
                    <div href={documentFile03} className="table-cell border-l-[1px] border-white py-3 pl-6 pr-3" download="Markt Onderzoek">
                        <IconDownload className="transition-fast | w-5 h-5 fill-white hover:fill-primary cursor-pointer" /></div>
                </div> */}
            </div>
        </div>
    );
}