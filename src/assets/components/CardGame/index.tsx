export default function CardGame({img, name, quantityAds}: any){
    return (
        <div className="w-40 mx-auto">
            <a href="#" className="rounded-lg overflow-hidden">

                <img src={img} className="relative w-full"/>
                <div className="absolute bottom-0 left-0 right-0 pl-4 pb-4 bg-infoGame w-40 rounded-b-md mx-auto">
                    <p className="text-white font-bold block">{name}</p>
                    <p className="text-zinc-300 font-normal block">{quantityAds} anúncios</p>
                </div>
            </a>
        </div>
    )
}   