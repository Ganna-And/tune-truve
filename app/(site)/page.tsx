"use client"



import Header from "@/components/Header"
import LikedSongs from "@/components/LikedSongs";


export default function Home() {


  
    return (
      <Header>
        <div className=" flex flex-col px-8 sm:flex-row  mt-4 align-center gap-x-4 justify-center">
          <h1 className="uppercase my-2 text-2xl md:text-4xl">
          Back to the Beats!
          </h1>
        <LikedSongs
        title="Liked songs"
        image='/assets/liked.png'
        href="/liked"/>
        </div>
        <h1>Newest songs</h1>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            <p>list of songs</p>
        </div>
      </Header>
    )
  }
