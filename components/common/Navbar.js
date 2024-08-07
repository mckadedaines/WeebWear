import React from "react";
import Box from "@mui/material/Box";
import CustomDrawer from "./Drawer";
import SearchBar from "./SearchBar";
import ImageAvatars from "./Avatar";

export default function Navbar() {
  return (
    <Box className="flex items-center space-x-4">
      <CustomDrawer />
      <SearchBar />
      <ImageAvatars />
    </Box>
  );
}
