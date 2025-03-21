import React from 'react'
import LinkFooter from './LinkFooter'

const Footer:React.FC = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-full p-10 flex justify-between items-center border-b border-b-slate-200'>
            <div className='flex flex-col gap-2'>
                <a href="/" className='text-xl font-bold'>BlogSpace</a>
                <span className='text-sm text-slate-500'>A place to share your thoughts and ideas.</span>
            </div>

            <div className='flex gap-10'>
                <div className='flex flex-col gap-1'>
                    <span className='font-semibold'>Platform</span>
                    <LinkFooter link='/' text='Home'/>
                    <LinkFooter link='/blogs' text='Blogs'/>
                </div>

                <div className='flex flex-col gap-1'>
                    <span className='font-semibold'>Legal</span>
                    <LinkFooter link='/' text='Privacy Policy'/>
                    <LinkFooter link='/' text='Terms of Services'/>
                </div>
            </div>

        </div>

        <span className='text-center text-sm text-slate-500 py-5'>© 2025 BlogSpace. All rights reserved.</span>
      
    </div>
  )
}

export default Footer
