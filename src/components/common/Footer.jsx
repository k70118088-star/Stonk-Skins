import React from 'react'
import Icons from './Icons'

const Footer = () => {
  return (
    <div className='w-full mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-28.25 '>
        
        <div className='px-4 sm:px-6 md:px-0 max-w-287 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between mx-auto gap-10 lg:gap-0 px-2'>
            
            {/* Left */}
            <div className='max-w-[310px] w-full'>
                 <img src="/assets/loho.webp" alt="logo" className='w-32 sm:w-36 md:w-39.25'/>
                 <p className='text-[#F5F5F5] py-4 sm:py-5 font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em]'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lorem.
                 </p>
                 <div className='flex items-center gap-3'>
                    <div className='flex items-center rounded-[41px] bg-gradient-to-r from-orange-400 to-purple-500 justify-center h-8 w-8'><a href=""><Icons icon={"facebook"}/></a></div>
                    <div className='flex items-center rounded-[41px] bg-gradient-to-r from-orange-400 to-purple-500 justify-center h-8 w-8'><a href=""><Icons icon={"x"}/></a></div>
                    <div className='flex items-center rounded-[41px] bg-gradient-to-r from-orange-400 to-purple-500 justify-center h-8 w-8'><a href=""><Icons icon={"youtube"}/></a></div>
                    <div className='flex items-center rounded-[41px] bg-gradient-to-r from-orange-400 to-purple-500 justify-center h-8 w-8'><a href=""><Icons icon={"linkedin"}/></a></div>
                 </div>
            </div>

            {/* Middle Links */}
            <div className='flex flex-col sm:flex-row items-start gap-10 sm:gap-16 md:gap-20.25 w-full lg:w-auto'>
                
                <div>
                    <h3 className='font-semibold poppins text-lg sm:text-xl leading-[118%] tracking-[-6%] text-[#ffffff]'>Useful Links</h3>
                    <div className='pt-6 sm:pt-8 flex flex-col gap-3'>
                        <a href=""><p className='font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em] text-white'>Legal & Privacy</p></a>
                        <a href=""><p className='font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em] text-white'>Contact</p></a>
                        <a href=""><p className='font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em] text-white'>Gift Card</p></a>
                        <a href=""><p className='font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em] text-white'>Customer Service</p></a>
                    </div>
                </div>

                <div>
                    <h3 className='font-semibold poppins text-lg sm:text-xl leading-[118%] tracking-[-6%] text-[#ffffff]'>Useful Links</h3>
                    <div className='pt-6 sm:pt-8 flex flex-col gap-3'>
                        <a href=""><p className='font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em] text-white'>FAQ</p></a>
                        <a href=""><p className='font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em] text-white'>Support</p></a>
                        <a href=""><p className='font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em] text-white'>Terms od service</p></a>
                        <a href=""><p className='font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em] text-white'>Privacy</p></a>
                    </div>
                </div>

            </div>

            {/* Right */}
            <div className='w-full sm:w-auto'>
                <h3 className='poppins font-semibold text-lg sm:text-xl leading-[118%] tracking-[-6%] text-[#ffffff]'>
                  Subscribe Newsletter
                </h3>

                <p className='max-w-full sm:max-w-67 w-full text-white font-medium text-sm sm:text-base leading-[125%] tracking-[-0.006em] pt-4 sm:pt-6.25'>
                  Enter your email to receive our valuable newsletters.
                </p>

               <div className="mt-9.75 flex items-center backgroung-img max-w-[320px] w-full h-13">
                <input
                  type="search"
                  placeholder="Enter your email"
                  className="py-4 max-w-67 focus:outline-none w-full h-[52px] pl-8 font-medium text-base leading-[125%] text-[#F5F5F56E]/43 bg-[#FFFFFF0F]/6 rounded-[68px]"
                />
                <button className="flex items-center justify-center bg-[#FFFFFF0F]/6 h-13 w-13 rounded-[500px]">
                  <Icons icon={"mail"} />
                </button>
              </div>
            </div>

        </div>

        {/* Bottom */}
        <div className='w-full mt-8 sm:mt-10.25 bg-[#FFFFFF0D] py-4 sm:py-5.5 backdrop-blur-[10px]'>
            <div className='max-w-287 w-full mx-auto px-2 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
                
                <div className='flex flex-wrap items-center gap-4 sm:gap-6 md:gap-7.25 justify-center md:justify-start'>
                    <p className='font-normal text-sm sm:text-base text-[#F5F5F557] leading-[125%] tracking-[-0.006em]'>Payment</p>
                    <p className='font-normal text-sm sm:text-base text-[#F5F5F557] leading-[125%] tracking-[-0.006em]'>Gift Cards</p>
                    <p className='font-normal text-sm sm:text-base text-[#F5F5F557] leading-[125%] tracking-[-0.006em]'>Privacy Policy</p>
                    <p className='font-normal text-sm sm:text-base text-[#F5F5F557] leading-[125%] tracking-[-0.006em]'>Stockists</p>
                </div>

                <div className='flex items-center gap-3 sm:gap-3.75 flex-wrap justify-center md:justify-end'>
                    <Icons icon={"pay"}/>
                    <Icons icon={"visa"}/>
                    <Icons icon={"master"}/>
                    <Icons icon={"american"}/>
                    <Icons icon={"discover"}/>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Footer
