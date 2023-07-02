import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BsChevronDown } from "react-icons/bs";

import { BiLinkExternal } from "react-icons/bi";
import { BiPlusMedical } from "react-icons/bi";

import { AiOutlineSearch } from "react-icons/ai";

export default function Pages() {
  const [allChecked, setAllChecked] = useState(false);
  const [justChecked, setjustChecked] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "all") {
      setAllChecked(checked);
      setjustChecked({
        one: checked,
        two: checked,
        three: checked,
        four: checked,
        five: checked,
        six: checked,
      
      });
    } else {
      setjustChecked((prevChecked) => ({
        ...prevChecked,
        [name]: checked,
      }));

      setAllChecked(
        Object.values({ ...justChecked, [name]: checked }).every(
          (val) => val === true
        )
      );
    }
  };

  return (
    <div className="flex bg-gray-100">
      <div className=" bg-blue-500 w-1/5">sdgsrg</div>
      <div className=" w-4/5 flex flex-col">
        <div className="h-[50px] flex justify-between px-[40px] items-center bg-white">
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

            <div className="w-[150px] h-[30px]  bg-white rounded-md flex gap-[0.1px] ">
              <div
                className={`w-1/3 bg-red-600 text-white flex justify-center items-center border ${
                  allChecked || justChecked.one|| justChecked.two || justChecked.three  || justChecked.four || justChecked.five || justChecked.six  ? "opacity-100" : "opacity-50"
                }`}
              >
                <RiDeleteBin6Line />
              </div>
              <div
                className={`w-1/3 bg-yellow-400 text-white text-xl flex justify-center items-center border ${
                  allChecked || justChecked.one|| justChecked.two || justChecked.three  || justChecked.four || justChecked.five || justChecked.six  ? "opacity-100" : "opacity-50"
                }`}
              >
                <FaNewspaper />
              </div>
              <div
                className={`w-1/3 bg-green-600 text-white text-2xl flex justify-center items-center border ${
                  allChecked || justChecked.one|| justChecked.two || justChecked.three  || justChecked.four || justChecked.five || justChecked.six  ? "opacity-100" : "opacity-50"
                }`}
              >
                <TiTick />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="w-[80px] h-[30px] rounded-sm bg-white-600 flex  ">
              <div className="w-2/3 bg-white text-black flex justify-center items-center border border-gray-400">
                ALL
              </div>
              <div className="w-1/3 bg-white text-black text-xl flex justify-center items-center border border-gray-400">
                <BsChevronDown />
              </div>
            </div>
            <div
              className="w-[40px] h-[30px] rounded-sm bg-white flex border
  border-gray-400  justify-center items-center text-[25px] "
            >
              <AiOutlineSearch />
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-1"></div>

        {/* table area */}

        <div className="flex flex-col mt-5 ml-5 mb-8 mr-8">
          <div className=" bg-white border border-gray-300 px-6  ">
            <div className="h-[40px] flex gap-[370px]  ">
              <div className="flex gap-9 items-center">
                <input
                  type="checkbox"
                  name="all"
                  checked={allChecked}
                  onChange={handleCheckboxChange}
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

          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px]"></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="one"
                checked={justChecked.one}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="bg-white w-[400px] flex justify-between pl-[4px] items-center pr-[4px]">
              <div className=" text-blue-700 text-[13.8px] text-opacity-80">
              Custom Themes
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div className="bg-white w-[100px]  text-gray-700  text-opacity-60 flex justify-center items-center text-[13.8px]">
              About
            </div>
            <div className="bg-white w-[120px] flex justify-center items-center ">
              <div
                className=" rounded-3xl text-gray-700 opacity-50
    w-[25px] h-[20px] flex justify-center items-center"
              >
                0
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]"
            >
              2023-05-30
            </div>
            <div className="bg-white w-[120px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="bg-white w-[132px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="w-[0.1px]"></div>
          </div>
            <div className="h-[1px] bg-gray-300"></div>




          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px]"></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="bg-white w-[400px] flex justify-between pl-[4px] items-center pr-[4px]">
              <div className=" text-blue-700 text-[13.8px] text-opacity-80">
              Matching Themes
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div className="bg-white w-[100px]  text-gray-700  text-opacity-60 flex justify-center items-center text-[13.8px]">
            About
        
            </div>
            <div className="bg-white w-[120px] flex justify-center items-center ">
              <div
                className=" rounded-3xl text-gray-700 opacity-50
    w-[25px] h-[20px] flex justify-center items-center"
              >
                0
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]"
            >
              2023-05-30
            </div>
            <div className="bg-white w-[120px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="bg-white w-[132px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="w-[0.1px]"></div>
          </div>
          <div className="h-[1px] bg-gray-300"></div>





          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px]"></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="three"
                checked={justChecked.three}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="bg-white w-[400px] flex justify-between pl-[4px] items-center pr-[4px]">
              <div className=" text-blue-700 text-[13.8px] text-opacity-80">
              Page One
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div className="bg-white w-[100px]  text-gray-700  text-opacity-60 flex justify-center items-center text-[13.8px]">
          Example
            </div>
            <div className="bg-white w-[120px] flex justify-center items-center ">
              <div
                className=" rounded-3xl text-gray-700 opacity-50
    w-[25px] h-[20px] flex justify-center items-center"
              >
                0
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]"
            >
              2023-05-30
            </div>
            <div className="bg-white w-[120px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="bg-white w-[132px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="w-[0.1px]"></div>
          </div>
          <div className="h-[1px] bg-gray-300"></div>


          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px]"></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="four"
                checked={justChecked.four}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="bg-white w-[400px] flex justify-between pl-[4px] items-center pr-[4px]">
              <div className=" text-blue-700  text-[13.8px] text-opacity-80">
              Page Two
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div className="bg-white w-[100px]  text-gray-700  text-opacity-60 flex justify-center items-center text-[13.8px]">
      Example
            </div>
            <div className="bg-white w-[120px] flex justify-center items-center ">
              <div
                className=" rounded-3xl text-gray-700 opacity-50
    w-[25px] h-[20px] flex justify-center items-center"
              >
                0
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]"
            >
              2023-05-30
            </div>
            <div className="bg-white w-[120px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="bg-white w-[132px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="w-[0.1px]"></div>
          </div>
          <div className="h-[1px] bg-gray-300"></div>


          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px]"></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="five"
                checked={justChecked.five}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="bg-white w-[400px] flex justify-between pl-[4px] items-center pr-[4px]">
              <div className=" text-blue-700 text-[13.8px] text-opacity-80">
            About
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div className="bg-white w-[100px]  text-gray-700  text-opacity-60 flex justify-center items-center text-[13.8px]">
        
            </div>
            <div className="bg-white w-[120px] flex justify-center items-center ">
              <div
                className=" rounded-3xl text-gray-700 opacity-50
    w-[25px] h-[20px] flex justify-center items-center"
              >
                0
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]"
            >
              2023-05-30
            </div>
            <div className="bg-white w-[120px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="bg-white w-[132px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="w-[0.1px]"></div>
          </div>
          <div className="h-[1px] bg-gray-300"></div>


          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px]"></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="six"
                checked={justChecked.six}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="bg-white w-[400px] flex justify-between pl-[4px] items-center pr-[4px]">
              <div className=" text-blue-700 text-[13.8px] text-opacity-80">
               Example
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div className="bg-white w-[100px]  text-gray-700  text-opacity-60 flex justify-center items-center text-[13.8px]">
       
            </div>
            <div className="bg-white w-[120px] flex justify-center items-center ">
              <div
                className=" rounded-3xl text-gray-700 opacity-50
    w-[25px] h-[20px] flex justify-center items-center"
              >
                0
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[100px] text-[13.8px]"
            >
              2023-05-30
            </div>
            <div className="bg-white w-[120px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="bg-white w-[132px] flex items-center justify-center">
              <div
                className="bg-gray-500 rounded-sm text-white
   font-semibold w-[15px] h-[15px] flex justify-center items-center bg-opacity-60"
              >
                <TiTick />
              </div>
            </div>
            <div className="w-[0.1px]"></div>
          </div>
          <div className="h-[1px] bg-gray-300"></div>


          

         




        
        </div>
      </div>
    </div>
  );
}
