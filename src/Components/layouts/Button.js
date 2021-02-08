import React from 'react'

const Button = ({title}) =>{
  return(
    <button className="bg-blue-500  px-5 py-2 text-white rounded-md float-right">
      { title }
    </button>
  )
}

export default Button