import React from "react";
import CustomDrawer from "./Drawer";
import SearchBar from "./SearchBar";
import ImageAvatars from "./Avatar";

export default function Navbar() {
  return (
    <div className="flex items-center space-x-4">
      <CustomDrawer />
      <SearchBar />
      <ImageAvatars />
    </div>
  );
}
