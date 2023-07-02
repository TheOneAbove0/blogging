import React from 'react'
import { BsCheck, BsImage } from 'react-icons/bs';
import { AiFillCloseCircle,AiFillPlusSquare } from 'react-icons/ai';
import {BiPlusMedical } from 'react-icons/bi';
import admin from '../../images/admin.jpg'
function Profile() {
  return (

    <div className='flex  '>
      <div className='w-[240px] h-[600px] bg-red-500'>
        left
      </div>
      <div className='bg-[#f6f6f6] '>
        <div className='flex gap-[10px]  p-[20px] bg-white w-[1400px]'>
          <div className='text-[16px]'>MY PROFILE</div>
          <div className='flex items-center justify-between bg-[#70cfb0] p-[0px] text-white'>
            <BsCheck className='text-[25px] border-r-[1px] border-green-600' />
            <div className=' px-3 text-[12px] '>SAVE</div>
          </div>
          </div>




{/* muni */}



     
        <div className='flex gap-[20px] items-center pt-[20px] pl-[20px] pb-[20px] bg-[#f6f6f6]'>
          <img src={admin} className='w-[100px] h-[100px] rounded-[50%] object-cover' />
          <div>
            <div className='font-[600]'>Administrator</div>
            <div className='text-gray-600'>Roles:Administrators</div>
            <div className='flex gap-2 mt-[5px]'>
            <div className='flex items-center text-[10px] gap-1 text-gray-600 hover:text-green-500 cursor-pointer'>
              <BsImage />
              <div>CHANGE PICTURE</div>
            </div>
            <div className='flex items-center text-[10px] gap-1 text-gray-600 hover:text-red-500 cursor-pointer'>
              <AiFillCloseCircle />
              <div>REMOVE PICTURE</div>
            </div>
            </div>
          </div>
        </div>
        <div className='border-[1px] border-gray w-[490px] ml-[20px]'></div>
        <div className='text-[14px] pl-[20px] pt-[10px]'>Display Name</div>
        <input type="text" placeholder='Administrator' className='border-[2px] border-gray ml-[20px] pr-[300px] text-black bg-white p-[5px]' />
        <div className='text-[14px] pl-[20px] pt-[15px]'>First Name</div>
        <input type="text" placeholder='Admin' className='border-[2px] border-gray ml-[20px] pr-[300px] text-black bg-white p-[5px]' />
        <div className='text-[14px] pl-[20px] pt-[15px]'>Last Name</div>
        <input type="text"  className='border-[2px] border-gray ml-[20px] pr-[300px] text-black bg-white p-[5px]' />
        <div className='border-[1px] border-gray mt-[15px]  ml-[20px] w-[490px]'></div>
        <div className=' flex justify-between w-[490px] ml-[20px] items-center p-[10px] border mt-[20px] text-gray-500  text-[15px]'>
          <div>CUSTOM FIELD</div>
          <div className='flex items-center justify-between gap-1 border p-[5px] relative cursor-not-allowed'>
            <BiPlusMedical className=' text-[15px]  ' />
            <div className='border absolute w-[1px] h-[33px] top-0 left-[25px]'></div>
        <div className='  px-[10px]'>ADD</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile