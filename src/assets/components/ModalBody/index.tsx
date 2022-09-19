import nlwApi from "../../../services/nlwApi"
import {useState, useEffect} from "react"

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
                    <label htmlFor="weekDays" className="text-[#FFFFFF]"> Quando costuma jogar? </label>
                    <div className="flex mt-2">
                        <div className="mr-3">
                            <label htmlFor="weekDays" className="block text-[#FFFFFF] font-normal">D</label>
                            <input id="weekDays" name="weekDays" type="checkbox" value="0"  className="bg-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="weekDays" className="block text-[#FFFFFF] font-normal">S</label>
                            <input id="weekDays" name="weekDays" type="checkbox" value="1"  className="bg-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="weekDays" className="block text-[#FFFFFF] font-normal">T</label>
                            <input id="weekDays" name="weekDays" type="checkbox" value="2"  className="bg-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="weekDays" className="block text-[#FFFFFF] font-normal">Q</label>
                            <input id="weekDays" name="weekDays" type="checkbox" value="3"  className="bg-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="weekDays" className="block text-[#FFFFFF] font-normal">Q</label>
                            <input id="weekDays" name="weekDays" type="checkbox" value="4"  className="bg-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="weekDays" className="block text-[#FFFFFF] font-normal">S</label>
                            <input id="weekDays" name="weekDays" type="checkbox" value="5"  className="bg-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
                        </div>
                        <div className="mr-3">
                            <label htmlFor="weekDays" className="block text-[#FFFFFF] font-normal">S</label>
                            <input id="weekDays" name="weekDays" type="checkbox" value="6"  className="bg-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"/>
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
        </form>
    )
}

export default ModalBody