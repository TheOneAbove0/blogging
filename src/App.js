import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your components for each route
import Dashboard from "./Admin/Dashboard/Dashboard";
import Posts from "./Admin/Content/Posts";
import Comments from "./Admin/Content/Comments";
import Pages from "./Admin/Content/Pages";


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
        
        <Route path="/admin/" >
        <Route index element={<Dashboard />} />
        <Route path="posts" element={<Posts />} />
        <Route path="comments" element={<Comments />} />
        <Route path="pages" element={<Pages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

