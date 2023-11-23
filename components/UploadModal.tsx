"use client"

import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import useUploadModal from '@/hooks/useUploadModal';
import {useForm, FieldValues, SubmitHandler} from'react-hook-form'
import { Input } from './Input';
import Button from './Button';
import { useUser } from '@/hooks/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import toast from 'react-hot-toast';
import uniqid from 'uniqid'




const UploadModal
 = () => {


    const {onClose, isOpen} = useUploadModal();
    const[isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    const{register, handleSubmit,reset} = useForm<FieldValues>({
        defaultValues:{
            song:'',
            title:'',
            image:'',
            author:''
        }
    })

    const {user} = useUser();
    const supabase = useSupabaseClient()
    const onChange=(open: boolean)=>{
        if(!open){
            onClose()
            
        }
    }    

   

   const onSubmit:SubmitHandler<FieldValues>= async (values)=>{

    try {
       setIsLoading(true) 
        const songFile = values.song?.[0];
        const imageFile = values?.image?.[0];
    
        if(!user && !songFile && !imageFile){
            toast.error('Missing some fields');
            return;
        }
        const uniqId = uniqid();

        const {data: songData, error:songError} = await supabase.storage.from('songs').upload(`song-${values.title}-${uniqId}`,songFile,{
            upsert:false,
            cacheControl:'3600'
        })
    
        if(songError){
            setIsLoading(false)
           return  toast.error('Unable to apload the song');
        }
        const {data: imageData, error:imageError} = await supabase.storage.from('images').upload(`image-${values.title}-${uniqId}`,imageFile,{
            upsert:false,
            cacheControl:'3600'
        })
    
        if(imageError){
            setIsLoading(false)
            return toast.error('Unable to apload the image');
        }
    const{error: supabaseError} = await supabase.from('songs').insert({
        user_id:user?.id,
        title:values.title,
        song_path: songData.path,
        image_path:imageData.path,
        author:values.author
    })

    if(supabaseError){
        toast.error(supabaseError.message);
    }
    setIsLoading(false)
    reset();
    onClose();
    router.refresh()
    toast.success('Song is uploaded successfuly!')        
    } catch (error) {
        toast.error('Something went wrong')
    }finally{
        setIsLoading(false)
    }

   
    }
    return (
        <Modal
        title='Add your songs here'
        description='please uplaod mp3 files only'
        isOpen={isOpen}
        onChange={onChange}>    
       <form onSubmit={handleSubmit(onSubmit)}>
        <Input
        disabled={isLoading}
        type='text'
        placeholder='Song Title'
        className='mt-4'
        id='title'
        {...register('title',{required: true})} />
        <Input
        disabled={isLoading}
        type='text'
        placeholder='Song author'
        id='author'
        {...register('author',{required: true})} />

        <div className='mt-2'>
            <h4 className='ml-2'>Upload song file</h4>
            <Input
        disabled={isLoading}
        type='file'
        id='song'
        accept='.mp3'
        {...register('song',{required: true})} />
        </div>
        <div className='mt-2'>
            <h4 className='ml-2'>Upload image for song</h4>
            <Input
        disabled={isLoading}
        type='file'
        id='image'
        accept='image/*'
        {...register('image',{required: true})} />
        </div>
        <Button className='w-full h-[3rem] bg-orange-500 pt-1 orrangehover'>
            Submit
        </Button>
       </form>
    
        </Modal>
    )
}
export default UploadModal;