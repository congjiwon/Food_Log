import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostWrite from "../pages/PostWrite";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import EditPage from "../pages/EditPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="postwrite" element={<PostWrite />} />
        <Route path="editpage/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
