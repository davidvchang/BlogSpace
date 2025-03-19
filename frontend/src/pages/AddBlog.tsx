import React from 'react'
import { Image, CirclePlus, Trash2 } from 'lucide-react';
import SectionAddBlog from '../components/SectionAddBlog';

const AddBlog:React.FC = () => {
  return (
    <section className='flex flex-col w-full items-center bg-slate-50'>
        <form className='w-[50%] p-5 flex flex-col gap-8'>
            <span className='text-3xl font-semibold'>Create New Blog</span>

            <div className='flex flex-col gap-8'>
                <div className='bg-gray-200 w-full h-64 rounded-md overflow-hidden'>
                    <img src="" alt="Image Blog" className='w-full h-full object-contain'/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="image_url" className='text-sm'>Cover Image URL</label>
                    <input type="text" name="image_url" id="image_url" placeholder='https://example.com/image.jpg' className='px-5 py-2 border bg-white border-slate-200 rounded-md'/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="title" className='text-sm'>Title</label>
                    <input type="text" name="title" id="title" placeholder='Enter blog title' className='px-5 py-2 bg-white border border-slate-200 rounded-md'/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="description" className='text-sm'>Description</label>
                    <textarea name="description" id="description" placeholder='Enter blog description' className='px-5 py-2 bg-white border border-slate-200 rounded-md min-h-28'/>
                </div>

                <div className='flex w-full items-center justify-between'>
                    <span className='font-semibold text-xl'>Sections</span>
                    <button className='flex items-center w-fit h-fit px-5 py-3 bg-blue-500 text-white rounded-md gap-2 text-sm font-medium hover:bg-blue-600 hover:transition duration-300 cursor-pointer'>
                        <CirclePlus className='w-4 h-4'/>
                        <span>Add Section</span>
                    </button>
                </div>

                <div className='flex flex-col gap-5'>
                    <SectionAddBlog/>
                    <SectionAddBlog/>
                    <SectionAddBlog/>
                </div>
            </div>
            <button type="submit" className='w-full h-fit px-5 py-3 bg-blue-500 text-white rounded-md text-sm font-semibold'>Create Blog</button>
        </form>
      
    </section>
  )
}

export default AddBlog
