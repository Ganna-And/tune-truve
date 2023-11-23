"use client"
import Box from "@/components/Box";
import {BounceLoader} from'react-spinners';



const Loading= () => {
    
    return <Box className="h-full w-full flex items-center justify-center bg-neutral-800">
        <BounceLoader color="#ED7117" size={38} />
        </Box>
}
export default Loading;