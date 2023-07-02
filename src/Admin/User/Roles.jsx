import React from 'react'
import { BiSearch, BiSolidCheckboxChecked,BiPlusMedical} from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
function Roles() {
  return (
    <div className='flex'>
      <div className='w-[240px] h-[600px] bg-red-500'>
        left
      </div>
      <div className='min-w-[1400px]'>
        <div className='flex items-center justify-between p-[20px] border-[1px] bg-white'>
          <div className='flex gap-4 items-center'>
            <div className='text-[16px]'>ROLES</div>
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
        <div>
          <div className='bg-[#f6f6f6] flex justify-between mx-[30px] mt-[30px] border-2 p-[8px]'>
            <div >
              <div className='flex gap-6 items-center'>
                <input type="checkbox" />
                <div>TITLE</div>
              </div>
            </div>
            <div>SYSTEM ROLE</div>
          </div>
        </div>
        <div className='border-2 mx-[30px] border-t-0 flex items-center justify-between relative'>
        <div className='flex  items-center gap-[25px] p-[8px] relative'>
                <input type="checkbox" />
<div className='border absolute h-[35px] w-[1px] top-0 left-[30px]'></div>

                <div className='text-[12px] cursor-pointer text-blue-400'>Administrator</div>
              </div>
              <div>
              <BiSolidCheckboxChecked  className='text-gray-600 mr-[50px]'/>
              <div className='border absolute h-[35px] w-[1px] top-0 right-[110px]'></div>
              </div>
        </div>
        <div className='border-2 mx-[30px] border-t-0 flex items-center justify-between relative'>
        <div className='flex  items-center gap-[25px] p-[8px] relative'>
                <input type="checkbox" />
                <div className='border absolute h-[35px] w-[1px] top-0 left-[30px]'></div>
                <div className='text-[12px] cursor-pointer text-blue-400'>Anonymous</div>
              </div>
              <div>
              <BiSolidCheckboxChecked  className='text-gray-600 mr-[50px]'/>
              <div className='border absolute h-[35px] w-[1px] top-0 right-[110px]'></div>
              </div>
        </div>
        <div className='border-2 mx-[30px] border-t-0 flex items-center justify-between relative'>
        <div className='flex  items-center gap-[25px] p-[8px] relative'>
                <input type="checkbox" />
                <div className='border absolute h-[35px] w-[1px] top-0 left-[30px]'></div>
                <div className='text-[12px] cursor-pointer text-blue-400'>Editors</div>
              </div>
              <div>
              <BiSolidCheckboxChecked  className='text-gray-600 mr-[50px]'/>
              <div className='border absolute h-[35px] w-[1px] top-0 right-[110px]'></div>
              </div>
        </div>
      </div>

    </div>
  )
}

export default Roles