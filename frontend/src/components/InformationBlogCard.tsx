import { CalendarDays, MessageSquare } from 'lucide-react'
import React from 'react'

type PropsInformation = {
    name: string,
    date?: string,
}

const InformationBlogCard:React.FC<PropsInformation> = ({name, date}) => {
  return (
    <>
        {name === "date" ? (
            <div className='flex gap-2 items-center text-slate-500'>
                <CalendarDays className='w-4 h-4'/>
                <span className='text-sm'>{date}</span>
            </div>

        ) : (
            <div className='flex gap-2 items-center text-slate-500'>
                <MessageSquare className='w-4 h-4'/>
                <span className='text-sm'>24 comments</span>
            </div>
        )}
    </>
  )
}

export default InformationBlogCard
