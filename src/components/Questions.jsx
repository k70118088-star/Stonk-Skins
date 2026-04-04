import React from 'react'
import Accordion from './common/Accordion'

const Questions = () => {
  return (
    <div className='mt-30 w-full bg-cover bg-center min-h-194.5' style={{ backgroundImage: `url('/assets/accordion-bg.png')` }}>
      <div className='max-w-287 px-2 mx-auto w-full flex '>
        <div>
            <h3 className='pt-20 max-w-97.25 poppins font-medium text-5xl text-[#FFFFFF] leading-[118%] tracking-[-6%]'>Any Questions? Look Here</h3>
            <p className='font-medium text-base leading-[125%] tracking-[-0.006em] text-[#F5F5F5]'>Get answers to all your questions</p>
        </div>
        <div className='pt-20'>
            <Accordion />
        </div>
      </div>
    </div>
  )
}

export default Questions