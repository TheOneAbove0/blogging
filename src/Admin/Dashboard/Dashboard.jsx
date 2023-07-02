import React from "react";
import { AiFillWarning } from "react-icons/ai";

export default function Dashboard() {

    const str = 'I’m impressed by the range of tasks that Windows Copilot can handle. From writing email responses to generating product descriptions, it seems like a versatile and powerful tool. Looking forward to seeing it in action.';
    const str2 = 'Windows Copilot sounds like a game-changer for businesses! The ability to automate tasks and free up time for creativity is a huge advantage. Can’t wait to try it out!';
    const str3 = 'As a resident of the UAE, I’m thrilled to hear about this collaboration between Einride and our government. It’s encouraging to see efforts being made to reduce emissions and promote sustainable shipping in our region.';

  return (
    <div className=" ml-[240px] min-w-[1280px] ">
     
      <div className=" flex border-b justify-between items-center text-[#707f95] px-[30px] py-[18px] font-normal ">
        <p className="text-[#666] ">DASHBOARD</p>
        <AiFillWarning  className=" w-[23px] h-[23px]  "/>
      </div>
      <div className=" p-[30px] flex gap-8 bg-[#F6F6F6] ">

        <div className=" min-w-[385px] list-none flex flex-col text-[#337ab7] text-[14px] gap-6  ">
            <div className="bg-white rounded-md ">
                <li className=" flex items-center justify-between text-[#666]  border pl-5   p-3 ">STATS</li>
                <li><div className=" flex items-center justify-between   border border-t-0 pl-5 p-3 "><p className="hover:text-[#666]">Published posts</p> <span className="px-1 bg-[#24b685] w-[34px] h-[22px] rounded-l-xl rounded-r-xl text-center text-white text-[12px] pt-[2px]  ">10</span></div></li>
                <li><div className=" flex items-center justify-between   border border-t-0 pl-5 p-3 "><p className="hover:text-[#666]">Published pages</p> <span className="px-1 bg-[#24b685] w-[34px] h-[22px] rounded-l-xl rounded-r-xl text-center text-white text-[12px] pt-[2px]  ">6</span></div></li>
                <li><div className=" flex items-center justify-between   border border-t-0 pl-5 p-3 "><p className="hover:text-[#666]">Draft posts</p> <span className="px-1 bg-[#f6bb42] w-[34px] h-[22px] rounded-l-xl rounded-r-xl text-center text-white text-[12px] pt-[2px]  ">0</span></div></li>
                <li><div className=" flex items-center justify-between   border border-t-0 pl-5 p-3 "><p className="hover:text-[#666]">Draft pages</p> <span className="px-1 bg-[#f6bb42] w-[34px] h-[22px] rounded-l-xl rounded-r-xl text-center text-white text-[12px] pt-[2px]  ">0</span></div></li>
                <li><div className=" flex items-center justify-between   border border-t-0 pl-5 p-3 "><p className="hover:text-[#666]">Approved Comments</p> <span className="px-1 bg-[#24b685] w-[34px] h-[22px] rounded-l-xl rounded-r-xl text-center text-white text-[12px] pt-[2px]  ">25</span></div></li>
                <li><div className=" flex items-center justify-between   border border-t-0 pl-5 p-3 "><p className="hover:text-[#666]">Unapproved Comments</p> <span className="px-1 bg-[#f6bb42] w-[34px] h-[22px] rounded-l-xl rounded-r-xl text-center text-white text-[12px] pt-[2px]  ">0</span></div></li>
                <li><div className=" flex items-center justify-between   border border-t-0 pl-5 p-3 "><p className="hover:text-[#666]">Spam comments</p> <span className="px-1 bg-[#ea5a5a] w-[34px] h-[22px] rounded-l-xl rounded-r-xl text-center text-white text-[12px] pt-[2px]  ">0</span></div></li>
            </div>

            <div className=" bg-white rounded-md  ">
                <li className="  border pl-5 text-[#666]  p-2 ">LATEST COMMENTS</li> 
                <li className="  border pl-5 hover:text-[#666]  border-t-0  p-2 ">56</li>
                <li className="  border pl-5 hover:text-[#666]  border-t-0  p-3 ">Nice.</li>
                <li className="  border pl-5 hover:text-[#666]  border-t-0 p-3 ">{str.slice(0, 40)}...</li>
                <li className="  border pl-5 hover:text-[#666]  border-t-0 p-3 ">{str3.slice(0, 40)}...</li>
                <li className="  border pl-5 hover:text-[#666]  border-t-0 p-3 ">{str2.slice(0, 40)}...</li>
                
            </div>


        </div>

        <div className=" min-w-[385px] list-none flex flex-col text-[#337ab7] text-[14px] gap-6  ">
            <div className="bg-white rounded-md ">
                <li className=" flex items-center justify-between text-[#666]  border pl-5   p-3 ">QUICK DRAFT</li>
                <div className=" flex flex-col ">
                <input type="text" placeholder="Title" className=" border focus:outline-none mx-3 max-w-[100%] mt-4 p-2 rounded-[5px] " />
                <textarea type="text" placeholder="Type here" className=" border h-[80px] focus:outline-none mx-3 mt-2 max-w-[100%] p-2 rounded-[5px] " />
                <input type="button" value='SAVE' disabled className=" mb-3 text-[#666]  border focus:outline-none mx-3 mt-2 max-w-[100%] p-2 rounded-[5px] " />

                </div>
                
            </div>

            <div className="bg-white rounded-md ">
                <li className=" flex items-center justify-between text-[#666]  border pl-5   p-3 ">QUICK DRAFT</li>
                <div className=" flex flex-col ">
                <li><div className=" flex items-center justify-between   border border-t-0 pl-5 p-3 "><p className="text-[#ccc] text-[12px] ">EMPTY</p> </div></li>

                </div>
                
            </div>

            <div className="bg-white rounded-md ">
                <li className=" flex items-center justify-between text-[#666]  border pl-5   p-3 ">QUICK DRAFT</li>
                <div className=" flex flex-col ">
                <li><div className=" flex items-center justify-between   border border-t-0 pl-5 p-3 "><p className="text-[#ccc] text-[12px]">EMPTY</p> </div></li>

                </div>
                
            </div>

        </div>

      </div>
    </div>
  );
}
