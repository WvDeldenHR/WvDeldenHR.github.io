export function ImageTeam({ imageUrl }) {
    return (
        <div className="md:flex md: justify-center my-8">
            <div className="block rounded-full w-[160px] h-[160px] bg-white bg-cover bg-center bg-no-repeat grayscale" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </div>
    );
}