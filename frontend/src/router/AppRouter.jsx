import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllTask from "../pages/AllTask"
import DetailPage from "../pages/DetailPage"


function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/alltask" element={<AllTask />} />
        <Route path="/detailpage" element={<DetailPage />} />


    </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;