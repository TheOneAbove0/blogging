import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BsChevronDown } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { BiPlusMedical } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

import { AiOutlineSearch } from "react-icons/ai";
import SideBar from "../SideBar/SideBar";

export default function Posts() {
  const [allChecked, setAllChecked] = useState(false);
  const [justChecked, setjustChecked] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
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
        seven: checked,
        eight: checked,
        nine: checked,
        ten: checked,
      });
    } else {
      setjustChecked((prevChecked) => ({
        ...prevChecked,
        [name]: checked,
      }));

      // Update "all" checkbox state based on all checkboxes' selection
      setAllChecked(
        Object.values({ ...justChecked, [name]: checked }).every(
          (val) => val === true
        )
      );
    }
  };

  return (
    <div className="flex bg-gray-100">
      <div className=" w-[240px]">
        <SideBar />
      </div>
      <div className=" w-4/5 flex flex-col">
        <div className="h-[50px] flex justify-between px-[40px] items-center bg-white">
          <div className="flex justify-center items-center gap-5">
            <div className="text-[18px]">Comments</div>
            <div className="w-[100px] bg-[#24b685] hover:bg-green-800 h-[30px] flex">
              <div className="w-[30px] text-white flex justify-center items-center">
                <BiPlusMedical className="" />
              </div>
              <div className="w-[1px] bg-gray-500"></div>
              <div className="text-white flex justify-center items-center w-20">
                NEW
              </div>
            </div>

            <div className="w-[150px] h-[30px]  bg-white rounded-md flex gap-[0.1px] ">
              <div
                className={`w-1/3 bg-red-600 text-white flex justify-center items-center border ${
                  allChecked || justChecked.one ? "opacity-100" : "opacity-50"
                }`}
              >
                <RiDeleteBin6Line />
              </div>
              <div
                className={`w-1/3 bg-yellow-400 text-white text-xl flex justify-center items-center border ${
                  allChecked || justChecked.one ? "opacity-100" : "opacity-50"
                }`}
              >
                <FaNewspaper />
              </div>
              <div
                className={`w-1/3 bg-green-600 text-white text-2xl flex justify-center items-center border ${
                  allChecked || justChecked.one ? "opacity-100" : "opacity-50"
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
            <div className="h-[40px] flex gap-[590px]  ">
              <div className="flex gap-9 items-center">
                <input
                  type="checkbox"
                  name="all"
                  checked={allChecked}
                  onChange={handleCheckboxChange}
                />

                <div>TITLE</div>
              </div>
              <div className="flex gap-14">
                <div className="flex justify-center items-center">DATE</div>
                <div className="flex gap-6 items-center">
                  <div>AUTHOR</div>
                  <div>APPROVED</div>
                  <div>SPAM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[0.1px] bg-gray-300"></div>
          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px] "></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="w-[40px] flex justify-center items-center bg-white ">
              <BsFillPersonFill className="h-9 w-14 text-gray-400 opacity-50" />
            </div>
            <div className="bg-white w-[560px] flex justify-between pl-2 items-center pr-2">
              <div className=" text-blue-700 text-[13.8px]  ">
                AI powered Personal Assistant for Windows
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[120px] text-[13.8px]"
            >
              2023-06-20
            </div>
            <div className="bg-white w-[90px] flex justify-center items-center ">
              <div
                className="bg-white text-gray-400 flex justify-center 
  items-center w-[60px] text-[13.8px]"
              >
                56
              </div>
            </div>

            <div className="bg-white w-[90px] flex items-center justify-center">
              <div className="bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]">
                <TiTick
                  className="text-white
   font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="bg-white w-[72.5px] flex justify-center items-center">
              <input type="checkbox"></input>
            </div>
          </div>

          <div className="h-[0.1px] bg-gray-300"></div>

          <div className="h-[1px] bg-gray-300"></div>

          <div className="h-[0.1px] bg-gray-300"></div>
          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px] "></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="w-[40px] flex justify-center items-center bg-white ">
              <BsFillPersonFill className="h-9 w-14 text-gray-400 opacity-50" />
            </div>
            <div className="bg-white w-[560px] flex justify-between pl-2 items-center pr-2">
              <div className=" text-blue-700 text-[13.8px]  ">
                AI powered Personal Assistant for Windows
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[120px] text-[13.8px]"
            >
              2023-06-20
            </div>
            <div className="bg-white w-[90px] flex justify-center items-center ">
              <div
                className="bg-white text-gray-400 flex justify-center 
  items-center w-[60px] text-[13.8px]"
              >
                56
              </div>
            </div>

            <div className="bg-white w-[90px] flex items-center justify-center">
              <div className="bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]">
                <TiTick
                  className="text-white
   font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="bg-white w-[72.5px] flex justify-center items-center">
              <input type="checkbox"></input>
            </div>
          </div>

          <div className="h-[0.1px] bg-gray-300"></div>

          <div className="h-[1px] bg-gray-300"></div>

          <div className="h-[0.1px] bg-gray-300"></div>
          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px] "></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="w-[40px] flex justify-center items-center bg-white ">
              <BsFillPersonFill className="h-9 w-14 text-gray-400 opacity-50" />
            </div>
            <div className="bg-white w-[560px] flex justify-between pl-2 items-center pr-2">
              <div className=" text-blue-700 text-[13.8px]  ">
                AI powered Personal Assistant for Windows
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[120px] text-[13.8px]"
            >
              2023-06-20
            </div>
            <div className="bg-white w-[90px] flex justify-center items-center ">
              <div
                className="bg-white text-gray-400 flex justify-center 
  items-center w-[60px] text-[13.8px]"
              >
                56
              </div>
            </div>

            <div className="bg-white w-[90px] flex items-center justify-center">
              <div className="bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]">
                <TiTick
                  className="text-white
   font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="bg-white w-[72.5px] flex justify-center items-center">
              <input type="checkbox"></input>
            </div>
          </div>

          <div className="h-[0.1px] bg-gray-300"></div>

          <div className="h-[0.1px] bg-gray-300"></div>
          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px] "></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="w-[40px] flex justify-center items-center bg-white ">
              <BsFillPersonFill className="h-9 w-14 text-gray-400 opacity-50" />
            </div>
            <div className="bg-white w-[560px] flex justify-between pl-2 items-center pr-2">
              <div className=" text-blue-700 text-[13.8px]  ">
                AI powered Personal Assistant for Windows
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[120px] text-[13.8px]"
            >
              2023-06-20
            </div>
            <div className="bg-white w-[90px] flex justify-center items-center ">
              <div
                className="bg-white text-gray-400 flex justify-center 
  items-center w-[60px] text-[13.8px]"
              >
                56
              </div>
            </div>

            <div className="bg-white w-[90px] flex items-center justify-center">
              <div className="bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]">
                <TiTick
                  className="text-white
   font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="bg-white w-[72.5px] flex justify-center items-center">
              <input type="checkbox"></input>
            </div>
          </div>

          <div className="h-[0.1px] bg-gray-300"></div>

          <div className="h-[1px] bg-gray-300"></div>

          <div className="h-[0.1px] bg-gray-300"></div>
          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px] "></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="w-[40px] flex justify-center items-center bg-white ">
              <BsFillPersonFill className="h-9 w-14 text-gray-400 opacity-50" />
            </div>
            <div className="bg-white w-[560px] flex justify-between pl-2 items-center pr-2">
              <div className=" text-blue-700 text-[13.8px]  ">
                AI powered Personal Assistant for Windows
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[120px] text-[13.8px]"
            >
              2023-06-20
            </div>
            <div className="bg-white w-[90px] flex justify-center items-center ">
              <div
                className="bg-white text-gray-400 flex justify-center 
  items-center w-[60px] text-[13.8px]"
              >
                56
              </div>
            </div>

            <div className="bg-white w-[90px] flex items-center justify-center">
              <div className="bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]">
                <TiTick
                  className="text-white
   font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="bg-white w-[72.5px] flex justify-center items-center">
              <input type="checkbox"></input>
            </div>
          </div>

          <div className="h-[0.1px] bg-gray-300"></div>

          <div className="h-[1px] bg-gray-300"></div>

          <div className="h-[0.1px] bg-gray-300"></div>
          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px] "></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="w-[40px] flex justify-center items-center bg-white ">
              <BsFillPersonFill className="h-9 w-14 text-gray-400 opacity-50" />
            </div>
            <div className="bg-white w-[560px] flex justify-between pl-2 items-center pr-2">
              <div className=" text-blue-700 text-[13.8px]  ">
                AI powered Personal Assistant for Windows
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[120px] text-[13.8px]"
            >
              2023-06-20
            </div>
            <div className="bg-white w-[90px] flex justify-center items-center ">
              <div
                className="bg-white text-gray-400 flex justify-center 
  items-center w-[60px] text-[13.8px]"
              >
                56
              </div>
            </div>

            <div className="bg-white w-[90px] flex items-center justify-center">
              <div className="bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]">
                <TiTick
                  className="text-white
   font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="bg-white w-[72.5px] flex justify-center items-center">
              <input type="checkbox"></input>
            </div>
          </div>

          <div className="h-[0.1px] bg-gray-300"></div>

          <div className="h-[1px] bg-gray-300"></div>

          <div className="h-[0.1px] bg-gray-300"></div>
          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px] "></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="w-[40px] flex justify-center items-center bg-white ">
              <BsFillPersonFill className="h-9 w-14 text-gray-400 opacity-50" />
            </div>
            <div className="bg-white w-[560px] flex justify-between pl-2 items-center pr-2">
              <div className=" text-blue-700 text-[13.8px]  ">
                AI powered Personal Assistant for Windows
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[120px] text-[13.8px]"
            >
              2023-06-20
            </div>
            <div className="bg-white w-[90px] flex justify-center items-center ">
              <div
                className="bg-white text-gray-400 flex justify-center 
  items-center w-[60px] text-[13.8px]"
              >
                56
              </div>
            </div>

            <div className="bg-white w-[90px] flex items-center justify-center">
              <div className="bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]">
                <TiTick
                  className="text-white
   font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="bg-white w-[72.5px] flex justify-center items-center">
              <input type="checkbox"></input>
            </div>
          </div>

          <div className="h-[0.1px] bg-gray-300"></div>

          <div className="h-[1px] bg-gray-300"></div>

          <div className="h-[0.1px] bg-gray-300"></div>
          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px] "></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="w-[40px] flex justify-center items-center bg-white ">
              <BsFillPersonFill className="h-9 w-14 text-gray-400 opacity-50" />
            </div>
            <div className="bg-white w-[560px] flex justify-between pl-2 items-center pr-2">
              <div className=" text-blue-700 text-[13.8px]  ">
                AI powered Personal Assistant for Windows
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[120px] text-[13.8px]"
            >
              2023-06-20
            </div>
            <div className="bg-white w-[90px] flex justify-center items-center ">
              <div
                className="bg-white text-gray-400 flex justify-center 
  items-center w-[60px] text-[13.8px]"
              >
                56
              </div>
            </div>

            <div className="bg-white w-[90px] flex items-center justify-center">
              <div className="bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]">
                <TiTick
                  className="text-white
   font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="bg-white w-[72.5px] flex justify-center items-center">
              <input type="checkbox"></input>
            </div>
          </div>

          <div className="h-[1px] bg-gray-300"></div>

          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px] "></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="w-[40px] flex justify-center items-center bg-white ">
              <BsFillPersonFill className="h-9 w-14 text-gray-400 opacity-50" />
            </div>
            <div className="bg-white w-[560px] flex justify-between pl-2 items-center pr-2">
              <div className=" text-blue-700 text-[13.8px]  ">
                AI powered Personal Assistant for Windows
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div
              className="bg-white text-gray-400 flex justify-center 
  items-center w-[120px] text-[13.8px]"
            >
              2023-06-20
            </div>
            <div className="bg-white w-[90px] flex justify-center items-center ">
              <div
                className="bg-white text-gray-400 flex justify-center 
  items-center w-[60px] text-[13.8px]"
              >
                56
              </div>
            </div>

            <div className="bg-white w-[90px] flex items-center justify-center">
              <div className="bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]">
                <TiTick
                  className="text-white
   font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="bg-white w-[72.5px] flex justify-center items-center">
              <input type="checkbox"></input>
            </div>
          </div>

          <div className="h-[1px] bg-gray-300"></div>

          <div className="bg-gray-300 flex gap-[1px] h-[40px]  ">
            <div className="w-[0.1px] "></div>
            <div className="bg-white w-[60px] flex items-center justify-center">
              <input
                type="checkbox"
                name="two"
                checked={justChecked.two}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="w-[40px] flex justify-center items-center bg-white ">
              <BsFillPersonFill className="h-9 w-14 text-gray-400 opacity-50" />
            </div>
            <div className="bg-white w-[560px] flex justify-between pl-2 items-center pr-2">
              <div className=" text-blue-700 text-[13.8px]  ">
                AI powered Personal Assistant for Windows
              </div>
              <div>
                <BiLinkExternal />
              </div>
            </div>
            <div className="bg-white text-gray-400 flex justify-center items-center w-[120px] text-[13.8px]">
              2023-06-20
            </div>
            <div className="bg-white w-[90px] flex justify-center items-center ">
              <div
                className="bg-white text-gray-400 flex justify-center 
  items-center w-[60px] text-[13.8px]"
              >
                56
              </div>
            </div>

            <div className="bg-white w-[90px] flex items-center justify-center">
              <div className="bg-gray-500 rounded-sm opacity-70 w-[14px] h-[14px] flex justify-center items-center text-[20px]">
                <TiTick
                  className="text-white
   font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="bg-white w-[72.5px] flex justify-center items-center">
              <input type="checkbox"></input>
            </div>
          </div>

          <div className="h-[1px] bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
