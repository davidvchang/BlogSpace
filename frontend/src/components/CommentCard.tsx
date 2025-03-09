import React from 'react'
import ProfilePostCard from './ProfilePostCard'
import InformationBlogCard from './InformationBlogCard'
import LikeComments from './LikeComments'

const CommentCard:React.FC = () => {
  return (
    <div className='flex flex-col border border-slate-200 rounded-lg p-5'>
        <div className='flex justify-between'>
            <ProfilePostCard blog_view={true}/>
            <InformationBlogCard name='date'/>
        </div>

        <div className='flex flex-col gap-5 pl-12'>
            <p>This is a fantastic article! I've been following the WebAssembly developments closely and I'm excited to see where it goes in the next few years.</p>

            <div className='flex gap-10'>
                <LikeComments/>
            </div>

        </div>
      
    </div>
  )
}

export default CommentCard
