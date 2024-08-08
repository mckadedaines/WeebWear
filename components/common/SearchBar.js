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
          color: focused ? "white" : "black",
          fontWeight: focused ? "bold" : "normal",
          fontSize: focused ? "large" : "medium",
        },
      }}
      InputProps={{
        sx: {
          color: "black",
        },
      }}
      sx={{
        width: focused ? "300px" : "200px",
        transition: "width 0.3s, background-color 0.3s, border-color 0.3s",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: focused ? "pink" : "pink",
            transition: "border-color 0.3s",
            borderWidth: "3px",
            boxShadow: "2px 1px 3px 1px rgba(0,0,0,0.3)",
            borderRadius: "50px",
          },
          "&:hover fieldset": {
            borderColor: "pink",
          },
        },
        "& .MuiInputBase-input": {
          color: "black",
        },
        backgroundColor: focused ? "lightgray" : "lightgray",
        borderRadius: "50px",
      }}
    />
  );
}

export default SearchBar;
