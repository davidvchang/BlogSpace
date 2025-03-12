import React, { useEffect, useState } from 'react'
import InputSearch from '../components/InputSearch'
import PostCard from '../components/PostCard'
import CategoryBlogs from '../components/CategoryBlogs'
import axios from 'axios'

interface DataBlogs {
    id_blog: number,
    title: string,
    description: string,
    image_url: string,
    category: string,
    date: string,
}

const Blogs:React.FC = () => {

    const URL_BLOGS:string = import.meta.env.VITE_URL_BLOGS 

    const [dataBlogs, setDataBlogs] = useState<DataBlogs[]>([])

    const getBlogs = async () => {
        const res = await axios.get(URL_BLOGS)
        setDataBlogs(res.data)
        console.log(res.data)
    }

    useEffect(() => {
      getBlogs()
    }, [])
    

  return (
    <section className='flex flex-col w-full py-10 px-5 border-b border-b-slate-200'>
        <div className='flex justify-between items-center pb-10'>
            <div className='flex flex-col gap-2'>
                <span className='text-3xl font-bold'>Blogs</span>
                <span className='text-slate-500'>Discover interesting articles and stories</span>
            </div>

            <InputSearch/>
        </div>

        <div className='flex flex-col gap-3'>
            <div className='flex w-fit rounded-md overflow-hidden bg-slate-100 p-1'>
                <CategoryBlogs text='All' selected={true}/>
                <CategoryBlogs text='Technology'/>
                <CategoryBlogs text='Development'/>
                <CategoryBlogs text='Front-End'/>
                <CategoryBlogs text='Back-End'/>

            </div>
            {dataBlogs.map((blog) => (
                <div className='flex flex-wrap justify-between gap-y-5' key={blog.id_blog}>
                    <PostCard link={`/blog/${blog.id_blog}`} title={blog.title} description={blog.description} category={blog.category} image={blog.image_url} date={blog.date.split("T")[0]} key={blog.id_blog}/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Blogs
