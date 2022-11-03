import { Box, TextField, Typography } from "@mui/material";
import React from "react";


const Marlet = () => {

    return (
      <>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            {" Marché"}
          </Typography>

          <Box>
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

export default Marlet;