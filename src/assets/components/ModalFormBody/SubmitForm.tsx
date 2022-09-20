import nlwApi from "../../../services/nlwApi"

interface Ad {
    gameId: string
    name: string 
    yearsPlaying: number
    discord: string
    weekDays: string
    hourStart: string
    hourEnd: string
    useVoiceChannel: boolean
}

async function SubmitForm (event:any, props:Ad) {
    event.preventDefault()
    const newAd = {
        gameId: props.gameId,
        name: props.name,
        yearsPlaying: props.yearsPlaying,
        discord: props.discord,
        weekDays: props.weekDays,
        hourStart: props.hourStart,
        hourEnd: props.hourEnd,
        useVoiceChannel: props.useVoiceChannel
    }
    await nlwApi.post('/ads', newAd)
}

export default SubmitForm