import React from "react";
import { BsCheck } from "react-icons/bs";

const Basic = () => {
  return (
    <div className="bg-[#f6f6f6] ml-[240px] w-[1400px] h-[97vh]">
      <div className="flex gap-[20px] item-center p-[20px] bg-white">
        <div className="text-[18px]">BASIC</div>
        <div className="flex items-center justify-between cursor-pointer bg-[#70cfb0] p-[0px] text-white hover:bg-green-800">
          <BsCheck className="text-[25px] border-r-[1px] border-green-600" />
          <div className=" px-3 text-[12px] ">SAVE</div>
        </div>
      </div>

      <div>
        <div className="ml-[30px] mt-[30px]">Blog Title</div>
        <input
          placeholder="Name of the blog"
          type="text"
          className="ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]"
        />
        <div className="ml-[30px] mt-[19px]">Description</div>
        <input
          placeholder="Short description of the blog"
          type="text"
          className="ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]"
        />
        <div className="ml-[30px] mt-[19px]">Posts per page</div>
        <input
          placeholder="6"
          type="text"
          className="ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]"
        />
        <div className="flex ml-[30px] gap-1 mt-[20px]">
          <input type="checkbox" />
          <div>Add date to post links</div>
        </div>
        <div className="flex ml-[30px] gap-1 mt-[20px] mb-[50px]">
          <input type="checkbox" />
          <div>Only show description of posts</div>
        </div>

        <div className="ml-[30px] mt-[19px]">Blog Language</div>
        <select className="px-52 py-2 ml-[30px]">
          <option value="">Auto</option>
          <option value="">English</option>
          <option value="">Nepali</option>
          <option value="">Hindi</option>
        </select>

        <div className="ml-[30px] mt-[19px]">Timezone</div>
        <select className="px-28 py-2 ml-[30px]">
          <option value="">(UTC) Coordinated Universal Time</option>
          <option value="">(UTC-09:00) Alaska</option>
          <option value="">(UTC-07:00) Yukon</option>
          <option value="">(UTC-05:00) Havana</option>
        </select>
      </div>
    </div>
  );
};

export default Basic;
