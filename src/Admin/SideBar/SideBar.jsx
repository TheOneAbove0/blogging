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
import { Link } from "react-router-dom";

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
            <Link to="admin">
            <p>DASHBOARD</p>
              </Link>
           
          </li>
          <li
            className={`list-none cursor-pointer p-[25px] py-[20px]  ${
              activeItem === "content" ? "bg-[#22252e] text-[#c9cdd3]" : ""
            }`}
            onClick={() => handleItemClick("content")}
          >
            <div className=" flex items-center gap-6   ">
              <IoReorderFour className="w-[17px] h-[17px]" />
              <Link to="admin/content/posts">
                <p>CONTENT</p>
              </Link>
            </div>

            {activeItem === "content" && (
              <div className=" flex flex-col pl-10 mt-4 gap-1 items-start text-[14px] ">
                <li
                  className={`w-full h-[25px]  ${
                    activeContent === "posts"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("posts")}
                >
                  <Link to="admin/content/posts">Posts</Link>
                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeContent === "comments"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("comments")}
                >
                  <Link to="admin/content/comments">Comments</Link>
                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeContent === "pages"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("pages")}
                >
                  <Link to="admin/content/pages">Pages</Link>
                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeContent === "categories"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("categories")}
                >
                   <Link to="admin/content/categories">Categories</Link>
                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeContent === "tags"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("tags")}
                >
                   <Link to="admin/content/tags">Tags</Link>

                  
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
              <Link to="admin/custom/themes"><p>CUSTOM</p></Link>

              
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
                 <Link to="admin/custom/themes">Themes</Link>

                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeChild === "plugins"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("plugins")}
                >
                 <Link to="admin/custom/plugins">Plugins</Link>

                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeChild === "pages"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("pages")}
                >
              <Link to="admin/custom/pages">Pages</Link>

                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeChild === "widgets"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("widgets")}
                >
              <Link to="admin/custom/widgets">Widgets</Link>

                  
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
              <Link to="admin/users/profile"><p>USERS</p></Link>

              
            </div>
            {activeItem === "users" && (
              <div className=" flex flex-col pl-10 mt-4 gap-1 items-start text-[14px] ">
                <li
                  className={`w-full h-[25px] ${
                    activeUser === "profile"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("profile")}
                >
              <Link to="admin/users/profile">Profile</Link>

                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeUser === "roles" ? "text-[#c9cdd3]" : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("roles")}
                >
              <Link to="admin/users/roles">Roles</Link>
                  
                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeUser === "users" ? "text-[#c9cdd3]" : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("users")}
                >
              <Link to="admin/users/users">Users</Link>
                  
                  
                </li>
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
              <Link to="admin/setting/basic"><p>SETTINGS</p></Link>

              
            </div>
            {activeItem === "settings" && (
              <div className=" flex flex-col pl-10 mt-4 gap-1 items-start text-[14px]">
                <li
                  className={`w-full h-[25px] ${
                    activeSetting === "basic"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("basic")}
                >
              <Link to="admin/setting/basic">Basic</Link>

                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeSetting === "e-mail"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("e-mail")}
                >
              <Link to="admin/setting/email">E-mail</Link>

                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeSetting === "feed"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("feed")}
                >
              <Link to="admin/setting/feed">Feed</Link>

                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeSetting === "comments"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("comments")}
                >
              <Link to="admin/setting/comments">Comments</Link>

                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeSetting === "controls"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("controls")}
                >
                <Link to="admin/setting/controls">Controls</Link>

                  
                </li>
                <li
                  className={`w-full h-[25px] ${
                    activeSetting === "advanced"
                      ? "text-[#c9cdd3]"
                      : "text-[#74808f]"
                  }`}
                  onClick={() => handleChildClick("advanced")}
                >
                <Link to="admin/setting/advance">Advanced</Link>
                  
                  
                </li>
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
      {/* <Dashboard /> */}
    </div>
  );
}
