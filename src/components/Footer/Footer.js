import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as RouteLink } from "react-router-dom";

import { ReactComponent as ALPLogo } from "assets/images/alpLogo.svg";
import { pages } from "components/Data/data";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useSelector } from "react-redux";

const ResponsiveFooter = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  boxShadow: "none",
  zIndex: 2
}));

const useStyles = makeStyles()(() => {
  return {
    routerLink: {
      display: "block",
      color: "#242424",
      textDecoration: "none",
      margin: "0px 5px",
      fontWeight: 500,
      ["&:last-child"]: {
        textDecoration: "underline"
      }
    }
  };
});

export default function Footer() {
  const { classes } = useStyles();
  const isEnglish = useSelector((state) => state.lang.value);


  if (isEnglish) {
    return (
      <footer>
        <ResponsiveFooter position="relative">
          <Container maxWidth="xl">
            <Toolbar>
              <Grid container spacing={2} sx={{ my: 8 }}>
                <Grid item xs={12} md={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-start" },
                      alignItems: "center"
                    }}
                  >
                    <ALPLogo />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    {pages.map((page) => (
                      <RouteLink key={page.textE} to={page.link} className={classes.routerLink}>{page.textE}</RouteLink>
                    ))}
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3
                    }}
                  >
                    <div>
                      <Link href="#">
                        <FacebookIcon color="primary" />
                      </Link>
                    </div>
                    <div>
                      <Link href="#">
                        <TwitterIcon color="primary" />
                      </Link>
                    </div>
                    <div>
                      <Link href="#">
                        <LinkedInIcon color="primary" />
                      </Link>
                    </div>
                    <div>
                      <Link href="#">
                        <YouTubeIcon color="primary" />
                      </Link>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </ResponsiveFooter>
      </footer>
    );
  }
  return (
    <footer>
      <ResponsiveFooter position="relative">
        <Container maxWidth="xl">
          <Toolbar>
            <Grid container spacing={2} sx={{ my: 8 }}>
              <Grid item xs={12} md={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                    alignItems: "center"
                  }}
                >
                  <ALPLogo />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap"
                  }}
                >
                  {pages.map((page) => (
                    <RouteLink key={page.text} to={page.link} className={classes.routerLink}>{page.text}</RouteLink>
                  ))}
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3
                  }}
                >
                  <div>
                    <Link href="#">
                      <FacebookIcon color="primary" />
                    </Link>
                  </div>
                  <div>
                    <Link href="#">
                      <TwitterIcon color="primary" />
                    </Link>
                  </div>
                  <div>
                    <Link href="#">
                      <LinkedInIcon color="primary" />
                    </Link>
                  </div>
                  <div>
                    <Link href="#">
                      <YouTubeIcon color="primary" />
                    </Link>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </ResponsiveFooter>
    </footer>
  );
}
