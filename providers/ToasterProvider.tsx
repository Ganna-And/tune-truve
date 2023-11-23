"use client"
import React from 'react';
import { Toaster} from'react-hot-toast'



const ToasterProvider = () => {
    
    return (
        <Toaster toastOptions={{
            style: {
                background: '#1a1a1a',
                color: '#FFA500',
              }
            }} />
            
    
    )
}
export default ToasterProvider;