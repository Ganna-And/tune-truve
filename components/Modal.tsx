import React from 'react';

import * as Dialog from'@radix-ui/react-dialog'
import { IoCloseCircleOutline } from 'react-icons/io5';



interface ModalProps  {
    isOpen: boolean;
    onChange:(open:boolean)=>void;
    title:string; 
    description: string;
    children: React.ReactNode
};

const Modal:React.FC<ModalProps> = ({title,
     isOpen,onChange,description, children}) => {
    
    return (
        <Dialog.Root 
        open={isOpen}
        defaultOpen={isOpen}
        onOpenChange={onChange}
        >
          <Dialog.Portal >
           <Dialog.Overlay className='
           bg-neutral-900/90
            w-full
            h-full
            inset-0
            fixed
            flex
           flex-col
           items-center
           justify-center
            '/>
           <Dialog.Content className='
           w-full
           md:w-[90vw]
           flex
           flex-col
           items-center
           justify-center
           fixed
           inset-0
           md:max-w-[450px]
           h-full
           md:h-fit
           md:max-h-[95vh]
           bg-neutral-800
           focus:outline-none
           rounded-lg
           top-[50%]
           left-[50%]
           translate-x-[-50%]
           translate-y-[-50%]
           p-4
           '>
            <Dialog.Title className='
            text-center uppercase text-xl font-semibold'>
                {title}
            </Dialog.Title>
            <Dialog.Description className='text-center text-sm'>
                {description}
            </Dialog.Description>
            <div>{children}</div>
            <Dialog.Close asChild>
            <button
              className="
                text-neutral-400 
                hover:text-white 
                absolute 
                top-[10px] 
                right-[10px] 
                inline-flex 
                h-[25px] 
                w-[25px] 
                appearance-none 
                items-center 
                justify-center 
                rounded-full 
                focus:outline-none
              "
              aria-label="Close"
            >
              <IoCloseCircleOutline size={28} />
            </button>
          </Dialog.Close>
           </Dialog.Content>
          </Dialog.Portal >
         
        </Dialog.Root>
       
    )
}
export default Modal;