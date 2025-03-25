import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

interface PropsUsers {
    id_user: number | null,
    name: string,
    last_name: string, 
    email: string,
    password: string,
    password2: string,
    profile_image_url: string
}

const Register:React.FC = () => {

    const URL_POSTUSER:string = import.meta.env.VITE_URL_USERS


    const initialValues = {
        id_user: null,
        name: "",
        last_name: "",
        email: "",
        password: "",
        password2: "",
        profile_image_url: "https://green.excertia.com/wp-content/uploads/2020/04/perfil-empty.png"
    }
    
    const [dataUsers, setDataUsers] = useState<PropsUsers>(initialValues)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataUsers({ ...dataUsers, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await axios.post(URL_POSTUSER, dataUsers)
        if(res.status === 201) {
            Swal.fire({
                title: "Registered",
                text: "User has been registered correctly",
                icon: 'success',
                confirmButtonText: "OK"
            }).then(() => {
                setDataUsers(initialValues)
                window.location.href = '/login'
            })
        }
    }

  return (
    <section className='flex flex-col items-center justify-center w-full border-b border-b-slate-200' style={{height: "calc(100vh - 4rem)"}}>
        <form className='flex flex-col p-10 h-[34rem] overflow-x-auto border border-slate-200 w-fit rounded-md gap-6 shadow' onSubmit={handleRegister}>
            <div className='flex flex-col'>
                <span className='text-2xl font-semibold'>Sign Up</span>
                <span className='text-sm text-slate-500'>Enter your information to create an account</span>
            </div>

            <div className='flex flex-col'>
                <div className='self-center w-32 min-h-32 rounded-full overflow-hidden border border-slate-200'>
                    <img src={dataUsers.profile_image_url} alt="" className='w-full h-full object-cover'/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="profile_image_url" className='text-[15px] font-medium'>Profile Photo URL</label>
                    <input type="text" value={dataUsers.profile_image_url} onChange={handleChange} name="profile_image_url" id="profile_image_url" placeholder='https://img.freepik.com/vector-premium/ilustracion-plana-vectorial-perfil-pastel-elegante-hombre-perfil-usuario-avatar-icono-persona-imagen-perfil-silueta-adecuada-perfiles-redes-sociales-iconos-protectores-pantalla-como-plantilla-x9xa_719432-1856.jpg?w=1380' className='px-5 py-2 text-sm border border-slate-200 rounded' required/>
                </div>

            </div>

            <div className='flex gap-5'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-[15px] font-medium'>Name</label>
                    <input type="text" value={dataUsers.name} onChange={handleChange} name="name" id="name" className='px-5 py-2 text-sm border border-slate-200 rounded' required/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="last_name" className='text-[15px] font-medium'>Last Name</label>
                    <input type="text" value={dataUsers.last_name} onChange={handleChange} name="last_name" id="last_name" className='px-5 py-2 text-sm border border-slate-200 rounded' required/>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-[15px] font-medium'>Email</label>
                    <input type="email" value={dataUsers.email} onChange={handleChange} name="email" id="email" placeholder='example@example.com' className='px-5 py-2 text-sm border border-slate-200 rounded' required/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="password" className='text-[15px] font-medium'>Password</label>
                    <input type="password" value={dataUsers.password} onChange={handleChange} name="password" id="password" className='px-5 py-2 text-sm border border-slate-200 rounded' required/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="password2" className='text-[15px] font-medium'>Confirm Password</label>
                    <input type="password" value={dataUsers.password2} onChange={handleChange} name="password2" id="password2" className='px-5 py-2 text-sm border border-slate-200 rounded' required/>
                </div>
            </div>

            <button type="submit" className='w-full h-fit bg-blue-500 py-2 text-white rounded font-medium cursor-pointer hover:brightness-110 hover:transition duration-300'>Register</button>

        </form>
    </section>
  )
}

export default Register
