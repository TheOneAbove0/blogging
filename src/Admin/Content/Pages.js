import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BsChevronDown } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { BiPlusMedical } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import pages from "./PagesData";

export default function Pages() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  const handleCheckItem = (itemId) => {
    if (itemId === "all") {
      if (checkAll) {
        setCheckedItems([]);
      } else {
        const allIds = pages.map((item) => item.id);
        setCheckedItems(allIds);
      }
      setCheckAll(!checkAll);
    } else {
      if (checkedItems.includes(itemId)) {
        setCheckedItems(checkedItems.filter((item) => item !== itemId));
      } else {
        setCheckedItems([...checkedItems, itemId]);
      }
    }
  };

  return (
    <div className="flex bg-gray-100">
      {/* <div className="bg-blue-500 w-1/5 h-screen">sdgsrg</div> */}
      <div className="w-[1400px] ml-[240px] flex flex-col">
        <div className="h-[70px] flex justify-between px-[40px] items-center bg-white">
          <div className="flex justify-center items-center gap-5">
            <div className="text-[18px] text-black opacity-60">PAGES</div>
            <div className="w-[100px] bg-[#24b685] hover:bg-green-800 h-[30px] flex">
              <div className="w-[30px] text-white flex justify-center items-center">
                <BiPlusMedical className="" />
              </div>
              <div className="w-[1px] bg-gray-700 opacity-30"></div>
              <div className="text-white flex justify-center items-center w-20">
                NEW
              </div>
            </div>
            <div className="w-[150px] h-[30px] bg-white rounded-md flex gap-[0.1px]">
              <div
                className={`w-1/3 flex justify-center items-center border ${
                  checkedItems.length > 0 ? "bg-red-600" : "bg-red-600 opacity-50"
                }`}
              >
                <RiDeleteBin6Line className="text-white" />
              </div>
              <div
                className={`w-1/3 flex justify-center items-center border  ${
                  checkedItems.length > 0 ? "bg-yellow-400" : "bg-yellow-400 opacity-50"
                } text-xl`}
              >
                <FaNewspaper className="text-white" />
              </div>
              <div
                className={`w-1/3 flex justify-center items-center border ${
                  checkedItems.length > 0 ? "bg-green-600" : "bg-green-600 opacity-50"
                } text-2xl`}
              >
                <TiTick className="text-white"/>
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
          <div className="border border-gray-300 px-6 w-[1040px] ">
            <div className="h-[40px] flex gap-[370px] ">
              <div className="flex gap-9 items-center">
                <input
                  type="checkbox"
                  name="all"
                  checked={checkAll}
                  onChange={() => handleCheckItem("all")}
                />
                <div className="text-black opacity-70 text-[15px]">TITLE</div>
              </div>
              <div className="flex gap-11 justify-center items-center text-[15px] opacity-70">
                <div>PARENT</div>
                <div>SORT ORDER</div>
                <div>DATE</div>
                <div>SHOW IN LIST</div>
                <div>PUBLISHED</div>
              </div>
            </div>
          </div>

          {/* Euta row of table */}
          <div className="">
            {pages.map((item) => (
              <div className="flex flex-col w-[1040px]">
                <div
                  className={`bg-gray-300  flex  gap-[1px] w-[1040px]  h-[40px] ${
                    checkedItems.includes(item.id) ? "opacity-100" : ""
                  }`}
                  key={item.id}
                >
                  <div className="w-[0.1px]"></div>
                  <div className="bg-white w-[60px] flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleCheckItem(item.id)}
                    />
                  </div>
                  <div className="bg-white w-[400px] flex justify-between pl-[4px] items-center pr-[4px]">
                    <div className="text-blue-700 text-[13.8px] text-opacity-80">
                      {item.title}
                    </div>
                    <div>
                      <BiLinkExternal className="text-gray-300" />
                    </div>
                  </div>
                  <div className="bg-white w-[100px] text-gray-700 text-opacity-60 flex justify-center items-center text-[13.8px]">
                    {item.parent}
                  </div>
                  <div className="bg-white w-[120px] flex justify-center items-center">
                    <div className="rounded-3xl text-gray-700 opacity-50 w-[25px] h-[20px] flex justify-center items-center">
                      {item.sortOrder}
                    </div>
                  </div>
                  <div className="bg-white text-gray-400 flex justify-center items-center w-[100px] text-[13.8px]">
                    {item.date}
                  </div>
                  <div className="bg-white w-[120px] flex items-center justify-center">
                    <div className="bg-gray-500 rounded-sm text-white font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60">
                      <TiTick />
                    </div>
                  </div>
                  <div className="bg-white w-[132px] flex items-center justify-center">
                    <div className="bg-gray-500 rounded-sm text-white font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60">
                      <TiTick />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-300 h-[1px]"></div>
              </div>
            ))}
          </div>
          {/* Euta row of table */}
        </div>
      </div>
    </div>
  );
}
