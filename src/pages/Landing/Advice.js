/* eslint-disable semi */
import React from "react";
import Container from "@mui/material/Container";
import TwinHeading from "components/TwinHeading/TwinHeading";
import { makeStyles } from "tss-react/mui";
import { styled } from "@mui/material/styles";
import backgroundImg from "../../assets/images/landing/Rectangle.png";
import { Grid } from "@mui/material";
import { useQuery } from "@apollo/client";
import { FETCH_MULTIPLE_SECTIONS } from "graphql/query/cms_query_gql";

import first from "../../assets/images/landing/#1.png";
import second from "../../assets/images/landing/#2.png";
import third from "../../assets/images/landing/#3.png";
import fourth from "../../assets/images/landing/#4.png";

import handshake from "../../assets/images/landing/handshake.svg";
import government from "../../assets/images/landing/government.svg";
import group from "../../assets/images/landing/group.svg";
import funds from "../../assets/images/landing/funds.svg";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { useSelector } from "react-redux";

const GridItem = styled("div")(() => ({
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
  alignItems: "center"
}));

const useStyles = makeStyles()((theme) => {
  return {
    background: {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "100% 100%"
    },
    container: {
      maxWidth: "max(calc(100% - 40px), 80%)",
      margin: "0 auto",
      padding: "10px 10px 90px 10px"
    },
    number: {
      display: "block",
      maxWidth: "10vw",
      height: "100%"
    },
    gridItem: {
      padding: "5px"
    },
    heading: {
      marginTop: "-30px",
    },
    adviceheading: {
      fontSize: "max(calc(1vw + 5px),20px)",
      fontWeight: "bold",
      marginBottom: "0",
      marginTop: "-10px",
      fontFamily: "Poppins",
      color: "white",
    },
    advicetext: {
      fontSize: "max(1vw,14px)",
      fontFamily: "Poppins",
      color: "white",
    },
    advicesub: {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
      [theme.breakpoints.down("md", "sx")]: {
        display: "none"
      },
    },
    advicesub1: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "baseline",
      [theme.breakpoints.down("md", "sx")]: {
        display: "none"
      },
    },
  };
});

const Advice = () => {
  const { classes } = useStyles();

  const [textData, setTextData] = React.useState([]);
  const numberPng = [first, second, third, fourth];
  const logoSvg = [handshake, government, group, funds];
  const isEnglish = useSelector((state) => state.lang.value)


  const { data: adviceData } = useQuery(FETCH_MULTIPLE_SECTIONS, {
    variables: {
      filter: {
        sectionName: {
          startsWith: "Advice"
        }
      }
    }
  });

  React.useEffect(() => {
    if (adviceData) {
      setTextData(adviceData?.sections);
    }
  }, [adviceData]);

  return (
    <div className={classes.background}>
      <Container maxWidth="xl">
        <div className={classes.container}>
          <TwinHeading text={!isEnglish ? ("Conseil") : ("Counsel")} color="white" className={classes.heading} />
          <Grid container spacing={8}>
            {textData.map((advice, index) => (
              <Grid item md={6} key={advice.sectionName}>
                <GridItem>
                  <div className={classes.gridItem}>
                    <img src={numberPng[index]} alt="" className={classes.number} />
                  </div>
                  <div className={classes.gridItem}>
                    <img src={logoSvg[index]} alt="presentation" className={classes.number} />
                  </div>
                  <div className={classes.gridItem}>
                    <p className={classes.adviceheading}>{`${index + 1}. ${advice?.sectionTitle}`}</p>
                    <div className={classes.advicetext}>
                      <DocumentRenderer document={advice?.textContent?.document} />
                    </div>
                  </div>
                </GridItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Advice;
