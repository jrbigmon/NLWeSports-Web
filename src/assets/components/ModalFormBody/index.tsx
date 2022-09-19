import nlwApi from "../../../services/nlwApi"
import {useState, useEffect} from "react"
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react'

interface Game {
    id: string
    title: string
}

function ModalBody() {
    const [games, setGames] = useState<Game[]>([])

    async function getGames() {
        const response = await nlwApi.get('/games')
        setGames( response.data )
    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <form className="text-sm">
            <div className="mt-8 mb-2">
                <label htmlFor="gameId" className="text-[#FFFFFF]"> Qual o game? </label>
                <select id="gameId" name="gameId" className="bg-[#18181B] w-[100%] p-2 mt-2 rounded-lg text-[#71717A]">
                    <option className="text-[#71717A]">Selecione o game que deseja jogar</option>
                    {games.map(game => {
                        return (
                            <option key={game.id} value={game.id} className="text-[#71717A]"> {game.title} </option>
                        )
                    })}
                </select>
            </div>
                
            <div className="mt-4 mb-2">
                <label htmlFor="name" className="text-[#FFFFFF]"> Seu nome (ou nickname)? </label>
                <input id="name" name="name" placeholder="Como te chamam dentro do game?" className="bg-[#18181B] w-[100%] p-2 mt-2 rounded-lg text-[#71717A]"/>
            </div>

            <div className="flex justify-between mt-4 mb-2">
                <div className="w-[48%]">
                    <label htmlFor="yearsPlaying" className="text-[#FFFFFF]"> Joga há quantos anos? </label>
                    <input id="yearsPlaying" name="yearsPlaying" type="number" step="1" min="0" placeholder="Tudo bem ser Zero" className="bg-[#18181B] w-[100%] p-2 mt-2 rounded-lg text-[#71717A]"/>
                </div>

                <div className="w-[48%]">
                    <label htmlFor="discord" className="text-[#FFFFFF]"> Qual seu Discord? </label>
                    <input id="discord" name="discord" placeholder="Usuário#0000" className="bg-[#18181B] w-[100%] p-2 mt-2 rounded-lg text-[#71717A]"/>
                </div> 
            </div>

            <div className="flex justify-between mt-4 mb-2">
                <div className="w-[48%]">
                    <label className="text-[#FFFFFF]"> Quando costuma jogar? </label>
                    <div className="flex mt-2">
                        <div className="mr-3">
                            <label htmlFor="sunday" className="block text-[#FFFFFF] font-normal">D</label>
                            <input id="sunday" name="weekDays" type="checkbox" value="0"  className="accent-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="monday" className="block text-[#FFFFFF] font-normal">S</label>
                            <input id="monday" name="weekDays" type="checkbox" value="1"  className="accent-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="tuesday" className="block text-[#FFFFFF] font-normal">T</label>
                            <input id="tuesday" name="weekDays" type="checkbox" value="2"  className="accent-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="wednesday" className="block text-[#FFFFFF] font-normal">Q</label>
                            <input id="wednesday" name="weekDays" type="checkbox" value="3"  className="accent-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="thursday" className="block text-[#FFFFFF] font-normal">Q</label>
                            <input id="thursday" name="weekDays" type="checkbox" value="4"  className="accent-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="friday" className="block text-[#FFFFFF] font-normal">S</label>
                            <input id="friday" name="weekDays" type="checkbox" value="5"  className="accent-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="saturday" className="block text-[#FFFFFF] font-normal">S</label>
                            <input id="saturday" name="weekDays" type="checkbox" value="6"  className="accent-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                    </div>
                </div> 
                <div className="w-[48%]">
                    <label htmlFor="hourStart" className="text-[#FFFFFF]"> Qual horário do dia? </label>
                    <div className="flex justify-between mt-2">
                        <input id="hourStart" name="hourStart" type="time" placeholder="De" className="bg-[#18181B] w-[48%] p-2 rounded-lg text-[#71717A]"/>
                        <input id="hourEnd" name="hourEnd" type="time" placeholder="Até" className="bg-[#18181B] w-[48%] p-2 rounded-lg text-[#71717A]"/>
                    </div>
                </div> 
            </div>
            <div className="mt-4">
                <input id="useVoiceChannel" name="useVoiceChannel" value="true" type="checkbox" className="accent-[#18181B]"/>
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

export default ModalBody