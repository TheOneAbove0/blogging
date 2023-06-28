import React from "react";
import { AiFillWarning } from "react-icons/ai";

export default function Dashboard() {
  return (
    <div className=" min-w-[1280px] ">
     
      <div className=" flex justify-between items-center px-[30px] py-[15px] ">
        <p>Dashboard</p>
        <AiFillWarning  className=" w-[23px] h-[23px] text-[#707f95] "/>
      </div>
      <div></div>
    </div>
  );
}
