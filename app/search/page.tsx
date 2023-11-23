import Header from '@/components/Header';
import useDebaunce from '@/hooks/useDebaunce';
import React, { useState } from 'react';
import SearchInput from './componets/SearchInput';
import getSongsByUserId from '@/actions/getSongsByUserId';
import getSongsByTitle from '@/actions/getSongsByTitle';
import SearchContent from './componets/SearchContent';


export const revalidate = 0

interface SearchProps {
    searchParams:{
        title: string
    }
}

const Search:React.FC<SearchProps> = async({searchParams}:SearchProps) => {
   
const songs = await getSongsByTitle(searchParams.title);
    return (
        <Header>
            <div className="flex flex-col mt-4 mx-4">
              <h1 className='uppercase text-2xl'>Serach </h1>  
              <SearchInput />
            </div>
            <div className="mt-4 mx-4 ">
             <SearchContent songs={songs}/>
             </div>
        </Header>

    )
}
export default Search;