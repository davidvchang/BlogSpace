import React from 'react'

type propsProfile = {
  blog_view?: boolean,
  author: string,
  image_profile: string
}

const ProfilePostCard:React.FC<propsProfile> = ({blog_view, author, image_profile}) => {
  return (
    <>
      {blog_view === true ? (
        <div className='flex gap-3 items-center'>
            {/* IMAGE PROFILE */}
            <div className='w-10 min-h-10 rounded-full overflow-hidden'>
              <img src={image_profile} alt="Profile photo" className='w-full h-full object-cover'/>
            </div>

            <span className='font-medium'>{author}</span>
        </div>
      ) : (
        <div className='flex gap-3 items-center'>
            {/* IMAGE PROFILE */}
            <div className='w-10 min-h-10 rounded-full overflow-hidden'>
              <img src={image_profile} alt="Profile photo" className='w-full h-full object-cover'/>
            </div>

            <span>{author}</span>
        </div>

      )}
    </>
  )
}

export default ProfilePostCard
