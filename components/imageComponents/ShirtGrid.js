"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { Typography } from "@mui/material";

function ShirtGrid() {
  const [shirtData, setShirtData] = useState([]);

  useEffect(() => {
    fetch("/shirt_data/shirtData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setShirtData(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ImageList
        sx={{ display: "flex", flexDirection: "row", gap: 2 }}
        cols={shirtImages.length}
      >
        {shirtImages.map((shirtData, index) => (
          <ImageListItem
            key={index}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pl: 2,
              pr: 2,
              pb: 2,
              bgcolor: "background.paper",
              width: 300, // Set fixed width
              height: 400, // Set fixed height to accommodate image and text
              marginRight: 4,
              transition: "all 0.3s ease-in-out", // Transition for smooth hover effect
              "&:hover": {
                transform: "scale(1.1)", // Scale the card to 110% of its original size
              },
              mt: "25px",
              mb: "25px",
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
                src={shirtData.src}
                alt={shirtData.title}
                layout="fixed"
                width={300} // Set fixed width
                height={300} // Set fixed height
                loading="lazy"
                style={{ borderRadius: "8px" }}
              />
            </Box>
            <Typography sx={{ fontWeight: "bold", mt: 1 }}>
              {shirtData.title}
            </Typography>
            <Typography>{shirtData.description}</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {shirtData.price}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ShirtGrid;
