import { Typography } from "@mui/material";
import { Box, Grid, TextField } from "@mui/material";
import React from "react";


const Equipe = ()  => {


    return (
      <>
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            {" "}
            Equipe
          </Typography>
          <Typography sx={{ fontSize: "20px", marginTop:"10px"}}>
            {" Member > Membre 1"}
           
          </Typography>


          <Grid container spacing={6} justifyContent="center">
            <Grid item sm={6} xs={12} >
              <TextField
                id="outlined-basic"
                label="Nom"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                id="outlined-basic"
                label="Prénom"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item sm={6} xs={12}>
              <TextField
                id="outlined-basic"
                label="Rôle"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                id="outlined-basic"
                label="Linkedin"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>

          </Grid>
          <Grid container sx = {{justifyContent:"center"}} >
            <Typography sx={{ fontSize: "20px", marginTop:"10px",color:"#4CBFD0"}}>
            {" Ajouter Membre +"}
           
          </Typography>

            </Grid>

        </Box>
      </>
    );
};


export default Equipe;