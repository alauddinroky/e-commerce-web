// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This is where the routed components will be rendered */}
      </main>
    </div>
  );
};

export default Layout;
