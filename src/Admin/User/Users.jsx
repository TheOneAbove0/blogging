import React from 'react'
import { BsCheck, BsPlus } from 'react-icons/bs';
import { BiSearch, BiPlusMedical } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineLine } from 'react-icons/ai';
function Users() {
  return (
    <div className='flex'>
      <div className='w-[240px] h-[600px] bg-red-500'>
        left
      </div>
      <div className='bg-[#f6f6f6] W-[1400px]'>
      <div className='w-[1400px]'>
      <div className='flex items-center justify-between p-[20px] border-[1px] bg-white'>
          <div className='flex gap-4 items-center'>
            <div className='text-[16px]'>USERS</div>
            <div className='flex items-center bg-[#24b685] p-[4px] gap-2 relative text-white'>
            <BiPlusMedical className=' text-[12px] ml-[5px] ' />
            <div className='border-[1px] h-[30px] w-[1px] absolute border-gray-500 left-[30px]'></div>
              <div className='px-[15px] text-[15px]'>NEW</div>
            </div>
            <div className='bg-red-400 px-[15px] py-[8px] rounded-[4px] text-white'>
              <RiDeleteBin6Line />
            </div>
          </div>
          <div className='bg-[#ffffff] border-2 p-[5px]'>
            <BiSearch className='' />
          </div>
        </div>
      </div>
  <div className='bg-white border mx-[30px] mt-[20px] p-[15px] flex text-[12px] justify-between text-gray-500'>
<div className='flex gap-[25px]'>
  <input type="checkbox" />
  <div>TITTLE</div>
</div>
<div className='flex gap-[100px]'>
  <div>ROLES</div>
  <div className='mr-[50px]'>E-Mail</div>
</div>
  </div>
  <div className='bg-white border mx-[30px] relative p-[15px] flex text-[11px] justify-between text-gray-500'>
<div className='flex gap-[25px] '>
  <input  type="checkbox" />
  <div className='border-[1px] w-[0.5px] h-[50px] top-[0px] left-[42px] absolute'></div>
  <div className='text-[#6581ad] cursor-pointer'>ADMIN</div>
</div>
<div className='flex gap-[50px] text-[#6581ad] cursor-pointer'>
  <div>ADMINISTRATORS</div>
  <div className='mr-[10px]'>post@example.com</div>
</div>
  </div>
  
      </div>
    </div>
  )
}

export default Users