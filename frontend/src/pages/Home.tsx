import React from 'react'
import Category from '../components/Category'
import PostCard from '../components/PostCard';
import ProfilePostCard from '../components/ProfilePostCard';
import InformationBlogCard from '../components/InformationBlogCard';

const Home:React.FC = () => {
  return (
    <section className='flex flex-col w-full py-10 px-5 border-b border-b-slate-200'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className='text-6xl font-bold'>Welcome to BlogSpace</h1>
        <span className='text-xl text-slate-500'>A place to share your thoughts, ideas, and stories with the world.</span>

        <div className='flex gap-5 pt-5'>
          <a href="/blogs" className='w-fit h-fit bg-blue-500 text-white font-medium py-3 px-6 rounded-md hover:brightness-110 hover:transition duration-300'>Browse Blogs</a>

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
              <Category text='Featured' blue_color={true}/>
              <Category text='Technology'/>
            </div>

            <div className='flex flex-col gap-2'>
              <span className='text-3xl font-semibold'>The Future of Web Development in 2025</span>
              <span className='text-sm text-slate-500'>Exploring the upcoming trends and technologies that will shape the web development landscape.</span>
              <span className='pt-2 text-slate-500'>As we approach 2025, the web development field continues to evolve at a rapid pace. From AI-powered development tools to new frameworks and methodologies, this post explores what's on the horizon.</span>
            </div>

            <div className='flex items-center justify-between pt-5'>
              <ProfilePostCard/>

              <div className='flex gap-5 items-center text-slate-500'>
                <InformationBlogCard name='date'/>
                <InformationBlogCard name='comments'/>
              </div>
            </div>

            <div className='flex justify-center pt-2'>
              <a href="" className='w-fit h-fit bg-blue-500 text-white text-sm font-medium py-[10px] px-5 rounded-md hover:brightness-110 hover:transition duration-300'>Read More</a>
            </div>
          </div>

        </div>

      </div>

      <div className='flex flex-col pt-20 gap-6'>
        <span className='text-3xl font-bold'>Recent Posts</span>

        <div className='flex flex-wrap justify-between'>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </div>
      </div>
    </section>
  )
}

export default Home
