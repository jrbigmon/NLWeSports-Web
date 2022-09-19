import * as Dialog from '@radix-ui/react-dialog';
import SearchDuoBar from '../SearchDuoBar';
import ModalBody from '../ModalFormBody'

export default () => (

  <Dialog.Root>

    <SearchDuoBar />    

    <Dialog.Portal>

      <Dialog.Overlay className='bg-black/60 inset-0 fixed z-10'/>

      <Dialog.Content className='bg-[#2A2634] w-[30vw] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-20 rounded-lg p-6'>

        <Dialog.Title className='text-white text-3xl font-black'> Publique um anúncio </Dialog.Title>
        
        <ModalBody />

      </Dialog.Content>

    </Dialog.Portal>

  </Dialog.Root>

);