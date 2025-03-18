import React from 'react'

type PropsCategory = {
    text: string
    selected?: boolean,
    onClick?: () => void
}

const CategoryBlogs:React.FC<PropsCategory> = ({selected, text, onClick}) => {
  return (
    <button className={`w-fit h-fit px-3 py-1 rounded-sm cursor-pointer ${selected ? "bg-white text-black font-semibold" : "text-slate-500"}`} onClick={onClick}>
        <span className="text-sm font-medium">{text}</span>
    </button>
  )
}

export default CategoryBlogs
