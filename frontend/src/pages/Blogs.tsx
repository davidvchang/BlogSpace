import React from 'react'
import InputSearch from '../components/InputSearch'
import PostCard from '../components/PostCard'
import CategoryBlogs from '../components/CategoryBlogs'

const Blogs:React.FC = () => {
  return (
    <section className='flex flex-col w-full py-10 px-5 border-b border-b-slate-200'>
        <div className='flex justify-between items-center pb-10'>
            <div className='flex flex-col gap-2'>
                <span className='text-3xl font-bold'>Blogs</span>
                <span className='text-slate-500'>Discover interesting articles and stories</span>
            </div>

            <InputSearch/>
        </div>

        <div className='flex flex-col gap-3'>
            <div className='flex w-fit rounded-md overflow-hidden bg-slate-100 p-1'>
                <CategoryBlogs text='All' selected={true}/>
                <CategoryBlogs text='Technology'/>
                <CategoryBlogs text='Development'/>
                <CategoryBlogs text='Front-End'/>
                <CategoryBlogs text='Back-End'/>

            </div>

            <div className='flex flex-wrap justify-between gap-y-5'>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
        </div>
    </section>
  )
}

export default Blogs
