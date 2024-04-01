import React from 'react'

const Container = ({children}) => {
  return (
    <div className='md:max-w-[70%] mx-auto p-3'>
      {children}
    </div>
  )
}

export default Container
