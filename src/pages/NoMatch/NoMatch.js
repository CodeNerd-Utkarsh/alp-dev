import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "25vh",
    },
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: theme.palette.primary.dark
    },
    content: {
      textAlign: "center",
      color: theme.palette.primary.main
    },
  };
});

export default function NoMatch() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.header}>404 Not Found</h2>
      </div>
      <div className={classes.content}>
        The page that you are looking for doesn&apos;t exist
      </div>
    </div>
  );
}
