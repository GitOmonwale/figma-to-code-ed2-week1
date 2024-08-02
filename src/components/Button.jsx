import React from 'react'

const Button = ({ButtonName}) => {
  return (
    <div>
      <button className='whitespace-nowrap text-neutral-800 font-bold rounded-xl py-2 px-4 bg-neutral-50 hover:bg-neutral-800 hover:text-neutral-50 transition-all duration-100'>{ButtonName}</button>
    </div>
  )
}

export default Button
