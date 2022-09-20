import nlwApi from "../../../services/nlwApi"
import {useState, useEffect} from "react"
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react'
import SubmitForm from './SubmitForm'
import CheckboxWeekDays from './CheckboxWeekDays'

interface Game {
    id: string
    title: string
}

function ModalFormBody() {
    const [games, setGames] = useState<Game[]>([])
    const [gameId, setGameId] = useState('')
    const [name, setName] = useState('')
    const [yearsPlaying, setYearsPlaying] = useState(0)
    const [discord, setDiscord] = useState('')
    const [weekDays, setWeekDays] = useState('')
    const [hourStart, setHourStart] = useState('')
    const [hourEnd, setHourEnd] = useState('')
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)
    
    async function getGames() {
        const response = await nlwApi.get('/games')
        setGames( response.data )
    }

    useEffect(() => {
        getGames()
    }, [])

    function executePostFunction(event:any) { 
        SubmitForm(event, { 
            gameId, 
            name,
            discord,
            hourEnd,
            hourStart, 
            useVoiceChannel,
            weekDays,
            yearsPlaying 
        })
    }

    return (
        <form 
            className="text-sm" 
            onSubmit={e => {
                executePostFunction(e)
                window.location.reload()
            }}
        >
            <div className="mt-8 mb-2">
                <label htmlFor="gameId" className="text-[#FFFFFF]"> Qual o game? </label>
                <select 
                    id="gameId" name="gameId" 
                    className="bg-[#18181B] w-[100%] p-2 mt-2 rounded-lg text-[#71717A]" 
                    onChange={e => setGameId(e.target.value)}
                >
                    <option className="text-[#71717A]">Selecione o game que deseja jogar</option>
                    {games.map(game => {
                        return (
                            <option key={game.id} value={game.id} className="text-[#71717A]"> 
                                {game.title} 
                            </option>
                        )
                    })}
                </select>
            </div>
                
            <div className="mt-4 mb-2">
                <label htmlFor="name" className="text-[#FFFFFF]"> Seu nome (ou nickname)? </label>
                <input 
                    id="name" 
                    name="name" 
                    placeholder="Como te chamam dentro do game?" 
                    className="bg-[#18181B] w-[100%] p-2 mt-2 rounded-lg text-[#71717A]" 
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="flex justify-between mt-4 mb-2">
                <div className="w-[48%]">
                    <label htmlFor="yearsPlaying" className="text-[#FFFFFF]"> Joga há quantos anos? </label>
                    <input 
                        id="yearsPlaying" 
                        name="yearsPlaying" 
                        type="number" 
                        step="1" 
                        min="0"
                        placeholder="Tudo bem ser Zero" 
                        className="bg-[#18181B] w-[100%] p-2 mt-2 rounded-lg text-[#71717A]"
                        onChange={e => setYearsPlaying(parseInt(e.target.value))}
                    />
                </div>

                <div className="w-[48%]">
                    <label htmlFor="discord" className="text-[#FFFFFF]"> Qual seu Discord? </label>
                    <input 
                        id="discord" 
                        name="discord" 
                        placeholder="Usuário#0000" 
                        className="bg-[#18181B] w-[100%] p-2 mt-2 rounded-lg text-[#71717A]"
                        onChange={e => setDiscord(e.target.value)}
                    />
                </div> 
            </div>

            <div className="flex justify-between mt-4 mb-2">
                <div className="w-[48%]">
                    <label className="text-[#FFFFFF]"> Quando costuma jogar? </label>
                    <div className="flex mt-2">
                        <CheckboxWeekDays 
                            htmlFor="sunday"
                            inpurtId="sunday"
                            textLabel="D"
                            inputValue={"0"}
                            setInput={setWeekDays}
                            oldValueInput={weekDays}
                        />
                        <CheckboxWeekDays 
                            htmlFor="monday"
                            inpurtId="monday"
                            textLabel="S"
                            inputValue={"1"}
                            setInput={setWeekDays}
                            oldValueInput={weekDays}
                        />
                        <CheckboxWeekDays 
                            htmlFor="tuesday"
                            inpurtId="tuesday"
                            textLabel="T"
                            inputValue={"2"}
                            setInput={setWeekDays}
                            oldValueInput={weekDays}
                        />
                        <CheckboxWeekDays 
                            htmlFor="wednesday"
                            inpurtId="wednesday"
                            textLabel="Q"
                            inputValue={"3"}
                            setInput={setWeekDays}
                            oldValueInput={weekDays}
                        />
                        <CheckboxWeekDays 
                            htmlFor="thursday"
                            inpurtId="thursday"
                            textLabel="Q"
                            inputValue={"4"}
                            setInput={setWeekDays}
                            oldValueInput={weekDays}
                        />
                        <CheckboxWeekDays 
                            htmlFor="friday"
                            inpurtId="friday"
                            textLabel="S"
                            inputValue={"5"}
                            setInput={setWeekDays}
                            oldValueInput={weekDays}
                        />
                        <CheckboxWeekDays 
                            htmlFor="saturday"
                            inpurtId="saturday"
                            textLabel="S"
                            inputValue={"6"}
                            setInput={setWeekDays}
                            oldValueInput={weekDays}
                        />    
                    </div>
                </div> 
                
                <div className="w-[48%]">
                    <label htmlFor="hourStart" className="text-[#FFFFFF]"> Qual horário do dia? </label>
                    <div className="flex justify-between mt-2">
                        <input 
                            id="hourStart" 
                            name="hourStart" 
                            type="time" placeholder="De" 
                            className="bg-[#18181B] w-[48%] p-2 rounded-lg text-[#71717A]"
                            onChange={e => setHourStart(e.target.value)}
                        />
                        <input 
                            id="hourEnd" 
                            name="hourEnd" 
                            type="time" placeholder="Até" 
                            className="bg-[#18181B] w-[48%] p-2 rounded-lg text-[#71717A]"
                            onChange={e => setHourEnd(e.target.value)}
                        />
                    </div>
                </div> 
            </div>

            <div className="mt-4">
                <input 
                    id="useVoiceChannel" 
                    name="useVoiceChannel"  
                    type="checkbox" 
                    className="accent-[#18181B]"
                    onChange={e => e.target.checked ? setUseVoiceChannel(true) : setUseVoiceChannel(false)}
                />
                <label htmlFor="useVoiceChannel" className="text-white"> Costumo me conectar ao chat de voz</label>
            </div>

            <div className="mt-8 flex justify-end">
                <Dialog.DialogClose className="py-3 px-5 bg-zinc-500 rounded mr-4 text-white font-normal">
                    Cancelar
                </Dialog.DialogClose>
                <button type="submit" className="text-white py-3 px-5 bg-violet-500 flex rounded">
                    <GameController size={24} /> Encontrar duo
                </button>
            </div>
        </form>
    )
}

export default ModalFormBody