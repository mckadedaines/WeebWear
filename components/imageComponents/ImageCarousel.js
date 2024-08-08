"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/image_data/animeCarousel.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Slider {...settings} style={{ width: "50vw" }}>
        {images.map((image, index) => (
          <Box
            key={index}
            position="relative"
            width="100%"
            paddingTop="56.25%" // Aspect ratio 16:9 for half the width
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
            >
              <Image
                src={image.src}
                alt={image.title}
                layout="fill"
                objectFit="contain"
                style={{ borderRadius: "10px" }}
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                width="100%"
                padding={2}
                sx={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.7) 70%)",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <Typography variant="h4" color="white" align="left">
                  {image.title}
                </Typography>
                <Typography variant="body1" color="white" align="left">
                  {image.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default ImageCarousel;
