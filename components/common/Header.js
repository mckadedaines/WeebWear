import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Image from "next/image";

function Header() {
  const imageStyle = {
    borderRadius: "15px",
  };

  return (
    <Box className="flex justify-between items-center p-4">
      <Image
        width={300}
        height={300}
        style={imageStyle}
        alt="WeebWear-Title"
        src="/weebwear-title.png"
      />
      <Navbar />
    </Box>
  );
}

export default Header;
