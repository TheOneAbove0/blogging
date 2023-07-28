import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your components for each route
import Dashboard from "./Admin/Dashboard/Dashboard";
import Posts from "./Admin/Content/Posts";
import Comments from "./Admin/Content/Comments";
import Pages from "./Admin/Content/Pages";
import SideBar from "./Admin/SideBar/SideBar";

//import from setings

import Advance from './Admin/Settings/Advanced';
import Basic from './Admin/Settings/Basic';
import Controls from './Admin/Settings/Controls';
import Email from './Admin/Settings/Email';
import Feed from './Admin/Settings/Feed';


//import from the users 
import Profile from './Admin/User/Profile';
import Users from './Admin/User/Users';
import Roles from './Admin/User/Roles';

//import custom from 
import Themes from './Admin/Custom/Themes';
import Plugin from './Admin/Custom/Plugins';
// import Pages from './Admin/Custom/Pages';
import Widgets from './Admin/Custom/Widgets';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App"> 
        <SideBar />
        <Routes>
          <Route path="/admin/">
            <Route index element={<Dashboard />} />


            {/* content here */}

            <Route path ="content/">
            <Route path="posts" element={<Posts />} />
            <Route path="comments" element={<Comments />} />
            <Route path="pages" element={<Pages />} />
            {/* <Route path="categories" element={<Categories />} />
            <Route path="tags" element={<Tags />} /> */}
            </Route>


            {/* user here  */}

            <Route path ="users/">
            <Route path="profile" element={<Profile />} />
            <Route path="users" element={<Users />} />
            <Route path="roles" element={<Roles />} />
            </Route>

             {/* custom here  */}

             <Route path ="custom/">
            <Route path="themes" element={<Themes />} />
           <Route path="plugins" element={<Plugin />} />
             {/* <Route path="pages" element={<Pages />} />*/}
            <Route path="widgets" element={<Widgets />} />
            </Route> 


            {/* setings here */}

            <Route path ="setting/">
            <Route path="basic" element={<Basic />} />
            <Route path="email" element={<Email />} />
            <Route path="feed" element={<Feed />} />
            <Route path="controls" element={<Controls />} />
            <Route path="advance" element={<Advance />} />
            </Route>




          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


