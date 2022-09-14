import CardGame from "../CardGame"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import apexGame from "../../img/apexGame.png"
import csGame from "../../img/csGame.png"
import dotaGame from "../../img/dotaGame.png"
import fortniteGame from "../../img/fortniteGame.png"
import lolGame from "../../img/lolGame.png"
import wwGame from "../../img/wwGame.png"

const games = [apexGame, csGame, dotaGame, fortniteGame, lolGame, wwGame]

let numberElementInPagination = 5

function setElementInPagination(){
    const width = window.screen.width
    if(width < 1080){
        numberElementInPagination = 4
    }
    if(width < 800){
        numberElementInPagination = 3
    }
    if(width < 700){
        numberElementInPagination = 2
    } if(width < 500) {
        numberElementInPagination = 1
    }
}

setElementInPagination()

export default function CardsGames () {
    return (
        <div>
            <h1 className="text-center text-white font-bold text-5xl"> Seu duo está aqui </h1>
            
            <div>
                <Swiper navigation={ games.length > 5 ? true : false }
                    slidesPerView={numberElementInPagination}
                    modules={[Navigation]}
                    className="mySwiper mt-10"
                >
                    <div className="mx-25">
                        {games.map((game, i)=> (
                            <SwiperSlide>
                                <CardGame img={game} key={i} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                
            </div>
            
        </div>
    )
}