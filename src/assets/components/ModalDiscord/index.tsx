import * as Dialog from '@radix-ui/react-dialog';
import Button from './Button';
import ModalContent from './ModalContent';

interface Ad {
    discord: string
}

export default (props: Ad) => (
  <Dialog.Root>
    <Dialog.Trigger 
        children={<Button />} 
        className="mx-auto w-full"
    />
    <Dialog.Portal>
    <Dialog.Overlay className='bg-black/60 inset-0 fixed z-10'/>
      <Dialog.Content className='bg-[#2A2634] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-20 rounded-lg p-6'>
        <ModalContent discord={props.discord}/>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);