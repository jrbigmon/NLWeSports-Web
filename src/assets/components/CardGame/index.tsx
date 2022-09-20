import { Link } from "react-router-dom"
interface Game {
    id: string
    img: string
    title: string
    quantityAds: number
}

export default function CardGame(props: Game){
    return (
        <div className="w-40 mx-auto">
            <Link  to={`/games/${props.id}/ads`} className="rounded-lg overflow-hidden">
                <img src={props.img} className="relative w-full rounded-lg"/>
                <div className="absolute bottom-0 left-0 right-0 pl-4 pb-4 bg-infoGame w-40 rounded-b-md mx-auto">
                    <p className="text-white font-bold block">{props.title}</p>
                    <p className="text-zinc-300 font-normal block">{props.quantityAds} anúncio(s)</p>
                </div>
            </Link>
        </div>
    )
}   