import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-indigo-500 text-white font-[Poppins] py-2 px-6 rounded  hover:bg-indigo-600 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button