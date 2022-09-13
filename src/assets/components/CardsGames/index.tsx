import CardGame from "../CardGame"
import apexGame from "../../img/apexGame.png"

export default function CardsGames () {
    return (
        <div className="mt-20">
            <h1 className="text-center text-white font-bold text-5xl"> Seu duo está aqui </h1>
            <div className="flex flex-wrap mt-14">
                <CardGame img={apexGame}/>
                <CardGame img={apexGame}/>
            </div>
        </div>
    )
}