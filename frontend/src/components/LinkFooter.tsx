import React from 'react'

type PropsLinks = {
    link: string,
    text: string
}

const LinkFooter:React.FC<PropsLinks> = ({link, text}) => {
  return (
    <a href={link} className='text-sm text-slate-500'>{text}</a>
  )
}

export default LinkFooter
