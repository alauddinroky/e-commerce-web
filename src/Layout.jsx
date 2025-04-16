// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This is where the routed components will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
