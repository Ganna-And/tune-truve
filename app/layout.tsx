import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'

import ModalProvider from '@/providers/ModalProvider'
import UserProvider from '@/providers/UserContextProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import Player from '@/components/Player'
import getProductsWithPrices from '@/actions/getProductsWithPrices'

const league = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tune Truve ',
  description: 'App to listen nice tunes',
}

export const revalidate = 0;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const userSongs = await getSongsByUserId();
const products = await getProductsWithPrices()

if(!userSongs){
  return []
}

  return (
    <html lang="en">
      <body className={league.className}>
       <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
        <Sidebar  songs={userSongs}>{children}</Sidebar>
        <Player />
        </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
