import CardAd from "../CardAd"
import { useState, useEffect } from 'react';
import nlwApi from "../../../services/nlwApi";
import { useParams } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface Ad {
    gameId: string
    discord: string
    name: string
    yearsPlaying: number
    hourStart: string
    hourEnd: string
    weekDays: []
    useVoiceChannel: boolean
    game:{
        title: string
    }
}

export default function CardsAdsByGame() {
    // Execute the functions handles
    let numberElementInPagination = 5
    function setElementInPagination(){
        const width = window.screen.width
        if(width < 1080 && width > 800){
            numberElementInPagination = 4
        }
        if(width < 800 && width > 700){
            numberElementInPagination = 3
        }
        if(width < 700 && width > 500){
            numberElementInPagination = 2
        } 
        if(width < 500) {
            numberElementInPagination = 1
        }
    }
    setElementInPagination()

    // API hooks effects
    const [ads, setAds] = useState<Ad[]>([])
    const [titleGame, setTitleGame] = useState<string>('')
    
    const { id } = useParams()
    
    async function getAdsByGame() {
        const response = await nlwApi.get(`/games/${id}/ads`)
        setAds( response.data )
    }

    async function getGameById() {
        const response = await nlwApi.get(`/games/${id}`)
        setTitleGame(response.data.title)
    }
    
    useEffect(() => {
        getAdsByGame()
        getGameById()
    },[useParams()])

    return (
        <div className="mx-16 mt-10">
            { ads.length > 0 ? 
                <h1 className="text-center text-white text-4xl font-black"> 
                    Todos as <span className="bg-rainbowGradient text-transparent bg-clip-text">publicações</span> de {titleGame}
                </h1> 
                : '' }

            <Swiper 
                navigation={ ads.length > numberElementInPagination ? true : false }
                slidesPerView={ numberElementInPagination }
                modules={ [Navigation] }
                className="mySwiper mt-10"
                loop={ false }   
            >
                { ads.map((ad, i:number)=> (
                    <SwiperSlide key={i} className="w-48 h-auto">
                        <CardAd
                            gameName={ad.game.title}
                            name={ad.name}
                            yearsPlaying={ad.yearsPlaying}
                            weekDays={ad.weekDays}
                            hourStart={ad.hourStart}
                            hourEnd={ad.hourEnd}
                            useVoiceChannel={ad.useVoiceChannel}
                            discord={ad.discord}
                        />
                    </SwiperSlide>
                )) }
            </Swiper>
        </div>
    )
}