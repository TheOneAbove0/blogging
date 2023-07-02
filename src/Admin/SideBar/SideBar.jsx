import React, { useState } from "react";

//import from react icons
import { IoMdPower } from "react-icons/io";
import { GiStarKey } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoReorderFour } from "react-icons/io5";

import { FaGlobeAmericas } from "react-icons/fa";

import { RiDashboardFill, RiListSettingsFill } from "react-icons/ri";
import { AiTwotoneSetting, AiFillInfoCircle } from "react-icons/ai";
import Dashboard from "../Dashboard/Dashboard";

export default function SideBar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [activeChild, setActiveChild] = useState("themes");
  const [activeContent, setActiveContext] = useState("posts");
  const [activeSetting, setActiveSetting] = useState("basic");
  const [activeUser, setActiveUser] = useState("profile");



  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleChildClick = (item) => {
    setActiveChild(item);
    setActiveContext(item);
    setActiveSetting(item);
    setActiveUser(item);
  };

  return (
    <div className=" flex ">
      <div className="w-[240px] min-h-full fixed text-[#74808f] bg-[#282c37]">
        <div className="flex gap-3 items-center p-[15px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOHxFwT91eq2tMGj1MRvWwTOo_j4mkQw3Vw&usqp=CAU"
            className="w-[35px] h-[35px] p-1 object-cover rounded-full"
            alt="fssfd"
          />
          <span className="font-medium text-[14px]">Administrator</span>
        </div>

        <div className="flex items-center gap-3 justify-between p-[25px] py-[20px] border-y-[#22252e] border-[1px] border-x-0">
          <IoMdPower className="hover:text-white" />
          <GiStarKey className="hover:text-white" />
          <BsFillPersonFill className="hover:text-white" />
          <FaGlobeAmericas className="hover:text-white" />
        </div>

        <div className="flex flex-col">
          <li
            className={`flex items-center gap-6 list-none cursor-pointer p-[25px] py-[20px]  ${
              activeItem === "dashboard" ? "bg-[#22252e] text-[#c9cdd3]" : ""
            }`}
            onClick={() => handleItemClick("dashboard")}
          >
            <RiDashboardFill className="w-[17px] h-[17px]" />
            <p>DASHBOARD</p>
          </li>
          <li
            className={`list-none cursor-pointer p-[25px] py-[20px]  ${
              activeItem === "content" ? "bg-[#22252e] text-[#c9cdd3]" : ""
            }`}
            onClick={() => handleItemClick("content")}
          >
            <div className=" flex items-center gap-6   ">
              <IoReorderFour className="w-[17px] h-[17px]" />
              <p>CONTENT</p>
            </div>

            {activeItem === "content" && (
              <div className=" flex flex-col pl-10 mt-4 gap-1 items-start text-[14px] ">
                <li
                  className={`w-full h-[25px] ${
                    activeContent === "posts"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("posts")}
                >
                  Posts
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeContent === "comments"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("comments")}
                >
                  Comments
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeContent === "pages"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("pages")}
                >
                  Pages
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeContent === "categories"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("categories")}
                >
                  Categories
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeContent === "tags"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("tags")}
                >
                  Tags
                </li>
              </div>
            )}
          </li>
          <li
            className={`list-none cursor-pointer p-[25px] py-[20px] ${
              activeItem === "custom" ? "bg-[#22252e] text-[#c9cdd3]" : ""
            }`}
            onClick={() => handleItemClick("custom")}
          >
            <div className="flex items-center gap-6">
              <RiListSettingsFill className="w-[17px] h-[17px]" />
              <p>CUSTOM</p>
            </div>

            {activeItem === "custom" && (
              <div className="flex flex-col pl-10 mt-4 gap-1 items-start text-[14px]">
                <li
                  className={`w-full h-[25px] ${
                    activeChild === "themes"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("themes")}
                >
                  Themes
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeChild === "plugins"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("plugins")}
                >
                  Plugins
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeChild === "pages"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("pages")}
                >
                  Pages
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeChild === "widgets"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("widgets")}
                >
                  Widgets
                </li>
              </div>
            )}
          </li>

          <li
            className={` list-none cursor-pointer p-[25px] py-[20px]  ${
              activeItem === "users" ? "bg-[#22252e] text-[#c9cdd3]" : ""
            }`}
            onClick={() => handleItemClick("users")}
          >
            <div className=" flex items-center gap-6  ">
              <BsFillPersonFill className="w-[17px] h-[17px]" />
              <p>USERS</p>
            </div>
            {activeItem === "users" && (
              <div className=" flex flex-col pl-10 mt-4 gap-1 items-start text-[14px] ">
                <li className={`w-full h-[25px] ${
                    activeUser === "profile"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("profile")}>Profile</li>
                <li className={`w-full h-[25px] ${
                    activeUser === "roles"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("roles")}>Roles</li>
                <li className={`w-full h-[25px] ${
                    activeUser === "users"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("users")}>Users</li>
              </div>
            )}
          </li>
          <li
            className={`list-none cursor-pointer p-[25px] py-[20px]  ${
              activeItem === "settings" ? "bg-[#22252e] text-[#c9cdd3]" : ""
            }`}
            onClick={() => handleItemClick("settings")}
          >
            <div className=" flex items-center gap-6  ">
              <AiTwotoneSetting className="w-[17px] h-[17px]" />
              <p>SETTINGS</p>
            </div>
            {activeItem === "settings" && (
              <div className=" flex flex-col pl-10 mt-4 gap-1 items-start text-[14px]">
                <li className={`w-full h-[25px] ${
                    activeSetting === "basic"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("basic")}>Basic</li>
                <li className={`w-full h-[25px] ${
                    activeSetting === "e-mail"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("e-mail")}>E-mail</li>
                <li className={`w-full h-[25px] ${
                    activeSetting === "feed"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("feed")}>Feed</li>
                <li className={`w-full h-[25px] ${
                    activeSetting === "comments"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("comments")}>Comments</li>
                <li className={`w-full h-[25px] ${
                    activeSetting === "controls"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("controls")}>Controls</li>
                <li className={`w-full h-[25px] ${
                    activeSetting === "advanced"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("advanced")}>Advanced</li>
              </div>
            )}
          </li>
          <li
            className={`flex items-center gap-6 list-none cursor-pointer p-[25px] py-[20px] ${
              activeItem === "about" ? "bg-[#22252e] text-[#c9cdd3]" : ""
            }`}
            onClick={() => handleItemClick("about")}
          >
            <AiFillInfoCircle className="w-[17px] h-[17px]" />
            <span>ABOUT</span>
          </li>
        </div>
      </div>
      <Dashboard />
    </div>
  );
}
