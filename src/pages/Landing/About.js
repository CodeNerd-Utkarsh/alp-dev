/* eslint-disable semi */
import React from "react";
import { useQuery } from "@apollo/client";
import { makeStyles } from "tss-react/mui";
import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TwinHeading from "components/TwinHeading/TwinHeading";
import { FETCH_SECTION_DATA } from "graphql/query/cms_query_gql";

import { DocumentRenderer } from '@keystone-6/document-renderer';
import { useSelector } from "react-redux";

const ImageContainer = styled("div")(() => ({
  width: "100%"
}));

const TextContainer = styled("div")(() => ({
  height: "100%",
  color: "#383838",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}));

const useStyles = makeStyles()(() => {
  return {
    container: {
      maxWidth: "max(calc(100% - 40px), 80%)",
      margin: "0 auto"
    },
    about: {
      marginTop: "2rem"
    },
    image: {
      display: "block",
      maxWidth: "100%",
      height: "auto",
      borderRadius: "10px"
    },
    textBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  };
});

const About = () => {
  const { classes } = useStyles();
  const [imageUrl, setImageUrl] = React.useState("");
  const [textData, setTextData] = React.useState([]);
  const { data: aboutAlpData } = useQuery(FETCH_SECTION_DATA, {
    variables: {
      filter: {
        sectionName: "AboutALP"
      }
    }
  });
  const isEnglish = useSelector((state) => state.lang.value)


  React.useEffect(() => {
    if (aboutAlpData) {
      setImageUrl(process.env.REACT_APP_CMS_HOST + aboutAlpData?.section?.image?.url);
      setTextData(aboutAlpData?.section?.textContent?.document);
    }
  }, [aboutAlpData]);

  return (
    <Container maxWidth="xl" className={classes.about}>
      <div className={classes.container}>
        {!isEnglish ? (

          <TwinHeading text="A propos d’ALP" />
        ) : (
          <TwinHeading text="About ALP" />

        )}
        <Grid container spacing={12} >
          <Grid item xs={12} md={6} >
            <ImageContainer>
              <img src={imageUrl} className={classes.image} />
            </ImageContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextContainer>
              <div className={classes.textBox}>
                <DocumentRenderer document={textData} />
              </div>
            </TextContainer>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default About;
