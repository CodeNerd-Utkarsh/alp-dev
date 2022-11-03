import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const Active = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>

          Activité
        </Typography>

        <Box >
          <TextField
            defaultValue="Bonjour, j'aimerai discuter avec vous à propos de ..."
            id="email"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <TextField
            defaultValue="Bonjour, j'aimerai discuter avec vous à propos de ..."
            id="email"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <TextField
            defaultValue="Bonjour, j'aimerai discuter avec vous à propos de ..."
            id="email"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <TextField
            defaultValue="Bonjour, j'aimerai discuter avec vous à propos de ..."
            id="email"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />

        </Box>
      </Box>
    </>
  );
};

export default Active;