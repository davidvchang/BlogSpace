import React from 'react'
import { Trash2 } from 'lucide-react';

interface PropsSectionAdd {
    onClickDeleteSection: () => void,
    number: number
}

const SectionAddBlog:React.FC<PropsSectionAdd> = ({onClickDeleteSection, number}) => {
  return (
    <div className='flex flex-col p-5 bg-white shadow-sm rounded-md gap-5'>
        <div className='flex items-center justify-between'>
            <span className='text-lg font-medium'>Section {number}</span>
            <button onClick={onClickDeleteSection}><Trash2 className='w-5 h-5 text-red-500 hover:text-red-600 hover:transition duration-300 cursor-pointer'/></button>
        </div>

        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="title" className='text-sm'>Title</label>
                <input type="text" name="title" id="title" placeholder='Enter section title' className='px-5 py-2 bg-white border border-slate-200 rounded-md' required/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="content" className='text-sm'>Section Content</label>
                <textarea name="content" id="content" placeholder='Enter section content' className='px-5 py-2 bg-white border border-slate-200 rounded-md min-h-28' required/>
            </div>
        </div>
    </div>
  )
}

export default SectionAddBlog
