import React from 'react'
import InputSearch from '../components/InputSearch'

const Blogs:React.FC = () => {
  return (
    <section className='flex flex-col w-full py-10 px-5 border-b border-b-slate-200'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-2'>
                <span className='text-3xl font-bold'>Blogs</span>
                <span className='text-slate-500'>Discover interesting articles and stories</span>
            </div>

            <InputSearch/>
        </div>
    </section>
  )
}

export default Blogs
