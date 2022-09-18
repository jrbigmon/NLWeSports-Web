import { GameController } from 'phosphor-react'
import TextAd from './TextAd'

interface Ad {
    name: string
    yearsPlaying: number
    hourStart: string
    hourEnd: string
    weekDays: []
    useVoiceChannel: boolean
    // game: {
    //     title: string
    // }
}


export default function CardAd(props: Ad){
    return (
        <div className="w-48 mx-auto">
            <div className='bg-[#2A2634] rounded-lg p-4'>
                <TextAd 
                title="Nome" 
                value={props.name} 
                colorTextSubTitle="text-[#C4C4C6]" 
                colorText="text-[#FFFFFF]"
                />

                <TextAd 
                title="Tempo de Jogo" 
                value={props.yearsPlaying} 
                colorTextSubTitle="text-[#C4C4C6]" 
                colorText="text-[#FFFFFF]"
                />

                <TextAd 
                title="Disponibilidade" 
                value={`${props.weekDays.length} dias * ${props.hourStart}-${props.hourEnd}`} 
                colorTextSubTitle="text-[#C4C4C6]" 
                colorText="text-[#FFFFFF]"
                />

                <TextAd title="Chamada de áudio?" 
                value={props.useVoiceChannel ? "Sim" : "Não"} 
                colorTextSubTitle="text-[#C4C4C6]" 
                colorText={props.useVoiceChannel ? "text-[#34D399]" : "text-[#FF0000]"}
                />

                <button className="bg-[#8B5CF6] text-white font-semibold text-sm flex justify-between items-center mx-auto rounded-lg p-2">
                    <GameController size={28} />
                    Conectar
                </button>
            </div>
        </div>
    )
}   