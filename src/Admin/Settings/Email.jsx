import React from 'react'
import { BsCheck, BsPlus ,} from 'react-icons/bs';
import { AiOutlineMail} from 'react-icons/ai';
const Email = () => {
  return (
    <div className='flex'>
      {/* <div className='w-[240px] bg-red-600'>
left
      </div> */}
      <div className='bg-[#f6f6f6] ml-[240px] w-[1400px]'>
      <div className='flex gap-[20px] item-center p-[20px] bg-white'>
          <div className='text-[18px]'>E-MAIL</div>
          <div className='flex items-center justify-between cursor-pointer bg-[#70cfb0] p-[0px] text-white hover:bg-green-800'>
            <BsCheck className='text-[25px] border-r-[1px] border-green-600' />
            <div className=' px-3 text-[12px] '>SAVE</div>
          </div>
          <div className='flex items-center cursor-pointer hover:bg-[#19a7ee]  text-BLACK bg-[#23b1f7] text-white relative'>
            <div className='absolute h-[28px] border-blue-400 border left-[38px]'></div>
            <AiOutlineMail className='pl-[10px] text-[30px]' />
            <div className=' text-[12px]  px-[20px] '>TEST MAIL SETTINGS</div>
          </div>
          </div>
          <div className='ml-[30px] mt-[30px]'>E-mail address</div>
          <input placeholder='youremail@gmail.com' type="text" className='ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]'/>
          <div className='ml-[30px] mt-[19px]'>Username</div>
          <input placeholder='youremail@gmail.com' type="text" className='ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]'/>
          <div className='ml-[30px] mt-[19px]'>Password</div>
          <input placeholder='' type="password" className='ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]'/>
          <div className='ml-[30px] mt-[19px]'>SMTP server</div>
          <input placeholder='smtp.gmail.com' type="text" className='ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]'/>
          <div className='ml-[30px] mt-[19px]'>Port number</div>
          <input placeholder='587' type="text" className='ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]'/>
          <div className='ml-[30px] mt-[19px]'>Subject prefix</div>
          <input placeholder='Weblog' type="text" className='ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]'/>
          <div className='flex ml-[30px] gap-1 mt-[20px]'>
          <input type="checkbox" />
          <div>Enable SSL</div>
          </div>
          <div className='flex ml-[30px] gap-1 mt-[20px] mb-[50px]'>
          <input type="checkbox" />
          <div>Send comment e-mail</div>
          </div>
        
      </div>
    </div>
  )
}

export default Email
