import React from 'react';

import * as Dialog from'@radix-ui/react-dialog'
import { title } from 'process';
import { IoCloseCircleOutline } from 'react-icons/io5';



interface ModalProps  {
    isOpen: boolean;
    onChange:(open:boolean)=>void;
    title:string; 
    description: string;
    children: React.ReactNode
};

const Modal:React.FC<ModalProps> = ({title, isOpen,onChange,description}) => {
    
    return (
        <Dialog.Root>
          <Dialog.Portal >
           <Dialog.Overlay />
           <Dialog.Content>
            <Dialog.Title>
                {title}
            </Dialog.Title>
            <Dialog.Description>
                {description}
            </Dialog.Description>
            <div>
                <IoCloseCircleOutline />
            </div>
           </Dialog.Content>
          </Dialog.Portal >
         
        </Dialog.Root>
    )
}
export default Modal;