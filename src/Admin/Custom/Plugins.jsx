import React from "react";
import { BiPlusMedical, BiSearch } from "react-icons/bi";
import { RiDeleteBin6Line, RiEqualizerFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
const Plugins = () => {
  return (
    <div>
      <Navbar />
      <Middlebar /> 
    </div> 
  );
};

export default Plugins;

const Navbar = () => {
  return (
    <div className="flex items-center justify-between ml-[240px] mt-3 border-b-[2px] pb-4">
      <div className="flex items-center  mx-6">
        <h1 className="text-[#666666] text-[16px] text-xl">PLUGINS</h1>
        <div className="flex items-center gap-3 bg-[#1C8B66] w-[90px] h-[30px] rounded-sm p-2 cursor-pointer ml-5 divide-x">
          <BiPlusMedical className=" text-white " />
          <h1 className="text-[12px] text-white  p-[6px] border-[#BEBEBE] pl-3">
            NEW
          </h1>
        </div>
        <div className="flex  ml-3">
          <div className="w-[50px] h-[30px] bg-[#F19494] border-r-[3px] border-white flex items-center justify-center rounded-sm">
            <RiDeleteBin6Line className="text-lg text-white" />
          </div>
          <div className="w-[50px] h-[30px] bg-[#F9D384] border-r-[3px] border-white flex items-center justify-center rounded-sm">
            <ImCross className="text-xs text-white" />
          </div>
          <div className="w-[50px] h-[30px] bg-[#70CFB0] flex items-center justify-center rounded-sm">
            <TiTick className="text-2xl text-white" />
          </div>
        </div>
      </div>
      <div className="w-[30px] h-[30px] bg-[#FFFFFF] border-2 rounded-md p-1 cursor-pointer mr-10 ">
        <BiSearch className="text-lg text-gray-500" />
      </div>
    </div>
  );
};

const Middlebar = () => {
  return (
    <div>
      <div className="ml-[240px] bg-[#F6F6F6] h-[92vh] p-9 ">
        <div className="w-[1180px] h-[367px] border   ">
          <div className="flex items-center border-b pb-1 pt-2">
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-4 m-3 shadow-md"></div>
            <h1 className="ml-7 text-[#666666]">TITLE</h1>
            <h1 className="ml-52 text-[#666666]">DESCRIPTION</h1>
            <h1 className="ml-64 text-[#666666]">VERSION</h1>
            <h1 className="ml-12 text-[#666666]">PRIORITY</h1>
            <h1 className="ml-12 text-[#666666]">ENABLED</h1>
            <h1 className="ml-20 text-[#666666]">CUSTOMIZE</h1>
          </div>
          <div className="flex items-center border-b  hover:bg-[#FAFAFA]">
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-4  border-r shadow-md"></div>
            <h1 className="ml-5 text-[#6581B2]   cursor-pointer text-[13px] border-l p-4 pl-4">
              MediaElementPlayer
            </h1>
            <h1 className="ml-24 text-[#666666] text-[13px] border-l p-4 pl-5">
              HTML5 Video/Audio Player
            </h1>
            <h1 className="ml-40 text-[#666666] text-[13px] border-l p-4 pl-10 ">
              1.5
            </h1>
            <h1 className="ml-10 text-[#666666] text-[13px] border-l p-4 pl-12 border-r pr-14 ">
              0
            </h1>
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-12   m-3 "></div>
            <div className=" border-l p-4 ml-14 pl-5 pt-2 ">
              <div className="w-[130px] h-[27px] rounded-sm bg-[#FFFFFF] flex items-center p-3 gap-2 border cursor-pointer hover:bg-gray-300 ">
                <RiEqualizerFill className=" text-[#666666] " />
                <h1 className="text-[#666666] text-[12px] border-l p-1 pl-3 ">
                  CUSTOMIZE
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center border-b  hover:bg-[#FAFAFA]">
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-4  border-r shadow-md"></div>
            <h1 className="ml-5 text-[#6581B2]   cursor-pointer text-[13px] border-l p-4 pl-4">
              MediaElementPlayer
            </h1>
            <h1 className="ml-24 text-[#666666] text-[13px] border-l p-4 pl-5">
              HTML5 Video/Audio Player
            </h1>
            <h1 className="ml-40 text-[#666666] text-[13px] border-l p-4 pl-4 ">
              3.3.0.0
            </h1>
            <h1 className="ml-[42px] text-[#666666] text-[13px] border-l p-4 pl-12 border-r pr-14 ">
              0
            </h1>
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-12   m-3 "></div>
            <div className=" border-l p-4 ml-14 pl-5 pt-2 ">
              <div className="w-[130px] h-[27px]    "></div>
            </div>
          </div>

          <div className="flex items-center border-b  hover:bg-[#FAFAFA]">
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-4  border-r shadow-md"></div>
            <h1 className="ml-5 text-[#6581B2]   cursor-pointer text-[13px] border-l p-4 pl-4">
              MediaElementPlayer
            </h1>
            <h1 className="ml-24 text-[#666666] text-[13px] border-l p-4 pl-5 ">
              HTML5 Video/Audio Player
            </h1>
            <h1 className="ml-40 text-[#666666] text-[13px] border-l p-4 pl-10 ">
              1.1
            </h1>
            <h1 className="ml-10 text-[#666666] text-[13px] border-l p-4 pl-12 border-r pr-14 ">
              0
            </h1>
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-12   m-3 "></div>
            <div className=" border-l p-4 ml-14 pl-5 pt-2 ">
              <div className="w-[130px] h-[27px] rounded-sm bg-[#FFFFFF] flex items-center p-3 gap-2 border cursor-pointer hover:bg-gray-300">
                <RiEqualizerFill className=" text-[#666666] " />
                <h1 className="text-[#666666] text-[12px] border-l p-1 pl-3 ">
                  CUSTOMIZE
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center border-b  hover:bg-[#FAFAFA]">
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-4  border-r shadow-md"></div>
            <h1 className="ml-5 text-[#6581B2]   cursor-pointer text-[13px] border-l p-4 pl-4">
              MediaElementPlayer
            </h1>
            <h1 className="ml-24 text-[#666666] text-[13px] border-l p-4 pl-5">
              HTML5 Video/Audio Player
            </h1>
            <h1 className="ml-40 text-[#666666] text-[13px] border-l p-4 pl-10 ">
              1.0
            </h1>
            <h1 className="ml-10 text-[#666666] text-[13px] border-l p-4 pl-12 border-r pr-14 ">
              0
            </h1>
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-12   m-3 "></div>
            <div className=" border-l p-4 ml-14 pl-5 pt-2 ">
              <div className="w-[130px] h-[27px] rounded-sm bg-[#FFFFFF] flex items-center p-3 gap-2 border cursor-pointer hover:bg-gray-300">
                <RiEqualizerFill className=" text-[#666666] " />
                <h1 className="text-[#666666] text-[12px] border-l p-1 pl-3 ">
                  CUSTOMIZE
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center border-b  hover:bg-[#FAFAFA]">
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-4  border-r shadow-md"></div>
            <h1 className="ml-5 text-[#6581B2]   cursor-pointer text-[13px] border-l p-4 pl-4">
              MediaElementPlayer
            </h1>
            <h1 className="ml-24 text-[#666666] text-[13px] border-l p-4 pl-5">
              HTML5 Video/Audio Player
            </h1>
            <h1 className="ml-40 text-[#666666] text-[13px] border-l p-4 pl-10 ">
              1.0
            </h1>
            <h1 className="ml-10 text-[#666666] text-[13px] border-l p-4 pl-12 border-r pr-14 ">
              0
            </h1>
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-12   m-3 "></div>
            <div className=" border-l p-4 ml-14 pl-5 pt-2 ">
              <div className="w-[130px] h-[27px] "></div>
            </div>
          </div>

          <div className="flex items-center  hover:bg-[#FAFAFA]">
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-4  border-r shadow-md"></div>
            <h1 className="ml-5 text-[#6581B2]   cursor-pointer text-[13px] border-l p-4 pl-4">
              MediaElementPlayer
            </h1>
            <h1 className="ml-24 text-[#666666] text-[13px] border-l p-4 pl-5">
              HTML5 Video/Audio Player
            </h1>
            <h1 className="ml-40 text-[#666666] text-[13px] border-l p-4 pl-10 ">
              1.0
            </h1>
            <h1 className="ml-10 text-[#666666] text-[13px] border-l p-4 pl-12 border-r pr-14 ">
              0
            </h1>
            <div className="w-[15px] h-[15px] border-[1px] bg-[#FFFFFF] rounded-sm border-gray-500 ml-12   m-3 "></div>
            <div className=" border-l p-4 ml-14 pl-5 pt-2 ">
              <div className="w-[130px] h-[27px] rounded-sm bg-[#FFFFFF] flex items-center p-3 gap-2 border cursor-pointer hover:bg-gray-300">
                <RiEqualizerFill className=" text-[#666666] " />
                <h1 className="text-[#666666] text-[12px] border-l p-1 pl-3 ">
                  CUSTOMIZE
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
