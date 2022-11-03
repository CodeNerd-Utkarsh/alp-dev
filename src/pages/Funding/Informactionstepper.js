import { Container, Typography } from "@mui/material";
import { Box, Grid, TextField } from "@mui/material";
import React from "react";



const Informactionstepper = ()  => {


    return (
      <>
      <Container maxWidth="md" >
      
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            {" "}
            Informations générales
          </Typography>
        
          <Grid 
          container
           spacing={6} 
           justifyContent="center"
           alignItems="center"
           alignContent="center" >
            <Grid item md={6} xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Nom de l’entreprise"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item  md={6} xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Secteur d’activité"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item  md={6} xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Pays"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item  md={6} xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Date de création"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item  md={6} xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Date de la dernière levée de fonds"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item  md={6} xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Montant de la dernière levée de fonds"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item  md={6} xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Besoin (taille de la levée et usages)"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
        </Box>
        </Container>
      </>
    );
};


export default Informactionstepper;