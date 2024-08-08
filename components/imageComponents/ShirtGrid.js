"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { Typography } from "@mui/material";

function ShirtGrid() {
  const [shirtImages, setShirtImages] = useState([]);

  useEffect(() => {
    fetch("/shirt_data/shirtData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setShirtImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <Box
      sx={{
        mt: "50px",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "black",
        // pt: "25px",
        // pb: "25px",
      }}
    >
      <ImageList
        sx={{ display: "flex", flexDirection: "row", gap: 2 }}
        cols={shirtImages.length}
      >
        {shirtImages.map((shirtImage, index) => (
          <ImageListItem
            key={index}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              bgcolor: "background.paper",
              width: 300, // Set fixed width
              height: 400, // Set fixed height to accommodate image and text
              marginRight: 4,
            }}
          >
            <Box
              sx={{
                width: 300,
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Image
                src={shirtImage.src}
                alt={shirtImage.title}
                layout="fixed"
                width={300} // Set fixed width
                height={300} // Set fixed height
                loading="lazy"
                style={{ borderRadius: "8px" }}
              />
            </Box>
            <Typography sx={{ fontWeight: "bold", mt: 1 }}>
              {shirtImage.title}
            </Typography>
            <Typography>{shirtImage.description}</Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ShirtGrid;
