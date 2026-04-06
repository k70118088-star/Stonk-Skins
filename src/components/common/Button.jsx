import React from 'react'
import Icons from './Icons'

const Button = ({className}) => {
  return (
    <div className={className}>
        <div className="flex items-center btn-img cursor-pointer hover:scale-105 hover:ease-in-out hover:transform hover:duration-500 max-w-61.25 w-full h-13">
               <button className='flex items-center justify-center w-48.25 text-base font-medium leading-[125%] tracking-[-6%] cursor-pointer text-[#F5F5F5]'>Login with Steam</button>
                <button aria-label='arrow' className="flex cursor-pointer items-center justify-center bg-[#FFFFFF0F]/6 h-13 w-13 rounded-[500px]">
                  <Icons icon={"arrow"} />
                </button>
              </div>
    </div>
  )
}

export default Button