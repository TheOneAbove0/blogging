import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaNewspaper } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { BsChevronDown } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { BiPlusMedical } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

import comments from './CommentsData';

export default function Comments() {
  const [checkAll, setCheckAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckItem = (itemId) => {
    if (itemId === 'all') {
      setCheckAll(!checkAll);
      setCheckedItems(checkAll ? [] : comments.map((item) => item.id));
    } else {
      if (checkedItems.includes(itemId)) {
        setCheckedItems(checkedItems.filter((item) => item !== itemId));
      } else {
        setCheckedItems([...checkedItems, itemId]);
      }
    }
  };

  return (
    <div className='flex bg-gray-100'>
      {/* <div className='bg-blue-500 w-1/5'></div> */}
      <div className='w-[1400px] ml-[240px] flex flex-col'>
        <div className='h-[50px] flex justify-between px-[40px] items-center bg-white'>
          <div className='flex justify-center items-center gap-5'>
            <div className='text-[18px] text-black opacity-70'>COMMENTS</div>
            <div className='w-[100px] bg-[#24b685] hover:bg-green-800 h-[30px] flex'>
              <div className='w-[30px] text-white flex justify-center items-center'>
                <BiPlusMedical className='' />
              </div>
              <div className='w-[1px] bg-gray-500'></div>
              <div className='text-white flex justify-center items-center w-20'>NEW</div>
            </div>
            <div className='w-[150px] h-[30px] bg-white rounded-md flex gap-[0.1px]'>
              <div 
               className={`w-1/3 flex justify-center items-center border ${
                checkedItems.length > 0 ? "bg-red-600" : "bg-red-600 opacity-50"
              }`}>
                <RiDeleteBin6Line className='text-white' />
              </div>
              <div 
              className={`w-1/3 flex justify-center items-center border  ${
                checkedItems.length > 0 ? "bg-yellow-400" : "bg-yellow-400 opacity-50"
              } text-xl`}
              >
                <FaNewspaper className='text-white'/>
              </div>
              <div 
               className={`w-1/3 flex justify-center items-center border ${
                checkedItems.length > 0 ? "bg-green-600" : "bg-green-600 opacity-50"
              } text-2xl`}>
                <TiTick className='text-white'/>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center gap-5'>
            <div className='w-[80px] h-[30px] rounded-sm bg-white-600 flex'>
              <div className='w-2/3 bg-white text-black flex justify-center items-center border border-gray-400'>
                ALL
              </div>
              <div className='w-1/3 bg-white text-black text-xl flex justify-center items-center border border-gray-400'>
                <BsChevronDown />
              </div>
            </div>
            <div className='w-[40px] h-[30px] rounded-sm bg-white flex border border-gray-400 justify-center items-center text-[25px]'>
              <AiOutlineSearch />
            </div>
          </div>
        </div>
        <div className='bg-gray-200 h-1'></div>

        {/* table area */}
        <div className='flex flex-col mt-5 ml-5 mb-8 mr-8'>
          <div className='bg-white border border-gray-300 px-6 w-[1040px]'>
            <div className='h-[40px] flex gap-[590px]'>
              <div className='flex gap-9 items-center'>
                <input
                  type='checkbox'
                  name='all'
                  checked={checkAll}
                  onChange={() => handleCheckItem('all')}
                />
                <div>TITLE</div>
              </div>
              <div className='flex gap-14'>
                <div className='flex justify-center items-center'>DATE</div>
                <div className='flex gap-6 items-center'>
                  <div>AUTHOR</div>
                  <div>APPROVED</div>
                  <div>SPAM</div>
                </div>
              </div>
            </div>
          </div>

          {comments.map((item) => (
            <div className='flex flex-col'>
            <div key={item.id} className='h-[40px] bg-gray-300 flex gap-[1px] w-[1040px]'>
              <div className='w-[0.1px]'></div>
              <div className='bg-white w-[60px] flex items-center justify-center'>
                <input
                  type='checkbox'
                  checked={checkedItems.includes(item.id)}
                  onChange={() => handleCheckItem(item.id)}
                />
              </div>
              <div className='w-[40px] flex justify-center items-center bg-white'>
                <BsFillPersonFill className='h-9 w-14 text-gray-400 opacity-50' />
              </div>
              <div className='bg-white w-[560px] flex justify-between pl-2 items-center pr-2'>
                <div className='text-blue-700 text-[13.8px]'>{item.title}</div>
                <div>
                  <BiLinkExternal />
                </div>
              </div>
              <div className='bg-white text-gray-400 flex justify-center items-center w-[120px] text-[13.8px]'>
                {item.date}
              </div>
              <div className='bg-white w-[90px] flex justify-center items-center'>
                <div className='bg-white text-gray-400 flex justify-center items-center w-[60px] text-[13.8px]'>
                  {item.author}
                </div>
              </div>
              <div className='bg-white w-[90px] flex items-center justify-center'>
                <div className='bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]'>
                  <TiTick className='text-white font-semibold opacity-70' />
                </div>
              </div>
              <div className='bg-white w-[72.5px] flex justify-center items-center'>
                <input type='checkbox'></input>
              </div>
              <div className='h-[0.1px] bg-gray-300'></div>
            </div>
            <div className='h-[1px] bg-gray-300'></div>
            </div>
          ))}

         
         
        </div>
      </div>
    </div>
  );
}
