import React, { ReactNode } from 'react'

interface PropsNav {
    link: string,
    text: string,
    icon: ReactNode
}

const NavLogged:React.FC<PropsNav> = ({link, text, icon}) => {
  return (  
    <a href={link} className='flex gap-3 w-full h-fit px-5 py-3 hover:text-blue-500 hover:transition duration-300'>
        {icon}
        {text}
    </a>
  )
}

export default NavLogged
