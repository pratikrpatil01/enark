import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import ContactUs from "./pages/Contacts";
import Blogs from "./pages/Blog";
import Weather from "./pages/Weather";
import BlogDetail from "./pages/Blog/details";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/details/:id" element={<BlogDetail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
