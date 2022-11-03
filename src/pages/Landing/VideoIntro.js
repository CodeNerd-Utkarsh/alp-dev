import React from "react";
import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import { makeStyles } from "tss-react/mui";
import TwinHeading from "components/TwinHeading/TwinHeading";
import { FETCH_SECTION_DATA, FETCH_VIDEO } from "graphql/query/cms_query_gql";

import { ReactComponent as PlayIcon } from "assets/images/play.svg";

const useStyles = makeStyles()((theme, { isVideoPaused }) => {
  return {
    container: {
      maxWidth: "80%",
      margin: "0 auto"
    },
    videoTitle: {
      textAlign: "center",
      fontSize: "16px",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
       
      },
      marginTop:"-20px",
      marginBottom: "9px",
    },
    videoContainer: {
      position: "relative",
      width: "100%",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "600px",
      margin: "0 auto",
      objectFit: "cover",
      filter: isVideoPaused ? "brightness(0.5)" : "brightness(1)"
    },
    videoElement: {
      display: "block",
      margin: "0 auto",
      width: "100%",
      height: "100%",
    },
    playIcon: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "25%",
      height: "25%",
      transform: "translate(-50%,-50%)",
      transition: "opacity 1s",
      pointerEvents: "none",
    },
    showIcon: {
      opacity: "100%"
    },
    hideIcon: {
      opacity: "0%"
    }
  };
});

const VideoIntro = () => {
  const introVideo = React.useRef(null);
  const [videoTitle, setVideoTitle] = React.useState("");
  const [videoUrl, setVideoUrl] = React.useState("");
  const [thumbnailUrl, setThumbnailUrl] = React.useState("");
  const [isVideoPaused, setIsVideoPaused] = React.useState(true);
  const { classes } = useStyles({ isVideoPaused });
  const { data: videoIntroData } = useQuery(FETCH_SECTION_DATA, {
    variables: {
      filter: {
        sectionName: "VideoIntro",
      },
    },
  });

  const { data: videoData } = useQuery(FETCH_VIDEO, {
    variables: {
      filter: {
        videoTitle: "Introduction",
      },
    },
  });

  React.useEffect(() => {
    if (videoIntroData) {
      setVideoTitle(
        videoIntroData?.section?.textContent?.document?.at(0).children?.at(0)
          ?.text
      );
      setThumbnailUrl(process.env.REACT_APP_CMS_HOST + videoIntroData?.section?.image?.url);
    }
  }, [videoIntroData]);

  React.useEffect(() => {
    if (videoData) {
      setVideoUrl(
        process.env.REACT_APP_CMS_HOST + videoData?.video?.video?.url
      );
    }
  }, [videoData]);

  function handleVideoState(state) {
    if (state === "pause") {
      setIsVideoPaused(true);
    } else {
      setIsVideoPaused(false);
    }
  }

  return (
    <Container maxWidth="xl">
      <div className={classes.container}>
        <TwinHeading text={videoIntroData?.section?.sectionTitle || ""} />
        <div className={classes.videoTitle}>{videoTitle}</div>
        <div className={classes.videoContainer}>
          <video
            ref={introVideo}
            className={classes.videoElement}
            width="1628"
            height="600"
            src={videoUrl}
            poster={thumbnailUrl}
            crossOrigin="anonymous"
            controls
            onPause={() => handleVideoState("pause")}
            onPlay={() => handleVideoState("play")}
          />
          <PlayIcon
            className={`${classes.playIcon} ${isVideoPaused ? classes.showIcon : classes.hideIcon
              }`}
          />
        </div>
      </div>
    </Container>
  );
};

export default VideoIntro;
