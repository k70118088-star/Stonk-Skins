import React from 'react'
import Icons from './Icons'

const Footer = () => {
  return (
    <div className='w-full mx-auto mt-28.25'>
        <div className='max-w-287 w-full flex items-center justify-between mx-auto px-2'>
            <div className='max-w-[310px]'>
                 <img src="/assets/loho.webp" alt="logo"  className='w-39.25'/>
                 <p className='text-[#F5F5F5] py-5 font-medium text-base leading-[125%] tracking-[-0.006em]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lorem.</p>
                 <div className='flex items-center gap-3'>
                    <div className='flex items-center rounded-[41px] bg-gradient-to-r from-orange-400 to-purple-500 justify-center h-8 w-8'><a href=""><Icons icon={"facebook"}/></a></div>
                    <div className='flex items-center rounded-[41px] bg-gradient-to-r from-orange-400 to-purple-500 justify-center h-8 w-8'><a href=""><Icons icon={"x"}/></a></div>
                    <div className='flex items-center rounded-[41px] bg-gradient-to-r from-orange-400 to-purple-500 justify-center h-8 w-8'><a href=""><Icons icon={"youtube"}/></a></div>
                    <div className='flex items-center rounded-[41px] bg-gradient-to-r from-orange-400 to-purple-500 justify-center h-8 w-8'><a href=""><Icons icon={"linkedin"}/></a></div>
                 </div>
            </div>
            <div className='flex items-center gap-20.25'>
                <div>
                    <h3 className='font-semibold poppins text-xl leading-[118%] tracking-[-6%] text-[#ffffff]'>Useful Links</h3>
                    <div className='pt-8 flex flex-col gap-3'>
                        <a href=""><p className='font-medium text-base leading-[125%] tracking-[-0.006em] text-white'>Legal & Privacy</p></a>
                        <a href=""><p className='font-medium text-base leading-[125%] tracking-[-0.006em] text-white'>Contact</p></a>
                        <a href=""><p className='font-medium text-base leading-[125%] tracking-[-0.006em] text-white'>Gift Card</p></a>
                        <a href=""><p className='font-medium text-base leading-[125%] tracking-[-0.006em] text-white'>Customer Service</p></a>
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold poppins text-xl leading-[118%] tracking-[-6%] text-[#ffffff]'>Useful Links</h3>
                    <div className='pt-8 flex flex-col gap-3'>
                        <a href=""><p className='font-medium text-base leading-[125%] tracking-[-0.006em] text-white'>FAQ</p></a>
                        <a href=""><p className='font-medium text-base leading-[125%] tracking-[-0.006em] text-white'>Support</p></a>
                        <a href=""><p className='font-medium text-base leading-[125%] tracking-[-0.006em] text-white'>Terms od service</p></a>
                        <a href=""><p className='font-medium text-base leading-[125%] tracking-[-0.006em] text-white'>Privacy</p></a>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='poppins font-semibold text-xl leading-[118%] tracking-[-6%] text-[#ffffff]'>Subscribe Newsletter</h3>
                <p className='max-w-67 w-full text-white font-medium text-base leading-[125%] tracking-[-0.006em] pt-6.25'>Enter your email to receive our valuable newsletters.</p>
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
        <div className='w-full mt-10.25 bg-[#FFFFFF0D] py-5.5 backdrop-blur-[10px]'>
            <div className='max-w-287 w-full mx-auto px-1.25 flex items-center justify-between'>
                <div className='flex items-center gap-7.25'>
                    <p className='font-normal text-base text-[#F5F5F557] leading-[125%] tracking-[-0.006em]'>Payment</p>
                    <p className='font-normal text-base text-[#F5F5F557] leading-[125%] tracking-[-0.006em]'>Gift Cards</p>
                    <p className='font-normal text-base text-[#F5F5F557] leading-[125%] tracking-[-0.006em]'>Privacy Policy</p>
                    <p className='font-normal text-base text-[#F5F5F557] leading-[125%] tracking-[-0.006em]'>Stockists</p>
                    </div>
            
            <div className='flex items-center gap-3.75'>
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