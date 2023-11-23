
import getSongs from "@/actions/getSongs";
import Header from "@/components/Header"
import LikedSongs from "@/components/LikedSongs";
import PageContent from "@/app/(site)/components/PageContent";



export const revalidate = 0;

export default async function Home() {

const songs = await getSongs();
    return (
      <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header>
        <div className=" flex flex-col px-8 
        lg:flex-row 
         mt-4 
         align-center 
         gap-x-4 
         justify-center">
          <h1 className="uppercase
           my-2 text-4xl md:text-xl">
          Back to the Beats!
          </h1>
        <LikedSongs
        title="Liked songs"
        image='/assets/liked.png'
        href="liked"/>
        </div>
        <h1 className="px-4">Newest songs</h1> 
      </Header> 
      <div className="px-4 py-2 flex-1">
          <PageContent songs={songs}/>
        </div>
      </div>
    )
  }
