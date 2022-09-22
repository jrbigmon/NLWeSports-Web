import Button from '../ModalDiscord/'
import TextAd from './TextAd'
import WeekDays from './WeekDays'

interface Ad {
    name: string
    yearsPlaying: number
    hourStart: string
    hourEnd: string
    weekDays: []
    useVoiceChannel: boolean
    gameName: string
    discord: string
}

export default function CardAd(props: Ad){
    return (
        <div className="w-48 mx-auto">
            <div className='bg-[#2A2634] rounded-lg p-4'>
                <h1 className="text-center text-white font-bold">
                    { props.gameName.length > 20 ? `${(props.gameName).slice(0, 17)}...` : (props.gameName) }
                </h1>

                <TextAd 
                title="Nome" 
                value={props.name} 
                colorTextSubTitle="text-[#C4C4C6]" 
                colorText="text-[#FFFFFF]"
                />

                <TextAd 
                title="Tempo de Jogo" 
                value={`${props.yearsPlaying} ano(s)`} 
                colorTextSubTitle="text-[#C4C4C6]" 
                colorText="text-[#FFFFFF]"
                />

                <TextAd 
                title="Disponibilidade" 
                value={`${props.weekDays.length} dias * ${props.hourStart}-${props.hourEnd}`} 
                colorTextSubTitle="text-[#C4C4C6]" 
                colorText="text-[#FFFFFF]"
                components={<WeekDays weekDays={props.weekDays} />}
                /> 

                <TextAd title="Chamada de áudio?" 
                value={props.useVoiceChannel ? "Sim" : "Não"} 
                colorTextSubTitle="text-[#C4C4C6]" 
                colorText={props.useVoiceChannel ? "text-[#34D399]" : "text-[#FF0000]"}
                />
                
                <Button discord={props.discord}/>
                
            </div>
        </div>
    )
}   