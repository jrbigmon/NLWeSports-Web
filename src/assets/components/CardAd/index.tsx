import { GameController } from 'phosphor-react'
import TextAd from './TextAd'

interface Ad {
    name: string
    yearsPlaying: number
    hourStart: string
    hourEnd: string
    weekDays: []
    useVoiceChannel: boolean
    game: {
        title: string
    }
}

export default function CardGame(props: Ad){
    return (
        <div className="w-40 mx-auto p-5">
            <TextAd 
            title="Nome" 
            value={props.name} 
            colorTextSubTitle="#C4C4C6" 
            colorText="#FFFFFF"
            />

            <TextAd 
            title="Tempo de Jogo" 
            value={props.yearsPlaying} 
            colorTextSubTitle="#C4C4C6" 
            colorText="#FFFFFF"
            />

            <TextAd 
            title="Disponibilidade" 
            value={`${props.weekDays.length} dias * ${props.hourStart}-${props.hourEnd}`} 
            colorTextSubTitle="#C4C4C6" 
            colorText="#FFFFFF"
            />

            <TextAd title="Chamada de áudio?" 
            value={props.useVoiceChannel ? "Sim" : "Não"} 
            colorTextSubTitle="#C4C4C6" 
            colorText={props.useVoiceChannel ? "#34D399" : "red"}
            />
            <button className="bg-[#8B5CF6] text-white font-semibold text-sm flex justify-between"><GameController size={28} />Conectar</button>
        </div>
    )
}   