"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";

function SearchBar() {
  const [focused, setFocused] = useState(false);

  return (
    <TextField
      variant="outlined"
      label="Search"
      size="small"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      focused={focused}
      InputLabelProps={{
        style: {
          color: focused ? "rgb(139, 92, 246)" : "rgba(255, 255, 255, 0.7)",
          fontWeight: focused ? "500" : "normal",
          transition: "color 0.3s, font-weight 0.3s",
        },
      }}
      InputProps={{
        sx: {
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: focused
              ? "rgba(139, 92, 246, 0.5)"
              : "rgba(255, 255, 255, 0.1)",
            transition: "border-color 0.3s",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(139, 92, 246, 0.3)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(139, 92, 246, 0.5)",
          },
        },
      }}
      sx={{
        width: focused ? "300px" : "200px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "& .MuiOutlinedInput-root": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          borderRadius: "9999px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
          "&.Mui-focused": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        },
        "& .MuiInputBase-input": {
          color: "rgba(255, 255, 255, 0.9)",
          "&::placeholder": {
            color: "rgba(255, 255, 255, 0.5)",
            opacity: 1,
          },
        },
      }}
      placeholder="Search products..."
    />
  );
}

export default SearchBar;
