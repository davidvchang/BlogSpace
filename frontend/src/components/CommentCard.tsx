import React from 'react'
import ProfilePostCard from './ProfilePostCard'
import InformationBlogCard from './InformationBlogCard'
import LikeComments from './LikeComments'

interface PropsComments {
  content: string,
  authorComment: string,
  date: string,
  image: string
}

const CommentCard:React.FC<PropsComments> = ({ content, authorComment, date, image}) => {
  return (
    <div className='flex flex-col border border-slate-200 rounded-lg p-5'>
        <div className='flex justify-between'>
            <ProfilePostCard author={authorComment} image_profile={image} blog_view={true}/>
            <InformationBlogCard name='date' date={date}/>
        </div>

        <div className='flex flex-col gap-5 pl-12'>
            <p>{content}</p>

            <div className='flex gap-10'>
                <LikeComments/>
            </div>

        </div>
      
    </div>
  )
}

export default CommentCard
