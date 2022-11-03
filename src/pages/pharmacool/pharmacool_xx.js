import React from "react";
import { Box, Button, Container, Grid, IconButton } from "@mui/material";
import { pharmacoolStyle } from "./pharmacoolStyle";
import Typography from "@mui/material/Typography";
import profile from "../../assets/images/profileimg.png";
import elon from "../../assets/images/elon.svg";
import { styled } from "@mui/material/styles";
import Sidebar from "components/sidebar/Sidebar";
import LinearProgress from "@mui/material/LinearProgress";
import { fontWeight, padding } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Avatar from "@mui/material/Avatar";

const LoginButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.primary.main,
  height: "inherit",
  borderTobRightRadius: "5px",
  paddingRight: "25px",
  paddingLeft: "25px",
  ":hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down("md")]: {
    paddingRight: "6px",
    paddingLeft: "6px",
  },
}));
const style = {
  fontSize: {
    lg: "18px",
    sm: "16px",
    xs: "12px",
  },
};
const Pharmacool = () => {
  const { classes } = pharmacoolStyle();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "30px", sm: "20px", xs: "15px" },
                color: "#4CBFD0",
              }}
            >
              PHARMACOOL
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                component="p"
                sx={{ fontSize: { lg: "16px", sm: "14px", xs: "12px" } }}
              >
                Deal Score
              </Typography>
              <LinearProgress variant="determinate" value="72%" />
            </Box>
          </Box>
          <Box className={classes.Pharmacooleditfileld}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              Contact demandeur
            </Typography>
            <LoginButton>Modifier</LoginButton>
          </Box>

          <Grid container mt={4}>
            <Grid item md={6}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={3}>
                  <img
                    src={profile}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>
                <Grid item md={4}>
                  <Typography sx={{ ...style, fontWeight: "bold" }}>
                    John Maverick
                  </Typography>
                  <Typography
                    sx={{ fontSize: { lg: "16px", sm: "14px", xs: "12px" } }}
                  >
                    Paris, IDF
                  </Typography>
                  <Typography
                    sx={{ fontSize: { lg: "16px", sm: "14px", xs: "12px" } }}
                  >
                    France
                  </Typography>
                  <LoginButton>France</LoginButton>
                </Grid>
                <Grid container sx={{ padding: "0 30px" }}>
                  <Grid container>
                    <Grid item md={4}>
                      <Typography
                        sx={{ fontSize: "18px" }}
                        className={classes.profilehedfield}
                      >
                        {"Deal originator:"}
                      </Typography>
                    </Grid>
                    <Grid item md={8}>
                      <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        ALP
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box className={classes.Pharmacooleditfileld}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              Détail du Deal
            </Typography>
            <LoginButton>Modifier</LoginButton>
          </Box>
          <Grid container sx={{ ...style, padding: "30px" }}>
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Nom:
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>Prime deal</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Date de clôture:
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>25/02/2022</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Valorisation :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>Montant recherché :</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Stage :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>Seed</Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Industrie :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>Application mobile</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Box className={classes.Pharmacooleditfileld}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              Résumé
            </Typography>
            <LoginButton>Modifier</LoginButton>
          </Box>
          <Box sx={{ padding: "30px" }}>
            <Typography sx={{ ...style }} className={classes.profilehedfield}>
              Nous sommes le Gorillas de la pharmacie.
            </Typography>
          </Box>

          <Box className={classes.Pharmacooleditfileld}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              Deal originator
            </Typography>
            <LoginButton>Modifier</LoginButton>
          </Box>
          <Grid container sx={{ padding: "30px" }}>
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Deal originator:
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Typography sx={{ ...style }}>ALP</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Box className={classes.Pharmacooleditfileld}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              Investment details
            </Typography>
            <LoginButton>Modifier</LoginButton>
          </Box>
          <Grid container sx={{ padding: "30px" }}>
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  {" "}
                  Montant recherché :
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Typography sx={{ ...style }}>Prime deal</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Minimum par ticket :
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Typography sx={{ ...style }}>€10</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Maximum par ticket :
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Typography sx={{ ...style }}>€1,000</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Potentiel de valorisation sur 5 ans :
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Typography sx={{ ...style }}> </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Prix par point (€/%) :
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Typography sx={{ ...style }}> </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  Statut ALP :
                </Typography>
              </Grid>
              <Grid item lg={2} sm={4} xs={12}>
                <Box sx={{ ...style }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value={10}>Oui </MenuItem>
                      <MenuItem value={10}>Non </MenuItem>
                      <MenuItem value={20}>Révision par Principal</MenuItem>
                      <MenuItem value={30}>Suivi actif</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={4}>
                <Typography
                  sx={{ ...style }}
                  className={classes.profilehedfield}
                >
                  {" "}
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Typography sx={{ ...style, fontWeight: "bold" }}></Typography>
              </Grid>
            </Grid>
          </Grid>

          <Box sx={{ paddingLeft: "30px", mb: 2 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ ...style, fontWeight: "bold" }}
            >
              Comments:
            </Typography>
            <Typography variant="body1" color="primary" sx={{ ...style }}>
              Jack Logan
            </Typography>
            <Skeleton variant="rectangular" fullWidth height={118} />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <LoginButton sx={{ marginLeft: "auto", mt: 2, py: 3, px: 4 }}>
                Envoyer
              </LoginButton>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: "30px", mb: 2 }}>
            <Typography
              variant="body1"
              color="primary"
              sx={{ ...style, fontWeight: "bold" }}
            >
              Jack Logan
            </Typography>
            <Typography variant="body1" sx={{ ...style, color: "#C4C4C4" }}>
              10/02/2022
            </Typography>
            <Typography variant="body1" sx={{ ...style, fontWeight: "bold" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.{" "}
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "30px", mb: 2 }}>
            <Typography
              variant="body1"
              color="primary"
              sx={{ ...style, fontWeight: "bold" }}
            >
              Volvo Logan
            </Typography>
            <Typography variant="body1" sx={{ ...style, color: "#C4C4C4" }}>
              10/02/2022
            </Typography>
            <Typography variant="body1" sx={{ ...style, fontWeight: "bold" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.{" "}
            </Typography>
          </Box>
          <Box className={classes.Pharmacooleditfileld}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              Lead Investisseur
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="center" mt={2}>
            <Grid item xs={3}>
              <img src={elon} style={{ width: "100%", height: "auto" }} />
            </Grid>
            <Grid item md={3}>
              <Typography sx={{ ...style, fontWeight: "bold" }}>
                Elon Musk
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: "16px",
                    sm: "14px",
                    xs: "12px",
                    color: "#C4C4C4",
                  },
                }}
              >
                CEO of Tesla Motors
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: "16px",
                    sm: "14px",
                    xs: "12px",
                    color: "#C4C4C4",
                  },
                }}
              >
                Pretoria, South Africa
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="body1" color="initial">
                Elon Reeve Musk FRS is an entrepreneur and business magnate. He
                is the founder, CEO, and Chief Engineer at SpaceX; early-stage
                investor, CEO, and Product Architect of Tesla, Inc.; founder of
                The Boring Company; and co-founder of Neuralink and OpenAI.
              </Typography>
            </Grid>
          </Grid>
          <Box className={classes.Pharmacooleditfileld}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              Documents
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <Box sx={{ mt: 2, mb: 2, paddingLeft: "30px" }}>
              <Typography variant="body1" sx={{ ...style }}>
                Pitch Deck
              </Typography>
              <Box
                sx={{
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  backgroundColor: " #E9E9E9 ",
                  padding: "40px",
                  height: { md: "180px", xs: "150px" },
                  width: { md: "220px", xs: "200px" },
                }}
              >
                <IconButton>
                  <PictureAsPdfIcon
                    sx={{
                      "&.MuiSvgIcon-root": {
                        height: "5em",
                      },
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ mt: 2, mb: 2, paddingLeft: "30px" }}>
              <Typography variant="body1" sx={{ ...style }}>
                P&L Report
              </Typography>
              <Box
                sx={{
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  backgroundColor: " #E9E9E9 ",
                  padding: "40px",
                  height: { md: "180px", xs: "150px" },
                  width: { md: "220px", xs: "200px" },
                }}
              >
                <IconButton>
                  <PictureAsPdfIcon
                    sx={{
                      "&.MuiSvgIcon-root": {
                        height: "5em",
                      },
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ mt: 2, mb: 2, paddingLeft: "30px" }}>
              <Typography variant="body1" sx={{ ...style }}></Typography>
              <Box
                sx={{
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  backgroundColor: " #E9E9E9 ",
                  padding: "40px",
                  height: { md: "180px", xs: "150px" },
                  width: { md: "220px", xs: "200px" },
                  mt: { sm: 6 },
                }}
              >
                <IconButton>
                  <PictureAsPdfIcon
                    sx={{
                      "&.MuiSvgIcon-root": {
                        height: "5em",
                      },
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Pharmacool;
