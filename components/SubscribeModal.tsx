"use client"

import React, { useState } from 'react';
import Modal from './Modal';
import { Price, ProductWithPrice } from '@/types';
import Button from './Button';
import { postData } from '@/helpers/getUrl';
import { useUser } from '@/hooks/useUser';
import { error } from 'console';
import toast from 'react-hot-toast';
import getStripe from '@/libs/stripeClient';
import useSubscribeModal from '@/hooks/useSubscribeModal';

type SubscribeModalProps = {
    products: ProductWithPrice[]
};


const formatPrice =(price:Price)=>{
const priceString = Intl.NumberFormat('en-US',{
    style:'currency',
    currency: price.currency,
    maximumFractionDigits:0
}).format((price?.unit_amount || 0)/100)
return priceString
}

export const SubscribeModal:React.FC<SubscribeModalProps> = ({products}) => {

    const modal = useSubscribeModal()
    const [isLoadingPrice, setIsLoadingPrice] = useState<string>();
    const {user, isLoading, subscription} = useUser();


    const handleSubscription =async (price:Price)=>{
 setIsLoadingPrice(price.id); 
 if(!user){
setIsLoadingPrice(undefined);
return toast.error('Must be logged in');
 } 
 if(subscription){
    setIsLoadingPrice(undefined);
    return toast.error('Already subscribed');
     } 
        try {
            const { sessionId } = await postData({
            url:'api/create-checkout-session',
            data:{ price }
        });
        
        const stripe = await getStripe();
        stripe?.redirectToCheckout({sessionId});

        } catch (error) {
        
            return toast.error((error as Error)?.message)
        }finally{
            setIsLoadingPrice(undefined)
        }
    }

    const onChange=(open:boolean)=>{
if(!open){
modal.onClose()
}
    }

let content =(
    <div className='text-lg text-center'>
        No Products available
    </div>);

if (products.length) {
    content = (
      <div>
        {products.map((product) => {
          if (!product.prices?.length) {
            return (
              <div key={product.id}>
               
              </div>
            );
          }

          return product.prices.map((price) => (
            <Button 
              key={price.id} 
              className="mb-4"
              onClick={()=>handleSubscription(price)}
              disabled={isLoading || price.id === isLoadingPrice}
            >
              {`Subscribe for ${formatPrice(price)} a ${price.interval}`}
            </Button>
          ))
        })}
      </div>
    )
  }
  if (subscription) {
    content = (
      <div className="text-center">
        Already subscribed.
      </div>
    )
  }

   
    return (
        <Modal 
        title='Only for premium Users'
        description='Listen music with Tune Truve Premium'
        isOpen={modal.isOpen}
        onChange={onChange}>
            {content}
        </Modal>
    )
}
export default SubscribeModal;