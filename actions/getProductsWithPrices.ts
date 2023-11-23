import { metadata } from '@/app/layout.jsx';
import {ProductWithPrice}  from '../types.js'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers.js';





export default async function getProductsWithPrices():Promise<ProductWithPrice[]> {
  const supabase = createServerComponentClient({
    cookies:cookies
  })
  
 const {data, error} = await supabase.
 from('products').select('*,prices(*)').eq('active', true).eq('prices.active', true).order('metadata->index').order('unit_amount',{foreignTable:'prices'});

if(error){
 console.log(error)
}
  return (data as any ) || []
}
