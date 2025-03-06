import React from 'react'
import Nav from './Nav'

const NavBar:React.FC = () => {
  return (
    <div className='w-full h-16 flex justify-between items-center px-5 border-b border-b-slate-200 bg-white fixed z-99'>
        <div className='flex gap-10 items-center'>
            <a href="/" className='font-semibold text-xl'>BlogSpace</a>

            <div className='flex gap-10'>
                <Nav link='/' text='Home'/>
                <Nav link='/blogs' text='Blogs'/>
                <Nav link='/' text='About'/>
            </div>

        </div>

        <div>

            <div className='flex gap-2 items-center'>
                <a href="/login" className='w-fit h-fit py-1 px-3 flex items-center justify-center rounded-md font-light hover:bg-slate-100 hover:transition duration-300'>Login</a>
                <a href="/register" className='w-fit h-fit py-1 px-3 flex items-center justify-center rounded-md bg-blue-500 text-white font-light hover:brightness-110 hover:transition duration-300'>Sign up</a>
            </div>
        </div>
    </div>
  )
}

export default NavBar
