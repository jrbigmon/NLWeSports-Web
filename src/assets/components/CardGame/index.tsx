interface Game {
    img: string
    title: string
    quantityAds: number
}

export default function CardGame({img, title, quantityAds}: Game){
    return (
        <div className="w-40 mx-auto">
            <a href="#" className="rounded-lg overflow-hidden">

                <img src={img} className="relative w-full rounded-lg"/>
                <div className="absolute bottom-0 left-0 right-0 pl-4 pb-4 bg-infoGame w-40 rounded-b-md mx-auto">
                    <p className="text-white font-bold block">{title}</p>
                    <p className="text-zinc-300 font-normal block">{quantityAds} anúncio(s)</p>
                </div>
            </a>
        </div>
    )
}   