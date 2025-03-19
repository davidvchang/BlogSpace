import React from 'react'

interface PropsSection {
  title: string,
  paragraphs: string[]
}


const SectionBlog:React.FC<PropsSection> = ({title, paragraphs}) => {

  const safeParagraphs = Array.isArray(paragraphs) ? paragraphs : [];
  
  return (
    <div className='flex flex-col gap-5'>
        <span className='text-3xl font-semibold'>{title}</span>
        <div className='flex flex-col text-slate-600 text-xl gap-5'>
          {safeParagraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
    </div>
  )
}

export default SectionBlog
