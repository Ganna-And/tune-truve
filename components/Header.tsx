
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowUndoOutline, IoArrowRedoOutline,IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import Button from './Button';

type HeaderProps = {
    children:React.ReactNode
};

const Header:React.FC<HeaderProps> = ({children}) => {

  const router = useRouter()
    
    return (
      <div className="flex-col">
        <div className="marquee">
        <ul className="marquee_content">
          <li>
            🏵️listen music with tune-truve
          </li>
          <li>
            🏵️listen music with tune-truve
          </li>
          <li>
            🏵️listen music with tune-truve
          </li>
          <li>
            🏵️listen music with tune-truve
          </li>
          </ul>
        <ul className="marquee_content" aria-hidden='true'>
          <li>
            🏵️listen music with tune-truve
          </li>
          <li>
            🏵️listen music with tune-truve
          </li>
          <li>
            🏵️listen music with tune-truve
          </li>
          <li>
            🏵️listen music with tune-truve
          </li>
          </ul>
      </div>
      <div className="flex justify-between py-[1.7rem] border-b-[1px] px-4">
        <div className='hidden md:flex'>
<IoArrowUndoOutline size={35} className='orrangehover rounded-full p-1 mr-2' onClick={()=>router.back()}/>
<IoArrowRedoOutline size={35} className='orrangehover rounded-full p-1 mr-2' onClick={()=>router.forward()}/>
     </div>
     <div className="flex md:hidden">
      <IoHomeOutline size={35} className='orrangehover rounded-full p-1 mr-2'/>
      <IoSearchOutline size={35} className='orrangehover rounded-full p-1 mr-2'/>
     </div>
     <div className="flex gap-x-2">
      <>
      <Button onClick={()=>{}}>Login</Button>
      <Button onClick={()=>{}} className='bg-orange-500'>Sign up</Button>
     </>
     </div>
      </div>
      {children}
      </div>
    )
}
export default Header;