export function ImageConcept({ imageUrl }) {
    return (
        <div className="first:ml-8 last:mr-8 rounded-2xl min-w-[47.5%] md:min-w-[20%] h-[240px] md:h-[320px] bg-center bg-no-repeat bg-transparent bg-contain" 
            style={{ backgroundImage: `url(${imageUrl})` }}></div>
    );
}