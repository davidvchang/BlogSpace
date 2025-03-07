import React from 'react'
import { Search } from 'lucide-react';

const InputSearch:React.FC = () => {
  return (
    <div className='flex w-fit h-fit relative'>
        <input type="search" name="search" id="search" className='w-64 px-8 py-2 border border-slate-300 rounded-md font-light'/>
        <Search className='w-4 h-4 absolute top-3 left-2 text-slate-500'/>
    </div>
  )
}

export default InputSearch
