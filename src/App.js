import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your components for each route
import Dashboard from "./Admin/Dashboard/Dashboard";
import Posts from "./Admin/Content/Posts";
import Comments from "./Admin/Content/Comments";
import Pages from "./Admin/Content/Pages";
import SideBar from "./Admin/SideBar/SideBar";
// import Categories from './components/Categories';
// import Tags from './components/Tags';
// import Themes from './components/Themes';
// import Plugins from './components/Plugins';
// import Widgets from './components/Widgets';
// import Profile from './components/Profile';
// import Roles from './components/Roles';
// import Users from './components/Users';
// import BasicSettings from './components/BasicSettings';
// import EmailSettings from './components/EmailSettings';
// import FeedSettings from './components/FeedSettings';
// import CommentsSettings from './components/CommentsSettings';
// import ControlsSettings from './components/ControlsSettings';
// import AdvancedSettings from './components/AdvancedSettings';

const App = () => {
  return (
    // <Router>
    //   <div className="App">
    //     <SideBar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/setting" element={<Basic />} />
    //     </Routes>
    //   </div>
    // </Router>


    <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<SideBar />} />
        
        
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/pages" element={<Pages />} />
        
    
    </Routes>
  </BrowserRouter>
  );
};

export default App;



  {/* <Route path="/admin/#/content/categories" component={Categories} />
        <Route path="/admin/#/content/tags" component={Tags} />
        <Route path="/admin/#/custom/themes" component={Themes} />
        <Route path="/admin/#/custom/plugins" component={Plugins} />
        <Route path="/admin/#/custom/widgets" component={Widgets} />
        <Route path="/admin/#/security/profile" component={Profile} />
        <Route path="/admin/#/security/roles" component={Roles} />
        <Route path="/admin/#/security/users" component={Users} />
        <Route path="/admin/#/settings/basic" component={BasicSettings} />
        <Route path="/admin/#/settings/email" component={EmailSettings} />
        <Route path="/admin/#/settings/feed" component={FeedSettings} />
        <Route path="/admin/#/settings/comments" component={CommentsSettings} />
        <Route path="/admin/#/settings/controls" component={ControlsSettings} />
        <Route path="/admin/#/settings/advanced" component={AdvancedSettings} /> */}
