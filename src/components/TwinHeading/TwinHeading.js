import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

const OuterHeading = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  height: "auto",
  margin: "2rem auto 1rem auto",
  fontSize: "50px",
  fontWeight: 600,
  [theme.breakpoints.between("xl", "md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    marginTop:"10px"
  },
}));

const InnerHeading = styled("div",{shouldForwardProp: props => props !== "color"})(({ theme, color }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: color ? color : theme.palette.primary.main,
  fontSize: "25px",
  fontWeight: 600,
  [theme.breakpoints.between("xl", "md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
  },
}));

const useStyles = makeStyles()((theme) => {
  return {
    strokeText: {
      fontFamily: "Poppins",
      fontSize: "50px",
      fontWeight: 600,
      [theme.breakpoints.between("xl", "md")]: {
        fontSize: "40px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "25px",
        
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "35px",
      
      },
      textAlign: "center",
      textAnchor: "middle",
      dominantBaseline: "middle",
      stroke: "rgba(0, 0, 0, 0.1)",
      strokeWidth: "2px",
      fill: "none",
    },
  };
});

const TwinHeading = ({ text, color, id }) => {
  const { classes } = useStyles();
  return (
    <OuterHeading id={id}>
      <svg
        version="1.1"
        xmlns="//www.w3.org/2000/svg"
        xmlnsXlink="//www.w3.org/1999/xlink"
        width="100%"
        height="1.5em"
      >
        <text className={classes.strokeText} x="50%" y="50%">
          {text}
        </text>
      </svg>
      <InnerHeading color={color}>{text}</InnerHeading>
    </OuterHeading>
  );
};

TwinHeading.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string
};

export default TwinHeading;
