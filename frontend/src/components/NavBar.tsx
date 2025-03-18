import React from 'react'
import Nav from './Nav'
import { Menu, LogOut } from 'lucide-react';

const NavBar:React.FC = () => {

    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }

  return (
    <div className='w-full h-16 flex justify-between items-center px-10 border-b border-b-slate-200 bg-white fixed z-99'>
        <div className='flex gap-10 items-center'>
            <a href="/" className='font-semibold text-xl'>BlogSpace</a>

            <div className='flex gap-10'>
                <Nav link='/' text='Home'/>
                <Nav link='/blogs' text='Blogs'/>
                <Nav link='/' text='About'/>
            </div>

        </div>

        <div>
            {token ? (
                <div className='flex items-center gap-5 relative'>
                    <div className='flex items-center gap-3'>
                        <span className='font-light'>Hello, <strong className='font-semibold'>Prueba</strong></span>
                        <div className='min-w-10 min-h-10 bg-red-200 rounded-full'>

                        </div>
                    </div>

                    <button className='w-fit h-fit hover:bg-slate-200 hover:transition duration-300 rounded-md'>
                        <Menu className='w-8 h-8'/>
                    </button>

                    <div className='flex flex-col absolute top-[54px] -right-10 p-5 bg-slate-100 rounded-md shadow-xl w-62 ' style={{height: "calc(100vh - 64px)"}}>
                        <div className='flex flex-col h-full'>

                        </div>

                        <button className='flex gap-2 items-center bg-red-500 w-full h-fit px-5 py-3 rounded-md text-white hover:bg-red-600 hover:transition duration-300 cursor-pointer' onClick={handleLogout}>
                            <LogOut className='w-6 h-6'/>
                            <span>Logout</span>
                        </button>
                    </div>

                </div>
            ) : (
                <div className='flex gap-2 items-center'>
                    <a href="/login" className='w-fit h-fit py-1 px-3 flex items-center justify-center rounded-md font-light hover:bg-slate-100 hover:transition duration-300'>Login</a>
                    <a href="/register" className='w-fit h-fit py-1 px-3 flex items-center justify-center rounded-md bg-blue-500 text-white font-light hover:brightness-110 hover:transition duration-300'>Sign up</a>
                </div>

            )}


        </div>
    </div>
  )
}

export default NavBar
