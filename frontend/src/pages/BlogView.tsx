import React, { useEffect, useState } from 'react'
import Category from '../components/Category'
import ProfilePostCard from '../components/ProfilePostCard'
import InformationBlogCard from '../components/InformationBlogCard'
import SectionBlog from '../components/SectionBlog'

import { ArrowLeft } from 'lucide-react';
import CommentCard from '../components/CommentCard'
import axios from 'axios'
import { useParams } from 'react-router-dom'

interface DataBlogs {
    id_blog: number,
    title: string,
    description: string,
    image_url: string,
    category: string,
    sections: SectionsBlog[],
    date: string,
}

interface SectionsBlog {
    title: string;
    paragraphs: string[];
}

const BlogView:React.FC = () => {

    const URL_BLOGS:string = import.meta.env.VITE_URL_BLOGS 

    const {id_blog} = useParams()

    const [dataBlogs, setDataBlogs] = useState<DataBlogs[]>([])

    const getBlogs = async () => {
        const res = await axios.get(URL_BLOGS + id_blog)
        setDataBlogs(res.data)
    }

    useEffect(() => {
      getBlogs()
    }, [])
  return (
    <section className='flex flex-col w-full items-center py-10 px-5 border-b border-b-slate-200'>
        <div className='flex flex-col w-[70%]'>
            {dataBlogs.map((blog) => (
                <div className='flex flex-col gap-4' key={blog.id_blog}>
                    <Category text={blog.category} blue_color={true}/>

                    <div className='flex flex-col gap-3'>
                        <span className='text-4xl font-bold'>{blog.title}</span>
                        <span className='text-slate-500 text-2xl'>{blog.description}</span>
                    </div>

                    <div className='flex justify-between items-center pt-5'>
                        <ProfilePostCard blog_view={true}/>

                        <div className='flex gap-5'>
                            <InformationBlogCard name={blog.date.split("T")[0]}/> 
                            <InformationBlogCard name='comments'/> 
                        </div>

                    </div>
                    <div className='flex flex-col gap-20 py-10 border-b border-b-slate-200'>
                        {/* IMAGE */}
                        <div className='w-full h-[28rem] rounded-lg overflow-hidden'>
                            <img src={blog.image_url} alt="Cover Image" className='w-full h-full object-cover'/>
                        </div>

                        <div className='flex flex-col gap-20'>
                            {blog.sections.map((section, index) => {
                                const paragraphs = Array.isArray(section.paragraphs) ? section.paragraphs : [section.paragraphs];
                                
                                return (
                                    <SectionBlog key={index} title={section.title} paragraphs={paragraphs}/>

                                )
                            })}
                        </div>
                    </div>

                </div>
            ))}

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
