import React from 'react'
import Accordion from './common/Accordion'

const Questions = () => {
  return (
    <div className='mt-16 sm:mt-20 md:mt-24 lg:mt-30 w-full bg-cover bg-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-194.5' style={{ backgroundImage: `url('/assets/accordion-bg.png')` }}>
      
      <div className='max-w-287 px-4 sm:px-6 md:px-8 mx-auto w-full flex flex-col lg:flex-row gap-10 lg:gap-0'>
        
        {/* Left Content */}
        <div className='w-full lg:w-1/2'>
            <h3 className='pt-10 sm:pt-14 md:pt-16 lg:pt-20 max-w-64.5 lg:max-w-97.25 poppins font-medium text-[32px] md:text-4xl lg:text-5xl text-[#FFFFFF] leading-[118%] tracking-[-0.06em]'>
              Any Questions? Look Here
            </h3>
            <p className='mt-3 sm:mt-4 font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em] text-[#F5F5F5]'>
              Get answers to all your questions
            </p>
        </div>

        {/* Right Accordion */}
        <div className='w-full pt-6 sm:pt-8 md:pt-10 lg:pt-20'>
            <Accordion />
        </div>

      </div>
    </div>
  )
}

export default Questions
