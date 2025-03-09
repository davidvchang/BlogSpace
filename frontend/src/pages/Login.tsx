import React from 'react'

const Login:React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full border-b border-b-slate-200' style={{height: "calc(100vh - 4rem)"}}>
        <form className='flex flex-col p-10 border border-slate-200 w-fit rounded-md gap-6 shadow'>
            <div className='flex flex-col'>
                <span className='text-2xl font-semibold'>Login</span>
                <span className='text-sm text-slate-500'>Enter your email and password to access your account</span>
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
            </div>

            <button type="submit" className='w-full h-fit bg-blue-500 py-2 text-white rounded font-medium cursor-pointer hover:brightness-110 hover:transition duration-300'>Login</button>

            <div className='flex text-sm gap-2 w-full items-center justify-center'>
                <span>Don't have an account?</span>
                <a href="/register" className='text-blue-500 hover:underline hover:transition duration-300'>Sign up</a>
            </div>
        </form>
    </section>
  )
}

export default Login
