/* eslint-disable semi */
import React from "react";
import Container from "@mui/material/Container";
import TwinHeading from "components/TwinHeading/TwinHeading";
import { Button, FormControl, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import image from '../../assets/images/landing/blogimg.png';
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import { alpha, styled } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import { ReactComponent as Phone } from "../../assets/images/landing/phone.svg";
import { ReactComponent as Message } from "../../assets/images/landing/message.svg";
import { ReactComponent as Location } from "../../assets/images/landing/location.svg";
import { useSelector } from "react-redux";


const useStyles = makeStyles()((theme) => {
  return {
    Contactmaincon: {
      margin: "30px 0px"
    },
    Contactcon: {
      justifyContent: "center",
    },
    Contactpapercon: {
      display: "flex",
      borderRadius: "15px !important",
    },
    Contactimg: {
      width: "100%",
      height: "100%",
      borderTopRightRadius: "15px",
      borderBottomRightRadius: "15px",
    },
    Contactsec1: {
      padding: "40px"
    },
    Contactimgcon: {
      position: "relative",
      [theme.breakpoints.down("md", "sx")]: {
        display: "none"

      },
    },
    Contactimgtext: {
      color: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    textareaAutosize: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 15,
      width: 'auto',
      minHeight: "200px",
      padding: '10px 12px',
      marginTop: "15px"

    },
    Contactbtncon: {
      display: "flex",
      justifyContent: "flex-end"
    }
  };
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(4),
  },

  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 15,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Contact = () => {
  const { classes } = useStyles();
  const isEnglish = useSelector((state) => state.lang.value)

  return (
    <Container maxWidth="xl" className={classes.Contactmaincon}>
      <TwinHeading text={!isEnglish ? ("Contactez") : ("Contact")} id="contact" />
      <Grid container className={classes.Contactcon}>
        <Grid item md={10}>
          <Grid container>
            <Paper className={classes.Contactpapercon}>
              <Grid item md={7} xs={12} className={classes.Contactsec1} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography style={{ fontSize: "36px", fontWeight: "bold", margin: "0px" }}>{!isEnglish ? ("Parlez-nous !") : ("Talk to us!")}</Typography>
                <Typography style={{ fontSize: "20px" }}>
                  {!isEnglish ? (
                    "Nous serions ravis de discuter de votre projet."
                  ) : (
                    "We would be happy to discuss your project."
                  )}
                </Typography>
                <div>
                  <FormControl
                    variant="standard"
                    margin="normal"
                    sx={{ width: "100%" }}
                  >
                    <InputLabel
                      shrink
                      htmlFor="bootstrap-input"
                      sx={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      {!isEnglish ? ("Nom") : ("Name")}
                    </InputLabel>
                    <BootstrapInput placeholder={!isEnglish ? ("Nom") : ("Name")} id="bootstrap-input" />
                  </FormControl>
                  <FormControl
                    variant="standard"
                    margin="normal"
                    sx={{ width: "100%" }}
                  >
                    <InputLabel
                      shrink
                      htmlFor="email"
                      sx={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      Email
                    </InputLabel>
                    <BootstrapInput
                      placeholder="example@gmail.com"
                      id="email"
                    />
                  </FormControl>
                  <FormControl
                    variant="standard"
                    margin="normal"
                    fullWidth
                  >
                    <InputLabel
                      shrink
                      htmlFor="message"
                      sx={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      {!isEnglish ? ("Votre message") : ("Your message")}
                    </InputLabel>
                    <BootstrapInput
                      placeholder={!isEnglish ? (
                        "Bonjour, j'aimerai discuter avec vous à propos de ..."
                      ) : (
                        "Hello, I'd like to chat with you about..."
                      )}
                      id="email"
                      multiline
                      rows={6}
                    />
                  </FormControl>
                </div>
                <Box className={classes.Contactbtncon}>
                  <Button variant="contained" sx={{ color: "white" }}>
                    {!isEnglish ? (
                      "Envoyer"
                    ) : (
                      "Send"
                    )}
                  </Button>
                </Box>
              </Grid>
              <Grid item md={5} className={classes.Contactimgcon}>
                <img src={image} className={classes.Contactimg} />
                <Box className={classes.Contactimgtext}>
                  <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>Coordonnées</Typography>
                  <Typography sx={{ marginBottom: "10px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Phone style={{ width: "18px", height: "auto" }} />
                    <div style={{ marginLeft: "20px" }}><Typography>(+40) 772 100 200</Typography></div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Message style={{ width: "18px", height: "auto" }} />
                    <div style={{ marginLeft: "20px" }}><Typography>contact@alp.com</Typography></div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Location style={{ width: "18px", height: "auto" }} />
                    <div style={{ marginLeft: "20px" }}>
                      <Typography>Dyonisie Wolf Bucharest, RO 010458</Typography>
                    </div>
                  </div>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
