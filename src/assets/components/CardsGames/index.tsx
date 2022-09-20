import CardGame from "../CardGame"
import { useState, useEffect } from 'react';
import nlwApi from "../../../services/nlwApi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function CardsGames () {
    // functions to handle 
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
    // Execute the functions handles
    setElementInPagination()

    // Interface
    interface Game {
        id: string
        title: string
        bannerUrl: string
        _count: {
            ads: number
        }
    }

    // set states values
    const [games, setGames] = useState<Game[]>([])
    
    // API hooks efects
    async function getGames() {
        const response = await nlwApi.get("/games")
        setGames( response.data )
    }

    useEffect(() => {
        getGames()
    }, [])

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
                {games.map((game, i:number)=> (
                    <SwiperSlide key={i}>
                        <CardGame id={game.id} img={game.bannerUrl} title={game.title} quantityAds={game._count.ads}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    )
}