import React, { ReactNode } from 'react'
import Category from './Category'
import ProfilePostCard from './ProfilePostCard'
import InformationBlogCard from './InformationBlogCard'
import { Trash2, Pencil } from 'lucide-react';

interface PropsPostCard {
  image: string,
  category: string,
  link: string,
  title: string,
  description: string,
  comments: number,
  date: string,
  author: string,
  onClickDelete: () => void,
  updateClick: string,
  isMyBlogsView?: boolean,
  profile_img: string
}

const PostCard:React.FC<PropsPostCard> = ({image, category, link, title, description, comments, date, author, onClickDelete, isMyBlogsView, profile_img, updateClick}) => {
  return (
    <div className='flex flex-col w-[28rem] border border-slate-200 rounded-lg overflow-hidden'>
        {/* IMAGE */}
        <a href={link} className='w-full min-h-48 overflow-hidden'>
           <img src={image} alt="" className='w-full h-full object-cover hover:scale-110 hover:transition duration-300'/>
        </a>

        <div className='flex flex-col p-5 gap-3'>
            <Category text={category}/>
            
            <div className='flex flex-col gap-1'>
                <a href={link} className='text-xl font-semibold hover:underline hover:transition duration-300'>{title}</a>
                <p className='text-sm text-slate-500 line-clamp-2'>{description}</p>
            </div>

            <ProfilePostCard author={author} image_profile={profile_img}/>

            <div className='flex justify-between pt-2'>
                <InformationBlogCard date={date} name='date'/>
                <InformationBlogCard name='comments' numberComments={comments}/>
            </div>

            {isMyBlogsView === true && (
              <div className='w-full flex gap-3 pt-5 justify-between'>
                <a href={updateClick} className='flex w-fit h-fit py-2 px-4 bg-orange-500 text-white items-center gap-1 rounded hover:bg-orange-600 hover:transition duration-300 cursor-pointer'>
                  <Pencil className='w-4 h-4'/>
                  <span className='text-sm'>Edit</span>
                </a>

                <button onClick={onClickDelete} className='flex w-fit h-fit py-2 px-4 bg-red-500 text-white items-center gap-1 rounded hover:bg-red-600 hover:transition duration-300 cursor-pointer'>
                  <Trash2 className='w-4 h-4'/>
                  <span className='text-sm'>Delete</span>
                </button>
              </div>
            )}
        </div>
      
    </div>
  )
}

export default PostCard
