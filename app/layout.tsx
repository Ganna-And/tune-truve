import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'

import ModalProvider from '@/providers/ModalProvider'
import UserProvider from '@/providers/UserContextProvider'

const league = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tune Truve ',
  description: 'App to listen nice tunes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={league.className}>
       
      
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
        <Sidebar>{children}</Sidebar>
        </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
