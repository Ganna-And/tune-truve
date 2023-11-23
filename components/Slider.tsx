import React, { useState } from 'react';
import * as RadixSlider from'@radix-ui/react-slider';


interface SliderProps {
   value:number, 
   onChange:(value:number)=> void 
};

const Slider:React.FC<SliderProps> = ({
    value=1,
    onChange
}) => {

    const handleChange = (newValue:number[])=>{
      onChange?.(newValue[0]);
    }
    
    return (
       <RadixSlider.Root
       defaultValue={[1]}
       value={[value]}
       max={1}
       step={0.1}
       onValueChange={handleChange}
       aria-label='volume'
       className='w-[4rem] h-[30px] touch-none relative select-none flex items-center '
       >
        <RadixSlider.Track className='h-[3px] 
        relative
      bg-neutral-200
         grow
         flex-1'>
             <RadixSlider.Range className='absolute rounded-full bg-white h-full'/>
        </RadixSlider.Track>

       </RadixSlider.Root>
    )
}
export default Slider;