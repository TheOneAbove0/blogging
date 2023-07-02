import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your components for each route
import Dashboard from "./Admin/Dashboard/Dashboard";
import Posts from "./Admin/Content/Posts";
import Comments from "./Admin/Content/Comments";
import Pages from "./Admin/Content/Pages";
import SideBar from "./Admin/SideBar/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/admin/">
            <Route index element={<Dashboard />} />
            <Route path="posts" element={<Posts />} />
            <Route path="comments" element={<Comments />} />
            <Route path="pages" element={<Pages />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

{
  /* <Route path="/admin/#/content/categories" component={Categories} />
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
        <Route path="/admin/#/settings/advanced" component={AdvancedSettings} /> */
}
