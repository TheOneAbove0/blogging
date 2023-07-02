import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
function Header() {
  const[show,setShow]=useState(false)
  function clickHandler(){
    setShow(!show)
  }
  const[show1,setShow1]=useState(false)
  function clickHandler1(){
    setShow1(!show1)
  }
  return (
    <div>
      <div className='bg-[#1e1e1f] text-white font-[600] items-center p-[48px] flex justify-around relative'>
        <div className=' text-green-400 text-[24px]'>BLOGGERS NEPAL</div>
        <div className=' flex items-center gap-[20px]'>
          <div className='hover:bg-green-400 text-[14px] py-[5px] px-[10px] rounded-[15px] cursor-pointer'>HOME</div>
          <div onMouseEnter={clickHandler1} onMouseLeave={clickHandler1} className='flex items-center gap-1 text-[14px] hover:bg-green-400 py-[5px] px-[10px]  cursor-pointer rounded-[15px]'>
            <div className=''>ABOUT</div>
            <AiOutlineDown />
          </div>
         
          <div onMouseEnter={clickHandler} onMouseLeave={clickHandler} className='flex items-center gap-1 text-[14px] hover:bg-green-400 py-[5px] px-[10px]  rounded-[15px] cursor-pointer'>
            <div className='hover:bg-green-400  '>EXAMPLE</div>
            <AiOutlineDown />
          </div>
          <div className='hover:bg-green-400 text-[14px] py-[5px] px-[10px]  rounded-[15px] cursor-pointer'>ARCHEIVE</div>
          <div className='hover:bg-green-400 text-[14px] py-[5px] px-[10px]  rounded-[15px] cursor-pointer'>CONTACT</div>
          <div><FaFacebookF className=' iconstyle' /></div>
          <div><FaTwitter className='iconstyle ' /></div>
          <div><FaInstagram className='iconstyle' /></div>
        </div>
       
      </div>
      {show && <div className='bg-black text-white w-[200px] absolute top-[100px] right-[570px]  '>
          <div className='pt-[10px] cursor-pointer hover:bg-green-400 pl-[10px] pb-[10px]'>Page One</div>
          <div className='pt-[10px] cursor-pointer hover:bg-green-400 pl-[10px] pb-[10px]'>Page Two</div>
        </div>}
        {show1 &&   <div className='bg-black text-white w-[150px] absolute top-[100px] right-[770px]  '>
           <div className='pt-[10px] cursor-pointer hover:bg-green-400 pl-[10px] pb-[10px]'>Custom Themes</div>
           <div className='pt-[10px] cursor-pointer hover:bg-green-400 pl-[10px] pb-[10px]'>Matching Themes</div>
         </div>}
         
     
      
    </div>
  )
}

export default Header