import React from "react";
import Box from "@mui/material/Box";

function ImageCarousel() {
  return (
    <Box>
      <h1>Image Carousel</h1>

      <div className="carousel">
        <div className="carousel__container">
          <div className="carousel__item">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
          <div className="carousel__item">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
          <div className="carousel__item">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
          <div className="carousel__item">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default ImageCarousel;
