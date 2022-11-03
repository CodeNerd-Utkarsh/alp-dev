import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useMutation } from '@apollo/client';
import { Box, Button, Container } from "@mui/material";
import TwinHeading from "components/TwinHeading/TwinHeading";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import InvestorType from "./InvestorType";
import OfficeDate from "./OfficeDetails";
import { makeStyles } from "tss-react/mui";
import { CREATE_USER } from 'graphql/mutation/auth_mutation_gql';
import { styled } from "@mui/material/styles";
// import { ThemeProvider, useTheme } from '@material-ui/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is required'),
  lastName: yup
    .string()
    .required('Last name is required'),
  phoneNumber: yup
    .string()
    .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Please enter a valid phone number")
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  referrer: yup
    .string()
    .email('Enter a valid email'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  userType: yup
    .string()
    .required('Investor Type is required')
});

const useStyles = makeStyles()((theme) => {
  return {
    main: {
      display: "flex",
      justifyContent: "center",
    },

    investorcon: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    btncontainer: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
    },
    btn: {
      backgroundColor: "#4cbfd0",
      margin: "2px",
      width: "147px",
      height: "45px",

      "&.MuiButton-root": {
        fontSize: "18px",
        color: "white",
        margin: "5px"

      }
    },
    stepperbox: {
      "& .MuiStepIcon-root": {
        fontSize: "2.5rem",

        [theme.breakpoints.down("lg")]: {
          fontSize: "2rem",
        },
      },
      "& .MuiStepLabel-label": {
        fontSize: "16px",
        color: "#000000",

        [theme.breakpoints.down("md")]: {
          fontSize: "12px",

        },
      },
    },
    stepper_con: {
      width: "100%",
    }
  };
});

const stepperComponent = (step, formik) => {
  switch (step) {
    case 0:
      return <OfficeDate formik={formik} />;
    case 1:
      return <InvestorType formik={formik} />;
    default:
      return <div>Invalid Step</div>;
  }
};

const InvestorSignUp = () => {
  const { classes } = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [createUser, { data: userData }] = useMutation(CREATE_USER, {
    context: {
      uri: process.env.REACT_APP_AUTH_URL
    }
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      referrer: "",
      password: "",
      userType: ""
    },
    validationSchema: validationSchema
  });

  const handleSubmit = ({ values }) => {
    console.log(values);
    createUser({
      variables: {
        userInput: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          primaryContactNumber: values.phoneNumber,
          attributes: JSON.stringify({
            referrer: values.referrer
          })
        }
      }
    });
  };

  const handleNext = () => {
    console.log(formik.values);
    if (activeStep < 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      handleSubmit(formik);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  React.useEffect(() => { }, [activeStep]);

  React.useEffect(() => {
    console.log(userData);
    if (userData?.createUser?.id) {
      console.log("User created");
    }
  }, [userData]);
  const signupdata = ["Office Details", "What type of investor are you?"];
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <TwinHeading text="Investor sign up" />

      <Box className={classes.main}>
        <Box className={classes.investorcon} my={10}>
          <form onSubmit={formik.handleSubmit}>
            <Box className={classes.stepperbox}>
              <Stepper
                activeStep={activeStep}
                className={classes.stepperSize}
                // alternativeLabel={matches ? true : false}
                >
                {
                  signupdata.map((step, i) => (
                    <Step key={i}>
                      <StepLabel StepIconProps={{ sx: { fontSize: "2rem" } }}>
                        {step}
                      </StepLabel>
                    </Step>
                  ))
                }
              </Stepper>
            </Box>

            <Box className={classes.stepper_con} my={10}>
              {stepperComponent(activeStep, formik)}
            </Box>

            <Box className={classes.btncontainer}>
              <Box>
                {activeStep === 0 ? null : (
                  <Button
                    variant="contained"
                    onClick={() => handlePrev()}
                    className={classes.btn}
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => handleNext()}
                  className={classes.btn}
                >
                  {activeStep === 1 ? "Signup" : "Send"}
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Container >
  );
};

export default InvestorSignUp;
