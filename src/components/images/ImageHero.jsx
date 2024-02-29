export function ImageHero({ imageUrl }) {
    return (
        <>
            <div className="rounded-2xl h-[260px] w-full bg-cover bg-center bg-no-repeat grayscale shadow-sm" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </>
    );
}