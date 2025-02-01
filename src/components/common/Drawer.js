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
        width: 280,
        height: "100%",
        background: "rgba(13, 13, 13, 0.8)",
        backdropFilter: "blur(12px)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
        color: "rgba(255, 255, 255, 0.9)",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["T-Shirts", "Pants"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              <ListItemText
                primary={text}
                sx={{
                  "& .MuiListItemText-primary": {
                    color: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
      <List>
        {["Contact Us"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                {text === "Contact Us" && <EmailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  "& .MuiListItemText-primary": {
                    color: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              />
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
          background: "rgba(139, 92, 246, 0.2)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(139, 92, 246, 0.3)",
          color: "rgba(255, 255, 255, 0.9)",
          fontWeight: "500",
          borderRadius: "9999px",
          padding: "8px 16px",
          textTransform: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "rgba(139, 92, 246, 0.3)",
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
          },
        }}
        onClick={toggleDrawer(true)}
      >
        Menu
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "transparent",
            boxShadow: "none",
          },
        }}
        SlideProps={{
          sx: {
            "& .MuiDrawer-paper": {
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
            },
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
