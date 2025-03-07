import React from 'react'
import Category from '../components/Category'
import { CalendarDays, MessageSquare } from 'lucide-react';

const Home:React.FC = () => {
  return (
    <section className='flex flex-col w-full py-10 px-5'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className='text-6xl font-bold'>Welcome to BlogSpace</h1>
        <span className='text-xl text-slate-500'>A place to share your thoughts, ideas, and stories with the world.</span>

        <div className='flex gap-5 pt-5'>
          <a href="/blogs" className='w-fit h-fit bg-blue-500 text-white font-medium py-3 px-6 rounded-md hover:brightness-110 hover:transition duration-300'>Browse Blogs</a>
          <a href="/login" className='w-fit h-fit border border-slate-200 font-medium py-3 px-6 rounded-md hover:bg-slate-200 hover:transition duration-300'>Browse Blogs</a>

        </div>
      </div>

      <div className='flex flex-col pt-10 gap-6'>
        <span className='text-3xl font-bold'>Featured Post</span>

        <div className='flex w-full h-96 rounded-md border border-slate-200'>
          {/* IMAGE */}
          <div className='w-[50%] bg-red-200'>

          </div>

          <div className='w-[50%] flex flex-col px-10 py-6 gap-3'>
            <div className='flex gap-3 items-center'>
              <Category text='Featured'/>
              <Category text='Technology'/>
            </div>

            <div className='flex flex-col gap-2'>
              <span className='text-3xl font-semibold'>The Future of Web Development in 2025</span>
              <span className='text-sm text-slate-500'>Exploring the upcoming trends and technologies that will shape the web development landscape.</span>
              <span className='pt-2 text-slate-500'>As we approach 2025, the web development field continues to evolve at a rapid pace. From AI-powered development tools to new frameworks and methodologies, this post explores what's on the horizon.</span>
            </div>

            <div className='flex items-center justify-between pt-5'>
              <div className='flex gap-3 items-center'>
                {/* IMAGE PROFILE */}
                <div className='min-w-7 min-h-7 bg-red-200 rounded-full'>

                </div>

                <span>Jane Doe</span>
              </div>

              <div className='flex gap-5 items-center text-slate-500'>
                <div className='flex gap-2 items-center'>
                  <CalendarDays className='w-4 h-4'/>
                  <span className='text-sm'>May 20, 2024</span>
                </div>

                <div className='flex gap-2 items-center'>
                  <MessageSquare className='w-4 h-4'/>
                  <span className='text-sm'>24 comments</span>
                </div>
              </div>
            </div>

            <div className='flex justify-center pt-2'>
              <a href="" className='w-fit h-fit bg-blue-500 text-white text-sm font-medium py-[10px] px-5 rounded-md hover:brightness-110 hover:transition duration-300'>Read More</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Home
