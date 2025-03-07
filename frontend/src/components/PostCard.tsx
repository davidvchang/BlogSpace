import React from 'react'
import Category from './Category'
import ProfilePostCard from './ProfilePostCard'
import InformationBlogCard from './InformationBlogCard'

const PostCard:React.FC = () => {
  return (
    <div className='flex flex-col w-[28rem] border border-slate-200 rounded-lg overflow-hidden'>
        {/* IMAGE */}
        <div className='w-full min-h-48 bg-red-200'>

        </div>

        <div className='flex flex-col p-5 gap-3'>
            <Category text='Development'/>
            
            <div className='flex flex-col gap-1'>
                <span className='text-xl font-semibold'>Getting Started with Next.js 14</span>
                <p className='text-sm text-slate-500'>Why Tailwind CSS is changing the way we style web applications</p>
            </div>

            <ProfilePostCard/>

            <div className='flex justify-between pt-2'>
                <InformationBlogCard name='date'/>
                <InformationBlogCard name='comments'/>
            </div>

        </div>
      
    </div>
  )
}

export default PostCard
