import React from 'react'
import Icons from './Icons'

const HeroBox = ({icon , text}) => {
  return (
    <div className='max-w-max w-full flex items-center'>
        <div className='box-img flex items-center w-15 h-15 justify-center'>
            <Icons icon={icon}/>
        </div>
        <p className='font-medium ml-4 text-base tracking-[-6%] text-[#F5F5F5] leading-[125%]'>{text}</p>
    </div>
  )
}

export default HeroBox