import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from "@radix-ui/react-dialog"

export default function SearchDuoBar(){
    return (
        <div className="h-28 bg-rainbowGradient mt-8 mx-16 mb-4 rounded-lg flex items-end">
            <div className="bg-[#2A2634] w-full h-[6.8rem] rounded-md py-6 px-8 flex justify-between items-center">
                <div className="xs:hidden sm:hidden md:block lg:block">
                    <p className="text-white font-black text-2xl">Não encontrou seu duo?</p>
                    <p className="text-zinc-400">Publique um anúncio para encontrar novos players!</p>
                </div>
        
                    <Dialog.Trigger  type="button" className="inline-flex justify-between text-white w-48 h-12 bg-violet-500 hover:bg-violet-600 rounded-lg py-3 px-4">
                        <MagnifyingGlassPlus size={28} /> 
                        Publicar <span className='xs:hidden sm:block md:block lg:block'>anúncio</span>
                    </Dialog.Trigger>

            </div>  
        </div>
    )
}