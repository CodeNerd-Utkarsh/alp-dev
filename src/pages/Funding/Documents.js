import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { ReactComponent as DELETE } from "../../assets/images/fundingimg/delete.svg";
import { ReactComponent as PDF } from "../../assets/images/fundingimg/pdf.svg";


const useStyles = makeStyles()(() => {
  return {
    documents_center_con: {
      height: "160px",
      backgroundColor: "#EEEEEE",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"

    },
    documents_bth: {
      "&.MuiButton-root": {
        width: "250px",
        height: "60px",
        border: "1px solid #525252",
        display: "flex",
        justifyContent: "space-between",
        alignItems: " center",
        margin: "5px"

      }
    },
    documents_bth_con: {
      display: "flex",
      justifyContent: "flex-start"
    }
  };
});

const Documents = () => {
  const { classes } = useStyles();

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {"Documents"}
        </Typography>

        <Box sx={{ marginTop: "10px" }}>
          <Typography variant="body1">
            {
              "Avez-vous des documents à charger ? (Pitch Deck, P&L, Forecasts, brevets, processus, plan de recrutements, etc.)"
            }
          </Typography>

          <Box className={classes.documents_center_con} my={5}>
            <Typography variant="body1" >Glissez ou cliquez ici pour uploader les fichiers</Typography>
          </Box>

          <Box className={classes.documents_bth_con} margin="normal" >
            <Button className={classes.documents_bth}>
              <DELETE /> Filename.pdf <PDF />
            </Button>
            <Button className={classes.documents_bth}>
              <DELETE /> Filename.pdf <PDF />
            </Button>

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Documents;