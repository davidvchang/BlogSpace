import React, { useEffect, useState } from 'react'
import Category from '../components/Category'
import PostCard from '../components/PostCard';
import ProfilePostCard from '../components/ProfilePostCard';
import InformationBlogCard from '../components/InformationBlogCard';
import axios from 'axios';

interface DataBlogs {
  id_blog: number,
  title: string,
  description: string,
  image_url: string,
  category: string,
  sections: SectionsBlog[]
  date: string,
}

interface SectionsBlog {
  title: string;
  paragraphs: string[];
}

const Home:React.FC = () => {

  const URL_BLOGS:string = import.meta.env.VITE_URL_BLOGS 

  const [dataBlogs, setDataBlogs] = useState<DataBlogs[]>([])
  const [lastBlogData, setLastBlogData] = useState<DataBlogs[]>([])

  const getLastBlog = async () => {
      const res = await axios.get(URL_BLOGS)
      const lastBlog = res.data.slice(-1)[0];
      setLastBlogData([lastBlog])
  }

  const getRecentsBlogs = async () => {
    const res = await axios.get(URL_BLOGS)
    const recentsBlog = res.data.reverse().slice(-3);
    setDataBlogs(recentsBlog)
  }

  useEffect(() => {
    getLastBlog()
    getRecentsBlogs()
  }, [])

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
        {lastBlogData.map((blog) => (
          <div className='flex w-full h-96 rounded-md border border-slate-200 overflow-hidden' key={blog.id_blog}>
            {/* IMAGE */}
            <div className='w-[50%] overflow-hidden'>
              <img src={blog.image_url} alt="Cover Blog Image" className='w-full h-full object-cover'/>
            </div>

            <div className='w-[50%] flex flex-col px-10 py-6 gap-3'>
              <div className='flex gap-3 items-center'>
                <Category text='Featured' blue_color={true}/>
                <Category text={blog.category}/>
              </div>

              <div className='flex flex-col gap-2'>
                <span className='text-3xl font-semibold'>{blog.title}</span>
                <span className='text-sm text-slate-500'>{blog.description}</span>
                <span className='pt-2 text-slate-500'>As we approach 2025, the web development field continues to evolve at a rapid pace. From AI-powered development tools to new frameworks and methodologies, this post explores what's on the horizon.</span>
              </div>

              <div className='flex items-center justify-between pt-5'>
                <ProfilePostCard/>

                <div className='flex gap-5 items-center text-slate-500'>
                  <InformationBlogCard name='date' date={blog.date.split("T")[0]}/>
                  <InformationBlogCard name='comments'/>
                </div>
              </div>

              <div className='flex justify-center pt-2'>
                <a href={`/blog/${blog.id_blog}`} className='w-fit h-fit bg-blue-500 text-white text-sm font-medium py-[10px] px-5 rounded-md hover:brightness-110 hover:transition duration-300'>Read More</a>
              </div>
            </div>

          </div>
        ))}

      </div>

      <div className='flex flex-col pt-20 gap-6'>
        <span className='text-3xl font-bold'>Recent Posts</span>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between'>
          {dataBlogs.map((b) => (
              <PostCard key={b.id_blog} link={`/blog/${b.id_blog}`} title={b.title} description={b.description} image={b.image_url} category={b.category} date={b.date.split("T")[0]}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
