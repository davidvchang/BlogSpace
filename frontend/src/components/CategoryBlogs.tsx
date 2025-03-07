import React from 'react'

type PropsCategory = {
    text: string
    selected?: boolean
}

const CategoryBlogs:React.FC<PropsCategory> = ({selected, text}) => {
  return (
    <>
        {selected === true ? (
            <div className='w-fit h-fit px-3 py-1 bg-white rounded-sm'>
                <span className='text-sm font-medium'>{text}</span>
            </div>

        ) : (
            <div className='w-fit h-fit px-3 py-1 rounded-sm'>
                <span className='text-sm font-medium text-slate-500'>{text}</span>
            </div>
        )}
    
    </>
  )
}

export default CategoryBlogs
