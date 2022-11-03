/* eslint-disable semi */
/* eslint-disable no-undef */
import React from "react";
import { makeStyles } from "tss-react/mui";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import { FETCH_SECTION_DATA } from "graphql/query/cms_query_gql";
import { useSelector } from "react-redux";

const ImageContainer = styled("div")(() => ({
  width: "100%",
  maxWidth: 1920,
  maxHeight: 720,
  margin: "0 auto",
  position: "relative",
}));

const SectionContainer = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "50%",
  height: "100%",
  background:
    "linear-gradient(90.2deg, #000000 0.19%, rgba(60, 60, 60, 0.695291) 64.07%, rgba(196, 196, 196, 0) 99.84%)",
}));

const TextContainer = styled("div")(() => ({
  width: "67%",
  position: "absolute",
  top: "33%",
  left: "20%",
}));

const SectionHeading = styled("div")(() => ({
  fontSize: "3vw",
  fontWeight: "800",
  color: "white",
}));

const SectionSubheading = styled("div")(() => ({
  fontSize: "1vw",
  color: "white"
}));

const useStyles = makeStyles()((theme) => {
  return {
    bannerImage: {
      display: "block",
      maxWidth: "100%",
      height: "auto"
    },
    highlight: {
      color: theme.palette.primary.main
    }
  };
});

const LandingImage = () => {
  const { classes } = useStyles();
  const [imageUrl, setImageUrl] = React.useState("#");
  const isEnglish = useSelector((state) => state.lang.value)

  const { data: landingImageData } = useQuery(FETCH_SECTION_DATA, {
    variables: {
      filter: {
        sectionName: "LandingImage",
      },
    },
  });

  React.useEffect(() => {
    if (landingImageData) {
      setImageUrl(
        process.env.REACT_APP_CMS_HOST + landingImageData?.section?.image?.url
      );
    }
  }, [landingImageData]);
  if (isEnglish) {
    return (
      <ImageContainer>
        <div>
          <img
            src={imageUrl}
            className={classes.bannerImage}
            width={1920}
            height={720}
            alt="banner_image"
          />
        </div>
        <SectionContainer>
          <TextContainer>
            <SectionHeading>
              Cultivating innovation <br /> and <span className={classes.highlight}>inspiring progress</span>
            </SectionHeading>
            <SectionSubheading>
              ALP is a consulting and investment company serving innovation players in France and around the world
            </SectionSubheading>
          </TextContainer>
        </SectionContainer>
      </ImageContainer>
    );
  }
  return (
    <ImageContainer>
      <div>
        <img
          src={imageUrl}
          className={classes.bannerImage}
          width={1920}
          height={720}
          alt="banner_image"
        />
      </div>
      <SectionContainer>
        <TextContainer>
          <SectionHeading>
            Cultiver l&apos;innovation <br /> et <span className={classes.highlight}>inspirer le progrès</span>
          </SectionHeading>
          <SectionSubheading>
            ALP est une société de conseil et d&apos;investissement au service
            des acteurs de l&apos;innovation en France et à travers le monde
          </SectionSubheading>
        </TextContainer>
      </SectionContainer>
    </ImageContainer>
  );
};

export default LandingImage;
