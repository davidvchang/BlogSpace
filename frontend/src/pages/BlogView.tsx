import React, { useEffect, useState } from 'react'
import Category from '../components/Category'
import ProfilePostCard from '../components/ProfilePostCard'
import InformationBlogCard from '../components/InformationBlogCard'
import SectionBlog from '../components/SectionBlog'

import { ArrowLeft } from 'lucide-react';
import CommentCard from '../components/CommentCard'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

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

interface PropsInfoUser {
    id_user: number,
    email: string,
    name: string,
    last_name: string,
    profile_image_url: string
}

interface PropsComment {
    id_comment: number,
    comment: string,
    user_id: number,
    blog_id: number,
    date: string
}

interface DataComments {
    id_comment: number | null,
    comment: string,
    blog_id: number,
    user_id: number
}

const BlogView:React.FC = () => {

    const URL_BLOGS:string = import.meta.env.VITE_URL_BLOGS
    const URL_USERS = import.meta.env.VITE_URL_USERS
    const URL_COMMENTS = import.meta.env.VITE_URL_COMMENTS

    const {id_blog} = useParams()

    const token = localStorage.getItem('token');
    
    const initialValue: PropsComment = {
        id_comment: null,
        comment: "",
        blog_id: Number(id_blog),
        user_id: 0,
        date: ""
    }

    const [dataBlogs, setDataBlogs] = useState<DataBlogs[]>([])
    const [dataUsers, setDataUsers] = useState<PropsInfoUser[]>([])
    const [dataComments, setDataComments] = useState<PropsComment[]>([])
    const [comments, setComments] = useState<DataComments>(initialValue)
    const [numberComments, setNumberComments] = useState<number>(0)


    const getBlogs = async () => {
        const res = await axios.get(URL_BLOGS + id_blog)
        setDataBlogs(res.data)
    }

    const getNameUserOfBlog = async () => {
        const res = await axios.get(URL_USERS)
        setDataUsers(res.data)
    }

    const getComments = async () => {
        const res = await axios.get(URL_COMMENTS + id_blog)
        setDataComments(res.data)

        setNumberComments(res.data.length)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComments({ ...comments, [e.target.name]: e.target.value });
    };

    const handdlePostComment = async () => {
        if(!token) {
            Swal.fire({
                title: "Error",
                text: "You need to login to comment",
                icon: 'error',
                confirmButtonText: "OK"
            }).then(() => {
                setComments(initialValue)
            })
        }
        else {
            const res = await axios.post(URL_COMMENTS + id_blog, comments,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
    
            if(res.status === 201) {
                Swal.fire({
                    title: "Commented",
                    text: "You have commented the post",
                    icon: 'success',
                    confirmButtonText: "OK"
                }).then(() => {
                    setComments(initialValue)
                    getComments()
                })
            }
        }
    }

    useEffect(() => {
      getBlogs()
      getNameUserOfBlog()
      getComments()
    if (dataUsers?.id_user) {
        setComments(prev => ({ ...prev, user_id: dataUsers.id_user }));
    }
    }, [])
  return (
    <section className='flex flex-col w-full items-center py-10 px-5 border-b border-b-slate-200'>
        <div className='flex flex-col w-[70%]'>
            {dataBlogs.map((blog) => {
                const authorBlog = dataUsers.find(user => user.id_user === blog.user_id);
                return (
                    <div className='flex flex-col gap-4' key={blog.id_blog}>
                        <Category text={blog.category} blue_color={true}/>

                        <div className='flex flex-col gap-3'>
                            <span className='text-4xl font-bold'>{blog.title}</span>
                            <span className='text-slate-500 text-2xl'>{blog.description}</span>
                        </div>

                        <div className='flex justify-between items-center pt-5'>
                            <ProfilePostCard blog_view={true} image_profile={authorBlog?.profile_image_url} author={authorBlog && `${authorBlog.name} ${authorBlog.last_name}`}/>

                            <div className='flex gap-5'>
                                <InformationBlogCard name='date' date={blog.date.split("T")[0]}/> 
                                <InformationBlogCard name='comments' numberComments={numberComments}/> 
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
                )
            })}

            <div className='flex justify-end items-center py-3 border-b border-b-slate-200'>
                <div className='flex gap-1 items-center w-fit h-fit px-3 py-2 rounded-md hover:bg-slate-100 hover:transition duration-300'>
                    <ArrowLeft className='w-4 h-4' strokeWidth={2.2}/>
                    <a href="/blogs" className='text-sm font-medium w-fit h-fit'>Back to Blogs</a>
                </div>
            </div>

            {/* COMMENTS */}
            <div className='flex flex-col py-10 gap-5'>
                <span className='text-2xl font-semibold'>Comments ({numberComments})</span>

                <div className='flex flex-col p-5 border border-slate-200 rounded-lg gap-3'>
                    <span className='text-lg font-medium'>Leave a comment</span>
                    <textarea name="comment" id="comment" value={comments.comment} onChange={handleChange} className='border border-slate-200 rounded-md min-h-28 p-3 text-sm' placeholder='Write your comment...'></textarea>
                    
                    <div className='flex w-full justify-end'>
                        <button className='w-fit h-fit bg-blue-500 text-white text-sm font-medium py-[10px] px-5 rounded-md hover:brightness-110 hover:transition duration-300 hover:cursor-pointer' onClick={handdlePostComment}>Post Comment</button>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    {dataComments.map((comment) => {
                        const author = dataUsers.find(user => user.id_user === comment.user_id)
                        return (
                            <CommentCard key={comment.id_comment} content={comment.comment} image={author?.profile_image_url} authorComment={author && `${author.name} ${author.last_name}`} date={comment.date.split("T")[0]}/>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogView
