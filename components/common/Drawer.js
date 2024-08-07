"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmailIcon from "@mui/icons-material/Email";

export default function CustomDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#DCD0FF",
        height: "100%",
        color: "#333333",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["T-Shirts", "Pants", "Socks"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Contact Us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#333333" }}>
                {text === "Contact Us" && <EmailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "pink",
          color: "#333333",
          fontWeight: "bold",
          borderRadius: "50px",
        }}
        onClick={toggleDrawer(true)}
      >
        Open drawer
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            borderRadius: "16px 0px 0px 16px", // Same border radius as the drawer
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
