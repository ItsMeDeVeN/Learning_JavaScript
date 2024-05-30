// all routes

import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/Layout/LoginForm";
import SignupForm from "./components/Layout/SignupForm";
import Dashboard from "./page/Dashboard";

const AllRoutes = () => {
  return (
    <div className="bg-gray-700 min-h-screen">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;