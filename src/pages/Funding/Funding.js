import React from "react";
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import TwinHeading from "components/TwinHeading/TwinHeading";
import { makeStyles } from "tss-react/mui";
import Active from "./Active";
import Documents from "./Documents";
import Equipe from "./Equipe";
import Impact from "./Impact";
import Informactionstepper from "./Informactionstepper";
import Marlet from "./Marlet";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const useStyles = makeStyles()((theme) => {
  return {
    main: {
      display: "flex",
      justifyContent: "center",
    },
    steppersize:{
      "&.MuiStepper-root":{
[theme.breakpoints.only("xs")]:{
  display:"none",
},
      },

    },
    investorcon: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    stepperbox: {
      // width: "1330px",
    },
    btncontainer: {
      display: "flex",
      justifyContent: "flex-end",
      
    },
    btn: {
      backgroundColor: "#4cbfd0",
      margin: "2px",
      width: "147px",
      height: "45px",

      "&.MuiButton-root": {
        fontSize: "18px",
        color: "white",
        margin: "5px",
      },
    },
    funding_fotter_text: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

const Funting = () => {
  const { classes } = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [progress, setProgress] = React.useState(16);
  
  const handleIncress = () => {
    if (activeStep < 5) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
     
      if(progress < 80 ){
        setProgress((value) => value + 16);
      }
      else{
        setProgress((value) => value + 20);
      }
      
    }
  };
console.log(progress);
  const handleDecress = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  React.useEffect(() => {
    stepper();
  }, [activeStep]);

  function stepper() {
    switch (activeStep) {
      case 0:
        return <Informactionstepper />;

      case 1:
        return <Equipe />;

      case 2:
        return <Active />;

      case 3:
        return <Marlet />;

      case 4:
        return <Impact />;

      case 5:
        return <Documents />;
    }
  }
  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const fundingstepdata = [
    "Informations générales",
    "Equipe",
    "Activité",
    "Marché",
    "Impact",
    "Documents",
  ];
  return (
    <>
      <Container maxWidth="lg">
      
        <TwinHeading text="Présentez votre projet" />
        <Box sx={{position:'relative',display:{sm:'none',xs:'inline-flex'},}}>
     
     <CircularProgress variant="determinate" value={progress}  size="5rem"/>
 
     <Box sx={{
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
       position:'absolute',
       top: 0,
       left: 0,
       bottom: 0,
       right: 0,}}>
     <Typography variant="body1" color="primary">{progress} %</Typography>
     </Box>
     </Box>
        <div>
          <Stepper
            sx={{ mt: 10 ,}}
            alternativeLabel={matches ? true : false}
            activeStep={activeStep}
            className={classes.steppersize}

          >
            {fundingstepdata.map((step, i) => (
              <Step key={i}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box  sx={{ mt: {sm:10}}} >
            {stepper()}
          </Box>

          <Box className={classes.btncontainer} sx={{display:'flex',justifyContent:{sm:'flex-end',xs:'center'},px:{sm:4,lg:24}}} >
            <Box  sx={{px:{lg:13},mb:4}}>
              {activeStep === 0 ? null : (
                <Button
                  variant="contained"
                  onClick={() => handleDecress()}
                  className={classes.btn}
                 
                >
                  Précédent
                </Button>
              )}
              <Button
                variant="contained"
                onClick={() => handleIncress()}
                className={classes.btn}
              >
                Suivant
              </Button>
            </Box>
          </Box>

          {activeStep === 0 ? (
            <Box className={classes.funding_fotter_text} mt={2} mb={2}>
              <Box  sx={{px:{lg:24}}} component="Container">
                <Typography variant="body1" textAlign="center" sx={{px:{lg:15}}}>
                  By completing this online registration, I confirm the
                  information provided to be true and accurate, and agree to the
                  Terms of Website Use, the Privacy Policy, and the
                  Confidentiality Statement
                </Typography>
              </Box>
            </Box>
          ) : null}
        </div>
      </Container>
    </>
  );
};

export default Funting;
