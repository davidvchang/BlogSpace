import React, { useEffect, useState } from 'react'
import InputSearch from '../components/InputSearch'
import PostCard from '../components/PostCard'
import axios from 'axios'

interface DataBlogs {
    id_blog: number,
    user_id: number,
    title: string,
    description: string,
    image_url: string,
    category: string,
    date: string,
}

interface PropsInfoUser {
    id_user: number,
    email: string,
    name: string,
    last_name: string
}

const BlogsUser:React.FC = () => {

    const URL_USERS:string = import.meta.env.VITE_URL_USERS

    const token = localStorage.getItem('token');

    const [dataBlogs, setDataBlogs] = useState<DataBlogs[]>([])
    const [dataUsers, setDataUsers] = useState<PropsInfoUser[]>([])

    const getBlogs = async () => {
        const res = await axios.get(URL_USERS + 'my-blogs', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setDataBlogs(res.data);
    }

    const getNameUserOfBlog = async () => {
        const res = await axios.get(URL_USERS)
        setDataUsers(res.data)
    }

     useEffect(() => {
        if(token) {
            getBlogs()
            getNameUserOfBlog()
        }
    }, [])
  return (
    <section className='flex flex-col w-full py-10 px-5 border-b border-b-slate-200'>
        <div className='flex justify-between items-center pb-10'>
            <div className='flex flex-col gap-2'>
                <span className='text-3xl font-bold'>My Blogs</span>
                <span className='text-slate-500'>view all your blogs or add new blogs</span>
            </div>

            <div className='flex gap-10'>
                <InputSearch/>

                <a href="/user/add-blog" className='w-fit h-fit px-8 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 hover:transition duration-300 cursor-pointer'>Add Blog</a>
            </div>

        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5' >
            {dataBlogs.map((blog) => {
                 const authorBlog = dataUsers.find(user => user.id_user === blog.user_id);
                return (
                    <PostCard key={blog.id_blog} link={`/blog/${blog.id_blog}`} title={blog.title} description={blog.description} category={blog.category} image={blog.image_url} date={blog.date.split("T")[0]} author={authorBlog && `${authorBlog.name} ${authorBlog.last_name}`}/>
                )
            })}
        
        </div>
    </section>
  )
}

export default BlogsUser
