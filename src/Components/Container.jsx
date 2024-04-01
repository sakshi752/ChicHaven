import React from 'react'

const Container = ({children}) => {
  return (
    <div className='md:max-w-[70%] mx-auto p-3 flex-grow'>
      {children}
    </div>
  )
}

export default Container
