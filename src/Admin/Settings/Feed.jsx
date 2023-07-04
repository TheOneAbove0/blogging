import React from "react";
import { BsCheck } from "react-icons/bs";

const Feed = () => {
  return (
    <div className="bg-[#f6f6f6] ml-[240px] h-[97vh]">
      <div className="flex gap-[20px] item-center p-[20px] bg-white">
        <div className="text-[18px]">FEED</div>
        <div className="flex items-center justify-between cursor-pointer bg-[#70cfb0] p-[0px] text-white hover:bg-green-800">
          <BsCheck className="text-[25px] border-r-[1px] border-green-600" />
          <div className=" px-3 text-[12px] ">SAVE</div>
        </div>
      </div>

      <div>
        <div className="ml-[30px] mt-[30px]">Author</div>
        <input
          placeholder="My name"
          type="text"
          className="ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]"
        />
        <div className="ml-[30px] mt-[19px]">E-mail</div>
        <input
          placeholder=""
          type="email"
          className="ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]"
        />
        <div className="ml-[30px] mt-[19px]">Endorsement (bLink)</div>
        <input
          placeholder="https://blogengine.io/syndication.axd"
          type="text"
          className="ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]"
        />
        <div className="ml-[30px] mt-[19px]">Alternate feed URL</div>
        <input
          placeholder=""
          type="text"
          className="ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]"
        />
        <div className="ml-[30px] mt-[19px]">Language code</div>
        <input
          placeholder="en-US"
          type="text"
          className="ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]"
        />

        <div className="ml-[30px] mt-[19px]">Default feed output</div>
        <select className="px-52 py-2 ml-[30px]">
          <option value="">RSS 2.0</option>
          <option value="">Atom 1.0</option>
        </select>

        <div className="ml-[30px] mt-[19px]">Items shown in feed</div>
        <input
          placeholder="3"
          type="text"
          className="ml-[30px] border pr-[300px] p-[6px] rounded-[2px] mt-[2px]"
        />
        <div className="flex ml-[30px] gap-1 mt-[20px]">
          <input type="checkbox" />
          <div> Enable Enclosures</div>
        </div>
        <div className="flex ml-[30px] gap-1 mt-[20px] mb-[50px]">
          <input type="checkbox" />
          <div>Enable Tag Export</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
