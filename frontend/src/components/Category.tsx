import React from 'react'

interface PropsCategory {
    text: string
}

const Category:React.FC<PropsCategory> = ({text}) => {
  return (
    <>
    {text === "Featured" ? (
        <span className='w-fit h-fit bg-blue-500 text-white rounded-full px-[10px] py-[2px] text-xs font-semibold'>{text}</span>
    ): (
        <span className='w-fit h-fit border border-slate-200 rounded-full px-[10px] py-[2px] text-xs font-semibold'>{text}</span>
    )}
    </>
  )
}

export default Category
