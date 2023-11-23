import Header from '@/components/Header'
import React from 'react'

import AccountContent from './components/AccountContent'



export default function Account() {
  return (
    <div>
      <Header>
       <h1 className='mt-8 ml-4 uppercase text-2xl text-center'>Account settings</h1> 
      </Header>
      <AccountContent />
    </div>
  )
}
