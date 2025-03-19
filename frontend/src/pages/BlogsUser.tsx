import React from 'react'
import InputSearch from '../components/InputSearch'
import PostCard from '../components/PostCard'

const BlogsUser:React.FC = () => {
  return (
    <section className='flex flex-col w-full py-10 px-5 border-b border-b-slate-200'>
        <div className='flex justify-between items-center pb-10'>
            <div className='flex flex-col gap-2'>
                <span className='text-3xl font-bold'>My Blogs</span>
                <span className='text-slate-500'>view all your blogs or add new blogs</span>
            </div>

            <div className='flex gap-10'>
                <InputSearch/>

                <a href="/user/add-blog" className='w-fit h-fit px-8 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 hover:transition duration-300 cursor-pointer'>Add Blog</a>
            </div>

        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5' >
            <PostCard/>
        
        </div>
    </section>
  )
}

export default BlogsUser
