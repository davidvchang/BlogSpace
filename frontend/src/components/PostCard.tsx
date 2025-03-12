import React from 'react'
import Category from './Category'
import ProfilePostCard from './ProfilePostCard'
import InformationBlogCard from './InformationBlogCard'

interface PropsPostCard {
  image: string,
  category: string,
  link: string,
  title: string,
  description: string,
  date: string
}

const PostCard:React.FC<PropsPostCard> = ({image, category, link, title, description, date}) => {
  return (
    <div className='flex flex-col w-[28rem] border border-slate-200 rounded-lg overflow-hidden'>
        {/* IMAGE */}
        <a href={link} className='w-full min-h-48'>
           <img src={image} alt="" className='w-full h-full object-cover'/>
        </a>

        <div className='flex flex-col p-5 gap-3'>
            <Category text={category}/>
            
            <div className='flex flex-col gap-1'>
                <a href={link} className='text-xl font-semibold hover:underline hover:transition duration-300'>{title}</a>
                <p className='text-sm text-slate-500'>{description}</p>
            </div>

            <ProfilePostCard/>

            <div className='flex justify-between pt-2'>
                <InformationBlogCard date={date} name='date'/>
                <InformationBlogCard name='comments'/>
            </div>

        </div>
      
    </div>
  )
}

export default PostCard
