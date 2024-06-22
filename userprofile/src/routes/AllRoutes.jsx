import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Profile from "../components/Profile/Profile";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
