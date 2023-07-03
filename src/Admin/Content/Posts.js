import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaNewspaper } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { BsChevronDown } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { BiPlusMedical } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import posts from './PostsData.js';

export default function Posts() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  const handleCheckItem = (itemId) => {
    if (itemId === 'all') {
      if (checkAll) {
        setCheckedItems([]);
      } else {
        // Add all item IDs to checkedItems
        const allIds = posts.map((item) => item.id);
        setCheckedItems(allIds);
      }
      setCheckAll(!checkAll);
    } else {
      if (checkedItems.includes(itemId)) {
        // Remove itemId from checkedItems
        setCheckedItems(checkedItems.filter((item) => item !== itemId));
      } else {
        // Add itemId to checkedItems
        setCheckedItems([...checkedItems, itemId]);
      }
    }
  };

  return (
    <div className="flex bg-gray-100">
      <div className="bg-blue-500 w-1/5"></div>
      <div className="w-4/5 flex flex-col">
        <div className="h-[50px] flex justify-between px-[40px] items-center bg-white">
          <div className="flex justify-center items-center gap-5">
            <div className="text-[18px] text-black opacity-70">POSTS</div>
            <div className="w-[100px] bg-[#24b685] hover:bg-green-800 h-[30px] flex">
              <div className="w-[30px] text-white flex justify-center items-center">
                <BiPlusMedical className="" />
              </div>
              <div className="w-[1px] bg-gray-500"></div>
              <div className="text-white flex justify-center items-center w-20">NEW</div>
            </div>
            <div className="w-[150px] h-[30px] bg-white rounded-md flex gap-[0.1px]">
              <div
                 className={`w-1/3 flex justify-center items-center border ${
                  checkedItems.length > 0 ? "bg-red-600" : "bg-red-600 opacity-50"
                }`}
              >
                <RiDeleteBin6Line className='text-white' />
              </div>
              <div
                 className={`w-1/3 flex justify-center items-center border  ${
                  checkedItems.length > 0 ? "bg-yellow-400" : "bg-yellow-400 opacity-50"
                } text-xl`}
              >
                <FaNewspaper className='text-white' />
              </div>
              <div
                 className={`w-1/3 flex justify-center items-center border ${
                  checkedItems.length > 0 ? "bg-green-600" : "bg-green-600 opacity-50"
                } text-2xl`}
              >
                <TiTick className='text-white'/>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="w-[80px] h-[30px] rounded-sm bg-white-600 flex">
              <div className="w-2/3 bg-white text-black flex justify-center items-center border border-gray-400">
                ALL
              </div>
              <div className="w-1/3 bg-white text-black text-xl flex justify-center items-center border border-gray-400">
                <BsChevronDown />
              </div>
            </div>
            <div className="w-[40px] h-[30px] rounded-sm bg-white flex border border-gray-400 justify-center items-center text-[25px]">
              <AiOutlineSearch />
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-1"></div>

        {/* table area */}
        <div className="flex flex-col mt-5 ml-5 mb-8 mr-8">
          <div className="bg-white border border-gray-300 px-6 w-[1050px]">
            <div className="h-[40px] flex gap-[540px]">
              <div className="flex gap-9 items-center">
                <div>
                  <input
                    type="checkbox"
                    name="all"
                    checked={checkAll}
                    onChange={() => handleCheckItem('all')}
                  />
                </div>
                <div>TITLE</div>
              </div>
              <div className="flex gap-8 items-center">
                <div>AUTHOR</div>
                <div>COMMENTS</div>
                <div>DATE</div>
                <div>PUBLISHED</div>
              </div>
            </div>
          </div>

          {posts.map((item) => (
            <div className='flex flex-col w-[1050px]'>
            <div key={item.id} className="bg-gray-300 flex gap-[1px] h-[40px] w-[1050px]">
              <div className="w-[0.1px]"></div>
              <div className="bg-white w-[60px] flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item.id)}
                  onChange={() => handleCheckItem(item.id)}
                />
              </div>
              <div className="bg-white w-[560px] flex justify-between pl-[4px] items-center pr-[4px]">
                <div className="text-blue-700 text-[13.8px]">{item.title}</div>
                <div>
                  <BiLinkExternal />
                </div>
              </div>
              <div className="bg-white w-[100px] text-blue-700 flex justify-center items-center text-[13.8px]">
                {item.author}
              </div>
              <div className="bg-white w-[100px] flex justify-center items-center">
                <div className="bg-green-700 rounded-3xl text-white font-bold w-[25px] h-[20px] flex justify-center items-center">
                  {item.number}
                </div>
              </div>
              <div className="bg-white text-gray-400 flex justify-center items-center w-[100px] text-[13.8px]">
                {item.date}
              </div>
              <div className="bg-white w-[130px] flex items-center justify-center">
                <div className="bg-gray-500 rounded-md text-white font-semibold w-[20px] h-[20px] flex justify-center items-center text-[20px]">
                  <TiTick />
                </div>
              </div>
              <div className="w-[0.1px]"></div>
              </div>
              <div className="bg-gray-300 h-[1px]"></div>
            </div>
            
          ))}

         
        </div>
      </div>
    </div>
  );
}
