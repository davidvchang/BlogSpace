import React, { useState } from 'react'
import { Image, CirclePlus } from 'lucide-react';
import SectionAddBlog from '../components/SectionAddBlog';
import axios from 'axios';
import Swal from 'sweetalert2';

interface PropsDataBlog {
    image_url: string,
    title: string,
    description: string,
    category: string,
    date: string,
    sections: PropsSections[]
}

interface PropsSections {
    title: string,
    paragraphs: string[]
}


const AddBlog:React.FC = () => {

    const URL_BLOGS: string = import.meta.env.VITE_URL_BLOGS

    const initialValues: PropsDataBlog = {
        image_url: "",
        title: "",
        description: "",
        category: "",
        date: "",
        sections: []
    }

    const [sections, setSections] = useState<PropsSections[]>([])
    const [blog, setBlog] = useState<PropsDataBlog>(initialValues)


    const handleAddSection = (e: React.FormEvent) => {
        e.preventDefault()
        setSections([...sections, { title: "", paragraphs: []}])
    }

    const handleDeleteSection = (id: number) => {
        setSections(sections.filter((_, i) => i !== id))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    };

    const handleChangeSectionTitle = (index: number, value: string) => {
        const updatedSections = [...sections];
        updatedSections[index].title = value;
        setSections(updatedSections);
    };

    const handleChangeSectionContent = (index: number, value: []) => {
        const updatedSections = [...sections];
        updatedSections[index].paragraphs = value;
        setSections(updatedSections);
    };

    const handleSaveBlog = async (e: React.FormEvent) => {
        e.preventDefault()

        const response = await axios.post(URL_BLOGS, { ...blog, sections, date: blog.date || new Date().toISOString().split('T')[0] })
        if(response.status === 201) {
                    Swal.fire({
                        title: "Saved",
                        text: "Blog has been added correctly",
                        icon: 'success',
                        confirmButtonText: "OK"
                    }).then(() => {
                        setBlog(initialValues)
                        setSections([]);
                    })
                }
    }

  return (
    <section className='flex flex-col w-full items-center bg-slate-50'>
        <form className='w-[50%] p-5 flex flex-col gap-8' onSubmit={handleSaveBlog}>
            <span className='text-3xl font-semibold'>Create New Blog</span>

            <div className='flex flex-col gap-8'>
                <div className='bg-gray-200 w-full h-64 rounded-md overflow-hidden flex justify-center items-center'>
                    {blog.image_url ? (
                        <img src={blog.image_url} alt="Image Blog" className='w-full h-full object-cover'/>

                    ) : (
                        <Image className='w-12 h-12 text-slate-400'/>
                    )} 
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="image_url" className='text-sm'>Cover Image URL</label>
                    <input type="text" name="image_url" id="image_url" value={blog.image_url} onChange={handleChange} placeholder='https://example.com/image.jpg' className='px-5 py-2 border bg-white border-slate-200 rounded-md' required/>
                </div>
                
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="category" className='text-sm'>Category</label>
                        <input type="text" name="category" id="category" value={blog.category} onChange={handleChange} placeholder='Enter blog category' className='px-5 py-2 bg-white border border-slate-200 rounded-md' required/>
                    </div>

                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="date" className='text-sm'>Date</label>
                        <input type="date" name="date" id="date" value={blog.date} onChange={handleChange} className='px-5 py-2 bg-white border border-slate-200 rounded-md' required/>
                    </div>

                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="title" className='text-sm'>Title</label>
                    <input type="text" name="title" id="title" value={blog.title} onChange={handleChange} placeholder='Enter blog title' className='px-5 py-2 bg-white border border-slate-200 rounded-md' required/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="description" className='text-sm'>Description</label>
                    <textarea name="description" id="description" value={blog.description} onChange={handleChange} placeholder='Enter blog description' className='px-5 py-2 bg-white border border-slate-200 rounded-md min-h-28' required/>
                </div>

                <div className='flex w-full items-center justify-between'>
                    <span className='font-semibold text-xl'>Sections</span>
                    <button className='flex items-center w-fit h-fit px-5 py-3 bg-blue-500 text-white rounded-md gap-2 text-sm font-medium hover:bg-blue-600 hover:transition duration-300 cursor-pointer' onClick={handleAddSection}>
                        <CirclePlus className='w-4 h-4'/>
                        <span>Add Section</span>
                    </button>
                </div>

                <div className='flex flex-col gap-5'>
                    {sections.map((section, index) => (
                        <SectionAddBlog key={index} onClickDeleteSection={() => handleDeleteSection(index)} number={index + 1} value_title={section.title} value_content={section.paragraphs} change_title={(e) => handleChangeSectionTitle(index, e.target.value)} change_content={(e) => handleChangeSectionContent(index, e.target.value)}/>
                    ))}
                </div>
            </div>
            <button type="submit" className='w-full h-fit px-5 py-3 bg-blue-500 text-white rounded-md text-sm font-semibold hover:bg-blue-600 hover:transition dura cursor-pointer'>Create Blog</button>
        </form>
      
    </section>
  )
}

export default AddBlog
