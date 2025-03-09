import React from 'react'

type propsProfile = {
  blog_view?: boolean
}

const ProfilePostCard:React.FC<propsProfile> = ({blog_view}) => {
  return (
    <>
      {blog_view === true ? (
        <div className='flex gap-3 items-center'>
            {/* IMAGE PROFILE */}
            <div className='min-w-10 min-h-10 bg-red-200 rounded-full'>

            </div>

            <span className='font-medium'>Jane Doe</span>
        </div>
      ) : (
        <div className='flex gap-3 items-center'>
            {/* IMAGE PROFILE */}
            <div className='min-w-7 min-h-7 bg-red-200 rounded-full'>

            </div>

            <span>Jane Doe</span>
        </div>

      )}
    </>
  )
}

export default ProfilePostCard
