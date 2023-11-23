"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowUndoOutline, IoArrowRedoOutline,IoHomeOutline, IoSearchOutline, IoPersonCircle } from "react-icons/io5";
import Button from './Button';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import toast from 'react-hot-toast';

type HeaderProps = {
    children:React.ReactNode
};

const Header:React.FC<HeaderProps> = ({children}) => {

  const router = useRouter();
  const authModal = useAuthModal();
  
  const {user} = useUser();
  const supabase = useSupabaseClient()

  const handleLogOut=async()=>{
 const{error} = await supabase.auth.signOut() 
  router.refresh();
   if(error){
    toast.error(error.message)
   }else{
    toast.success("Welcome.You are loggen in!")
  
   }

  }

  
    
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
<IoArrowUndoOutline size={35} className='orrangehover cursor-pointer hover:bg-orange-500 transiotion rounded-full p-1 mr-2' onClick={()=>router.back()}/>
<IoArrowRedoOutline size={35} className='orrangehover cursor-pointer hover:bg-orange-500 transiotion rounded-full p-1 mr-2' onClick={()=>router.forward()}/>
     </div>
     <div className="flex md:hidden">
      <IoHomeOutline size={35} className='orrangehover rounded-full p-1 mr-2 
      cursor-pointer hover:bg-orange-500 transiotion' onClick={()=>router.push('/')}/>
      <IoSearchOutline size={35} className='orrangehover rounded-full p-1 mr-2 cursor-pointer hover:bg-orange-500 transiotion' onClick={()=>router.push('/search')}/>
     </div>
     <div className="flex gap-x-2">

{user ? (
  <div className='flex items-center gap-x-2' >
    <Button 
    className='pt-1'
    onClick={handleLogOut}>
      Logout
    </Button>
    <Button className='px-2 py-2 bg-orange-500 navhover rounded-full' onClick={()=>router.push('/account')}>
    <IoPersonCircle size={24} />
    </Button>
  </div> 
):(
   <>
      <Button onClick={authModal.onOpen}>Login</Button>
      <Button onClick={authModal.onOpen} className='bg-orange-500'>Sign up</Button>
     </>
)}
     
     </div>
      </div>
      {children}
      </div>
    )
}
export default Header;