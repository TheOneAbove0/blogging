import React from 'react'
import { BsCheck, BsPlus } from 'react-icons/bs';
const Advanced = () => {
  return (
    <div className='flex'>
      <div className='w-[240px]  bg-red-600'>
        left
      </div>
      <div className='w-[1400px] bg-[#f6f6f6]'>
      <div className='flex gap-[10px]  p-[20px] bg-white'>
          <div className='text-[16px]'>MY PROFILE</div>
          <div className='flex items-center justify-between bg-[#70cfb0] p-[0px] text-white'>
            <BsCheck className='text-[25px] border-r-[1px] border-green-600' />
            <div className=' px-3 text-[12px] '>SAVE</div>
          </div>
          </div>
          <div className=''>
          <div className=' flex  gap-2 p-[3px] w-[520px] items-center bg-[#e9e9e9] mx-[30px] mt-[30px]'>
            <div className='rotate-90 text-[20px]'>^</div>
            <div>General</div>
          </div>
          <div className='ml-[30px] mt-[20px]'>www subdomain policy</div>
          <div className='flex ml-[30px] mt-[10px] gap-20'>  
          <div className='gap-2 flex'>
          <input type="radio" name='type' />
          <div>Remove</div>
            </div>      
            <div className='gap-2 flex'>
          <input type="radio" name='type' />
          <div>Enforce</div>
            </div>  
            <div className='gap-2 flex'>
          <input type="radio" name='type' />
          <div>Ignore</div>
            </div>  
          </div>
          <div className='border w-[520px] ml-[30px] mt-[30px] mb-[20px]'></div>
          <div className='flex gap-2 ml-[30px]'>
            <input type="checkbox" />
            <div>Enable HTTP compression</div>
          </div>
          <div className='flex gap-2 ml-[30px]'>
            <input type="checkbox" />
            <div>Compress WebResource.axd</div>
          </div>
          <div className='flex gap-2 ml-[30px]'>
            <input type="checkbox" />
            <div>Enable OpenSearch</div>
          </div>
          <div className='flex gap-2 ml-[30px]'>
            <input type="checkbox" />
            <div>Show post navigation links</div>
          </div>
          <div className='flex gap-2 ml-[30px]'>
            <input type="checkbox" />
            <div>Enable Password Resets</div>
          </div>
          <div className=' flex  gap-2 p-[3px] w-[520px] items-center bg-[#e9e9e9] mx-[30px] mt-[40px] mb-[20px]'>
            <div className='rotate-90 text-[20px]'>^</div>
            <div>Comments</div>
          </div>
          <div className='ml-[30px]'>Enable Trackbacks</div>
          <div className='flex ml-[30px] gap-[200px] mt-[10px]'>
          <div className='flex gap-2'>
            <input type="checkbox" />
            <div>Send</div>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" />
            <div>Receive</div>
          </div>
          </div>
          <div className='ml-[30px] mt-[25px]'>Enable pingbacks</div>
          <div className='flex ml-[30px] gap-[200px] mt-[10px]'>
          <div className='flex gap-2'>
            <input type="checkbox" />
            <div>Send</div>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" />
            <div>Receive</div>
          </div>
          </div>
          <div className=' flex  gap-2 p-[3px] w-[520px] items-center bg-[#e9e9e9] mx-[30px] mt-[50px]'>
            <div className='rotate-90 text-[20px]'>^</div>
            <div>Security Settings</div>
          </div>
          <div className='gap-2 flex ml-[30px] mt-[20px] mb-[40px]'>
              <input type="checkbox" />
              <div>Allow remote file downloads</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Advanced
