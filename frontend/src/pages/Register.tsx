import React from 'react'

const Register:React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full border-b border-b-slate-200' style={{height: "calc(100vh - 4rem)"}}>
        <form className='flex flex-col p-10 border border-slate-200 w-fit rounded-md gap-6 shadow'>
            <div className='flex flex-col'>
                <span className='text-2xl font-semibold'>Sign Up</span>
                <span className='text-sm text-slate-500'>Enter your information to create an account</span>
            </div>

            <div className='flex gap-5'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-[15px] font-medium'>Name</label>
                    <input type="text" name="name" id="name" className='px-5 py-2 text-sm border border-slate-200 rounded'/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="last_name" className='text-[15px] font-medium'>Last Name</label>
                    <input type="text" name="last_name" id="last_name" className='px-5 py-2 text-sm border border-slate-200 rounded'/>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-[15px] font-medium'>Email</label>
                    <input type="email" name="email" id="email" placeholder='example@example.com' className='px-5 py-2 text-sm border border-slate-200 rounded'/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="password" className='text-[15px] font-medium'>Password</label>
                    <input type="password" name="password" id="password" className='px-5 py-2 text-sm border border-slate-200 rounded'/>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="password2" className='text-[15px] font-medium'>Confirm Password</label>
                    <input type="password" name="password2" id="password2" className='px-5 py-2 text-sm border border-slate-200 rounded'/>
                </div>
            </div>

            <button type="submit" className='w-full h-fit bg-blue-500 py-2 text-white rounded font-medium cursor-pointer hover:brightness-110 hover:transition duration-300'>Register</button>

        </form>
    </section>
  )
}

export default Register
