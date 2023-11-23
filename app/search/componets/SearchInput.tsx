"use client"

import useDebaunce from '@/hooks/useDebaunce';
import { Song } from '@/types';
import React, { useEffect, useState } from 'react';
import qs from'query-string'
import { useRouter } from 'next/navigation';
import { Input } from '@/components/Input';


const SearchInput = () => {
    
    const[value, setValue] = useState<string>('');
    const router = useRouter()
    const debounce = useDebaunce(value, 500);


    useEffect(()=>{
      const query = {
        title: debounce
    }

    const url = qs.stringifyUrl({
        url:'/search',
        query: query
    }) 
    router.push(url);

    })
   

     return (
        <Input type="text" placeholder='What would you like to listen?'  value={value} onChange={(e)=>setValue(e.target.value)}
        className='h-[3rem] rounded-md px-2 focus:outline-none mt-2'/>

     )
}
export default SearchInput;