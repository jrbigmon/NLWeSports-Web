import { CheckCircle } from "phosphor-react";
import copy from "copy-to-clipboard"
import { useState } from "react";

interface Modal {
    discord: string
}

export default function ModalContent (props: Modal){
    const [copyText, setCopyText] = useState('')
    
    function setValueCopyText(){
        setTimeout(() => {
            setCopyText('')
        }, 1000)
    }
    return (
        <div className="bg-[#2A2634] py-8 px-10 rounded-lg w-80 flex items-center flex-col">
            <CheckCircle size={64} className="text-emerald-400"/>
            <div className="mt-6 text-center">
                <p className="text-white font-black text-2xl">Lest's play!</p>
                <p className="text-zinc-400">Agora é só começar a jogar</p>
            </div>
            <div className="text-center mt-6 w-full">
                <p className="text-white font-semibold text-base">Adicione no Discord</p>
                <button 
                    className="bg-zinc-900 text-white w-full rounded py-3 px-4 m-2"
                    onClick={e => {
                        copy(props.discord)
                        setCopyText('Copiado')
                        setValueCopyText()
                    }}
                >
                   {props.discord}
                </button>
                <span className="text-zinc-200">{copyText}</span>
            </div>
        </div>
    )
}