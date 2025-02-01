import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{
          background: "rgba(139, 92, 246, 0.2)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(139, 92, 246, 0.3)",
          color: "rgba(255, 255, 255, 0.9)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "rgba(139, 92, 246, 0.3)",
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
            transform: "scale(1.05)",
          },
        }}
      >
        U
      </Avatar>
    </Stack>
  );
}
