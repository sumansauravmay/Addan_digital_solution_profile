import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Profile from "../components/Profile";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
};

export default AllRoutes;
