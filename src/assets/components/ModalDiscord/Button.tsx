import { GameController } from "phosphor-react";

export default function Button(){
    return (
        <div className="bg-[#8B5CF6] text-white font-semibold text-sm mx-auto rounded-lg p-2 w-full h-10 flex justify-evenly items-center">
            <GameController size={32} />
            Conectar
        </div>
    )
}