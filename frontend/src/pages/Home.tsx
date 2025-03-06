import React from 'react'

const Home:React.FC = () => {
  return (
    <section className='flex flex-col w-full py-10'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className='text-6xl font-bold'>Welcome to BlogSpace</h1>
        <span className='text-xl text-slate-500'>A place to share your thoughts, ideas, and stories with the world.</span>

        <div className='flex gap-5 pt-5'>
          <a href="/blogs" className='w-fit h-fit bg-blue-500 text-white font-medium py-3 px-6 rounded-md hover:brightness-110 hover:transition duration-300'>Browse Blogs</a>
          <a href="/login" className='w-fit h-fit border border-slate-200 font-medium py-3 px-6 rounded-md hover:bg-slate-200 hover:transition duration-300'>Browse Blogs</a>

        </div>
      </div>
    </section>
  )
}

export default Home
