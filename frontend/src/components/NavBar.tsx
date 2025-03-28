import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Menu, LogOut, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'
import NavLogged from './NavLogged';
import { Newspaper, User } from 'lucide-react';
import axios from 'axios';

interface PropsInfoUser {
    id: number,
    email: string,
    name: string,
    last_name: string,
    profile_image_url: string
}

const NavBar:React.FC = () => {

    const URL_USERS = import.meta.env.VITE_URL_USERS

    const token = localStorage.getItem('token');

    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const [dataUser, setDataUser] = useState<PropsInfoUser[]>([])

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const getInfoUserLogged = async () => {
        const res = await axios.get(`${URL_USERS}/autenticatedUser`, {
            headers: {
            'Authorization': `Bearer ${token}`,

            },
        })
        setDataUser(res.data)
    }

    useEffect(() => {
        if(token) {
            getInfoUserLogged()
        }
    }, [token])
    


  return (
    <div className='w-full h-16 flex justify-between items-center px-10 border-b border-b-slate-200 bg-white fixed z-99'>
        <div className='flex gap-10 items-center'>
            <a href="/" className='font-semibold text-xl'>BlogSpace</a>

            <div className='flex gap-10'>
                <Nav link='/' text='Home'/>
                <Nav link='/blogs' text='Blogs'/>
            </div>

        </div>

        <div>
            {token ? (
                <div className='flex items-center gap-5 relative'>
                    <div className='flex items-center gap-3'>
                        <span className='font-light'>Hello, <strong className='font-semibold'>{dataUser?.name} {dataUser?.last_name}</strong></span>
                        <div className='w-10 min-h-10 rounded-full overflow-hidden'>
                            <img src={dataUser?.profile_image_url} alt="Profile photo" className='w-full h-full object-cover'/>
                        </div>
                    </div>

                    <button className='w-fit h-fit hover:bg-blue-100 hover:transition duration-300 rounded-md border border-slate-200' onClick={handleToggleMenu}>
                        {toggleMenu === true ? (
                            <X className='w-8 h-8'/>
                        ) : (
                            <Menu className='w-8 h-8'/>
                        )}
                        
                    </button>

                    <div className='absolute top-full right-0'>
                        <AnimatePresence>
                            {toggleMenu && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    exit={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, scale: 1}}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="flex flex-col absolute top-3 -right-10 p-5 bg-slate-100 rounded-md shadow-xl w-72"
                                    style={{ minHeight: "calc(100vh - 64px)" }}
                                    >
                                        <div className='flex flex-col h-full gap-2'>
                                            <div className='flex gap-3 items-center border-b border-b-slate-300 pb-5'>
                                                <div className='w-12 min-h-12 rounded-full overflow-hidden'>
                                                    <img src={dataUser?.profile_image_url} alt="Profile photo" className='w-full h-full object-cover'/>
                                                </div>  

                                                <span className='text-lg font-medium'>{dataUser?.name} {dataUser?.last_name}</span>
                                            </div>
                                            <NavLogged icon={<Newspaper className='w-6 h-6'/>} text='My Blogs' link='/user/blogs'/>
                                            <NavLogged icon={<User className='w-6 h-6'/>} text='Profile' link='/user/profile'/>
                                        </div>

                                        <button className='flex gap-2 items-center bg-red-500 w-full h-fit px-5 py-3 rounded-md text-white hover:bg-red-600 hover:transition duration-300 cursor-pointer' onClick={handleLogout}>
                                            <LogOut className='w-6 h-6'/>
                                            <span>Logout</span>
                                        </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

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
