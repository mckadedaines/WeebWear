import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <img src="#" alt="WeebWear-Logo" />
      <h1>WeebWear</h1>
      <Navbar />
    </div>
  );
}

export default Header;
