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

let numberElementInPagination = 6

function setElementInPagination(){
    const width = window.screen.width
    if(width < 1080){
        numberElementInPagination = 5
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
        <div className="mx-16">
            <h1 className="text-center text-white text-4xl font-black"> 
                Seu <span className="bg-rainbowGradient text-transparent bg-clip-text">duo</span> está aqui 
            </h1>

            <Swiper 
                navigation={ games.length > numberElementInPagination ? true : false }
                slidesPerView={ numberElementInPagination }
                modules={ [Navigation] }
                className="mySwiper mt-10"
                loop={ true }
            >
                {games.map((game, i)=> (
                    <SwiperSlide key={i}>
                        <CardGame img={game} name={'Nome do Jogo'} quantityAds={4}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    )
}