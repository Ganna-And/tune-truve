"use client"

import React, { useEffect } from 'react';
import Modal from './Modal';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import {Auth} from'@supabase/auth-ui-react'
import {ThemeSupa} from"@supabase/auth-ui-shared"
import useAuthModal from '@/hooks/useAuthModal';
import { useRouter } from 'next/navigation';


const AuthModal
 = () => {

    const supabaseClient = useSupabaseClient();
    const {session} = useSessionContext();

    const {onClose, isOpen} = useAuthModal()
    const router = useRouter()
    const onChange=(open: boolean)=>{
        if(!open){
            onClose()
        }
    }

    useEffect(()=>{
        if(session){
router.refresh();
onClose()
        }
    },[session,router,onClose])
    
    return (
        <Modal
        title='Welcome Back'
        description='Please login to your account'
        isOpen={isOpen}
        onChange={onChange}>    
        <Auth
        theme='dark'
        supabaseClient={supabaseClient}
        appearance={{
        theme:ThemeSupa,
        variables:{
            default:{
                colors:{
                    brand:'#404040',
                    brandAccent:'#bfa094'
                }
            }
        }}}
         providers={['github']}
         magicLink
        />
        </Modal>
    )
}
export default AuthModal;