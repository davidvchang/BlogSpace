import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface PropsInfoUser {
    id_user: number,
    email: string,
    name: string,
    last_name: string,
    profile_image_url: string
}

const ProfileUser:React.FC = () => {
    
    const URL_USERS:string = import.meta.env.VITE_URL_USERS

    const token = localStorage.getItem('token');

    const [isEditing, setIsEditing] = useState(false);
    const [dataUsers, setDataUsers] = useState<PropsInfoUser[]>([])

    const getUser = async () => {
        const res = await axios.get(`${URL_USERS}/autenticatedUser`, {
            headers: {
            'Authorization': `Bearer ${token}`,

            },
        })
        console.log("DATOS USER: ", res.data)
        setDataUsers(res.data)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataUsers({ ...dataUsers, [e.target.name]: e.target.value });
    };

    const handleEditClick = (e: React.FormEvent) => {
        e.preventDefault()
        setIsEditing(true);
    };

    const handleSaveProfile = async () => {

    }

    useEffect(() => {
        if(token) {
            getUser()
        }
    }, [])
    

  return (
    <section className="flex flex-col items-center justify-center w-full border-b border-b-slate-200" style={{height: "calc(100vh - 4rem)"}}>
        <div className='w-96 mx-auto p-6 bg-white shadow-lg rounded-lg'>
            <h1 className="text-3xl font-bold text-center mb-6">User Profile</h1>

            <div className="flex flex-col items-center">
                <div className='w-32 min-h-32 rounded-full overflow-hidden'>
                    <img
                    src={dataUsers?.profile_image_url || 'https://img.freepik.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3383.jpg?semt=ais_hybrid'}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    />

                </div>
                
                <form className="w-full space-y-4">
                {isEditing && (
                    <div>
                    <label htmlFor="profile_image" className="block font-medium">Profile Image URL</label>
                    <input
                        type="text"
                        id="profile_image"
                        name="profile_image"
                        value={dataUsers?.profile_image_url}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter image URL"
                    />
                    </div>
                )}
                <div>
                    <label htmlFor="name" className="block font-medium">Name</label>
                    {isEditing ? (
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={dataUsers?.name}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    ) : (
                    <span className="block font-light">{dataUsers?.name}</span>
                    )}
                </div>

                <div>
                    <label htmlFor="last_name" className="block font-medium">Last Name</label>
                    {isEditing ? (
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={dataUsers?.last_name}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    ) : (
                    <span className="block font-light">{dataUsers?.last_name}</span>
                    )}
                </div>

                <div className="flex justify-center gap-4">
                    {isEditing ? (
                    <>
                        <button
                        type="submit"
                        onClick={handleSaveProfile}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                        Save
                        </button>
                        <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                        Cancel
                        </button>
                    </>
                    ) : (
                    <button
                        type="button"
                        onClick={handleEditClick}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Edit
                    </button>
                    )}
                </div>
                </form>
            </div>
            
        </div>
    </section>
  )
}

export default ProfileUser
