/* eslint-disable semi */
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TwinHeading from "components/TwinHeading/TwinHeading";
import { styled } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
// import Ab1 from "../../assets/images/landing/ab1.png";
// import Ab2 from "../../assets/images/landing/ab2.png";
// import Ab3 from "../../assets/images/landing/ab3.png";
// import Ab4 from "../../assets/images/landing/ab4.png";
import { useSelector } from "react-redux";
import enData from "./languages/en.json"
import frData from "./languages/fr.json"

const useStyles = makeStyles()((theme) =>
{
  return {
    container: {
      maxWidth: "max(calc(100% - 40px), 80%)",
      margin: "0 auto",
      paddingBottom: "28px"
    },
    investImage: {
      width: "100%",
      height: "40vh",
      objectFit: "contain",
      [theme.breakpoints.down("sm")]: {
        // marginTop: theme.spacing(1),
        height: "22vh",
        // backgroundColor: "purple"
      },
    },
    investHeading: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "0",
      marginTop: "0px",
      fontFamily: "Poppins",
      color: "#383838",
    },
    invercetext_sec_pg: {
      fontSize: "18px",
      textAlign: "justify",
      fontFamily: "Poppins",
      color: "#383838",
      marginTop: "-15px",
    },
    investText: {
      fontSize: "14px",
      textAlign: "justify",
      fontFamily: 'Poppins',
      color: "#383838"
    },
    criteria: {
      color: "#4CBFD0",
      fontWeight: 600
    },
    link: {
      color: "inherit"
    }
  };
});

const Investments = () =>
{
  const { classes } = useStyles();
  const isEnglish = useSelector((state) => state.lang.value)


  const ImageContainer = styled("div")(() => ({
    width: "100%",
  }));

  return (
    <Container maxWidth="xl">
      <div className={classes.container}>
        <>
          {!isEnglish ? (

            <TwinHeading text="Investissements" />
          ) : (
            <TwinHeading text="Investments" />

          )}
        </>
        <Grid container spacing={10}>
          {/* fist starts */}
          <Grid item container md={6} spacing={6}>
            <Grid item md={5} xs={12}>
              <ImageContainer>
                <img
                  src={"/images/presentation.png"}
                  className={classes.investImage}
                />
              </ImageContainer>
            </Grid>
            <>
              {!isEnglish ? (

                <Grid item md={7} xs={12}>
                  <p className={classes.investHeading}>
                    1. {frData[0].heading}
                  </p>
                  <p className={classes.investText}>
                    Depuis 2014, ALP a investi dans plus de 25 entreprises innovantes situ??es sur tous les continents et r??alis?? 7 sorties dont 2 IPOs. Son
                    positionnement unique attire des entrepreneurs innovants ayant d??j?? un POC et g??n??rant du chiffre d???affaires, d??sireux d???acc??l??rer leur
                    croissance et de p??n??trer de nouveaux march??s. ALP les accompagne gratuitement et sans limite de temps.
                  </p>
                </Grid>
              ) : (
                <Grid item md={7} xs={12}>
                  <p className={classes.investHeading}>
                    1. {enData[0].heading}
                  </p>
                  <p className={classes.investText}>
                    {enData[0].text}
                  </p>
                </Grid>

              )}
            </>
          </Grid>
          {/* first ends */}

          {/* second starts */}
          <Grid item container md={6} spacing={6}>
            <Grid item md={5} xs={12}>
              <ImageContainer>
                <img
                  src={"/images/thesis.png"}
                  className={classes.investImage}
                />
              </ImageContainer>
            </Grid>
            <Grid item md={7} xs={12}>
              <p className={classes.investHeading}>
                2.  {!isEnglish ? (
                  frData[1].heading
                ) : (
                  enData[1].heading
                )}
              </p>
              <p className={classes.investText}>
                <b>{!isEnglish ? (
                  frData[1].text
                ) : (
                  enData[1].text
                )}</b>
              </p>
              <p className={classes.investText}>
                <span className={classes.criteria}>{!isEnglish ? ("L?????quipe:") : ("The team:")}</span> {!isEnglish ? ("des cofondateurs compl??mentaires avec un background coh??rent avec l???activit?? et le march?? de l???entreprise") : ("complementary co-founders with a background consistent with the company's activity and market")}
                <br />
                <span className={classes.criteria}>{!isEnglish ? ("L???innovation:") : ("Innovation:")}</span> {!isEnglish ? ("une solution innovante r??pondant ?? un vrai probl??me") : ("an innovative solution to a real problem")}
                <br />
                <span className={classes.criteria}>{!isEnglish ? ("Le march??:") : ("The market:")}</span> {!isEnglish ? ("un march?? de masse qui permet au plus grand nombre de b??n??ficier de la solution") : ("a mass market that allows as many people as possible to benefit from the solution")}
                <br />
                <span className={classes.criteria}>{!isEnglish ? ("L???impact:") : ("The impact:")}</span> {!isEnglish ? ("la solution doit avoir un impact social et/ou environnemental") : ("the solution must have a social and/or environmental impact")}
                <br />
                <span className={classes.criteria}>ALP:</span> {!isEnglish ? ("il est n??cessaire d???identifier clairement la contribution d???ALP") : ("it is necessary to clearly identify the contribution of ALP")}
              </p>
            </Grid>
          </Grid>
          {/* second ends */}

          {/* third starts */}
          <Grid item container md={6} spacing={6}>
            <Grid item md={5} xs={12}>
              <ImageContainer>
                <img
                  src={"/images/formula.png"}
                  className={classes.investImage}
                />
              </ImageContainer>
            </Grid>
            {!isEnglish ? (
              <Grid item md={7} xs={12}>
                <p className={classes.investHeading}>
                  3. {frData[2].heading}
                </p>
                <p className={classes.investText}>
                  {frData[2].text}
                </p>
              </Grid>
            ) : (
              <Grid item md={7} xs={12}>
                <p className={classes.investHeading}>
                  3. {enData[2].heading}
                </p>
                <p className={classes.investText}>
                  {enData[2].text}
                </p>
              </Grid>
            )}
          </Grid>
          {/* thirs ends */}

          {/* fourth starts */}
          <Grid item container md={6} spacing={6}>
            <Grid item md={5} xs={12}>
              <ImageContainer>
                <img
                  src={"/images/success.png"}
                  className={classes.investImage}
                />
              </ImageContainer>
            </Grid>
            {!isEnglish ? (
              <Grid item md={7} xs={12}>
                <p className={classes.investHeading}>
                  4.{frData[3].heading}
                </p>
                <p>
                  {frData[3].text} <br />
                </p>
                <p>
                  <strong>IB2 : </strong><a href="https://ib2-bauxite.com/" className={classes.link}>https://ib2-bauxite.com/</a><br />
                  <strong>e-pango : </strong><a href="https://www.e-pango.com/" className={classes.link}>https://www.e-pango.com/</a><br />
                  <strong>urbanloop : </strong><a href="http://urbanloop.univ-lorraine.fr/" className={classes.link}>http://urbanloop.univ-lorraine.fr/</a><br />
                  <strong>studely : </strong><a href="https://www.studely.com/" className={classes.link}>https://www.studely.com/</a><br />
                </p>
              </Grid>
            ) : (
              <Grid item md={7} xs={12}>
                <p className={classes.investHeading}>
                  4. {enData[3].heading}
                </p>
                <p>
                  {enData[3].text}
                </p>
                <p>
                  <strong>IB2 : </strong><a href="https://ib2-bauxite.com/" className={classes.link}>https://ib2-bauxite.com/</a><br />
                  <strong>e-pango : </strong><a href="https://www.e-pango.com/" className={classes.link}>https://www.e-pango.com/</a><br />
                  <strong>urbanloop : </strong><a href="http://urbanloop.univ-lorraine.fr/" className={classes.link}>http://urbanloop.univ-lorraine.fr/</a><br />
                  <strong>studely : </strong><a href="https://www.studely.com/" className={classes.link}>https://www.studely.com/</a><br />
                </p>
              </Grid>
            )}
          </Grid>
          {/* fourth ends */}

        </Grid>
      </div>
    </Container>
  );
};

export default Investments;
