import React from 'react'
import { ThumbsUp } from 'lucide-react';


const LikeComments:React.FC = () => {
  return (
    <div className='flex items-center gap-1'>
        <button className='hover:text-blue-500 hover:transition duration-300 cursor-pointer'><ThumbsUp className='w-4 h-4'/></button>
        <span className='text-sm font-medium'>12</span>
    </div>
  )
}

export default LikeComments
