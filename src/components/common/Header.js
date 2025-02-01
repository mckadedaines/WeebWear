import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <Box
      className="fixed top-0 left-0 right-0 z-50 nav-glass"
      sx={{
        padding: "1rem",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="relative h-12 w-48">
            <Image
              fill
              style={{ objectFit: "contain" }}
              className="brightness-200 contrast-200"
              alt="WeebWear-Title"
              src="/weebwear-title.png"
              priority
            />
          </div>
        </Link>
        <Navbar />
      </div>
    </Box>
  );
}

export default Header;
