import React, { useEffect, useState } from 'react'
import InputSearch from '../components/InputSearch'
import PostCard from '../components/PostCard'
import CategoryBlogs from '../components/CategoryBlogs'
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

const Blogs:React.FC = () => {

    const URL_BLOGS:string = import.meta.env.VITE_URL_BLOGS
    const URL_USERS = import.meta.env.VITE_URL_USERS

    const [dataBlogs, setDataBlogs] = useState<DataBlogs[]>([])
    const [dataUsers, setDataUsers] = useState<PropsInfoUser[]>([])
    const [categories, setCategories] = useState<[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const getBlogs = async () => {
        const res = await axios.get(URL_BLOGS)
        setDataBlogs(res.data)

        const category = res.data.map(blog => blog.category).filter((cat, i, arr) => arr.indexOf(cat) === i);
        setCategories(category);
    }

    const getNameUserOfBlog = async () => {
        const res = await axios.get(URL_USERS)
        setDataUsers(res.data)
    }

    const handleSelectedCategory = (category: string) => {
        setSelectedCategory(prev => (prev === category ? null : category));
    }

    useEffect(() => {
      getBlogs()
      getNameUserOfBlog()
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
                <CategoryBlogs text='All' onClick={() => setSelectedCategory(null)}  selected={selectedCategory === null} />
                {categories.map((c, index) => (
                    <CategoryBlogs key={index} text={c} onClick={() => handleSelectedCategory(c)}  selected={selectedCategory === c} />
                ))}

            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5' >
                {dataBlogs.filter(blog => !selectedCategory || blog.category === selectedCategory)
                .map((blog) => {
                    const authorBlog = dataUsers.find(user => user.id_user === blog.user_id);
                    return (
                        <PostCard key={blog.id_blog} link={`/blog/${blog.id_blog}`} title={blog.title} description={blog.description} category={blog.category} image={blog.image_url} date={blog.date.split("T")[0]} author={authorBlog && `${authorBlog.name} ${authorBlog.last_name}`}/>
                    )
                })}
            
            </div>
        </div>
    </section>
  )
}

export default Blogs
