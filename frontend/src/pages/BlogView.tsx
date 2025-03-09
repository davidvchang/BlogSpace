import React from 'react'
import Category from '../components/Category'
import ProfilePostCard from '../components/ProfilePostCard'
import InformationBlogCard from '../components/InformationBlogCard'
import SectionBlog from '../components/SectionBlog'

import { ArrowLeft } from 'lucide-react';
import CommentCard from '../components/CommentCard'

const BlogView:React.FC = () => {
  return (
    <section className='flex flex-col w-full items-center py-10 px-5 border-b border-b-slate-200'>
        <div className='flex flex-col w-[70%]'>
            <div className='flex flex-col gap-4'>
                <Category text="Technology" blue_color={true}/>

                <div className='flex flex-col gap-3'>
                    <span className='text-4xl font-bold'>The Future of Web Development in 2025</span>
                    <span className='text-slate-500 text-2xl'>Exploring the upcoming trends and technologies that will shape the web development landscape.</span>
                </div>

                <div className='flex justify-between items-center pt-5'>
                    <ProfilePostCard blog_view={true}/>

                    <div className='flex gap-5'>
                        <InformationBlogCard name='date'/> 
                        <InformationBlogCard name='comments'/> 
                    </div>

                </div>
                <div className='flex flex-col gap-20 py-10 border-b border-b-slate-200'>
                    {/* IMAGE */}
                    <div className='w-full h-[28rem] bg-red-200 rounded-lg'>

                    </div>

                    <div className='flex flex-col gap-20'>
                        <SectionBlog/>
                        <SectionBlog/>
                    </div>
                </div>

            </div>

            <div className='flex justify-end items-center py-3 border-b border-b-slate-200'>
                <div className='flex gap-1 items-center w-fit h-fit px-3 py-2 rounded-md hover:bg-slate-100 hover:transition duration-300'>
                    <ArrowLeft className='w-4 h-4' strokeWidth={2.2}/>
                    <a href="/blogs" className='text-sm font-medium w-fit h-fit'>Back to Blogs</a>
                </div>
            </div>

            {/* COMMENTS */}
            <div className='flex flex-col py-10 gap-5'>
                <span className='text-2xl font-semibold'>Comments (2)</span>

                <div className='flex flex-col p-5 border border-slate-200 rounded-lg gap-3'>
                    <span className='text-lg font-medium'>Leave a comment</span>
                    <textarea name="comment" id="comment" className='border border-slate-200 rounded-md min-h-28 p-3 text-sm' placeholder='Write your comment...'></textarea>
                    
                    <div className='flex w-full justify-end'>
                        <button className='w-fit h-fit bg-blue-500 text-white text-sm font-medium py-[10px] px-5 rounded-md hover:brightness-110 hover:transition duration-300 hover:cursor-pointer'>Post Comment</button>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <CommentCard/>
                    <CommentCard/>
                    <CommentCard/>
                    <CommentCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogView
