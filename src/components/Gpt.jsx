import React from 'react'
import Header from './Header'
import Gptsearch from './Gptsearch'
import Gptresponse from './Gptresponse'

const Gpt = () => {
  return (
    <div className=' pt-[8%] flex flex-col items-center absolute z-2 h-full bg-black   w-full'>
    <div className='w-auto h-auto'>  <Gptsearch/>
    </div>
     <div className='w-[65%] overflow-y-auto scrollbar-hide'>  <Gptresponse/>
    </div>
    </div>
    
  )

}

export default Gpt