import React from 'react'

const HeroImages = ({img,imgTitle}) => {
  return (
    <div className="relative max-h-60"> 
        <img src={img} alt={imgTitle} className='h-full w-full object-cover' />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center  items-center">
          <span className="text-white text-lg font-bold tracking-wide">{imgTitle}</span>
        </div>
      </div>
  )
}

export default HeroImages
