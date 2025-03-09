import React from 'react'
import { ThumbsUp } from 'lucide-react';


const LikeComments:React.FC = () => {
  return (
    <button className='flex items-center gap-1'>
        <button className='hover:text-blue-500 hover:transition duration-300 cursor-pointer'><ThumbsUp className='w-4 h-4'/></button>
        <span className='text-sm font-medium'>12</span>
    </button>
  )
}

export default LikeComments
