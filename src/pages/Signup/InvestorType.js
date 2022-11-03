import React from 'react';
import PropTypes from 'prop-types';
import { Box, RadioGroup, Typography, Container } from '@mui/material';
import Radio from '@mui/material/Radio';
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    investortype: {
      display: "flex",
      flexDirection: "column",
      height: "100px",
      justifyContent: "center",
      border: "1px solid  #4CBFD0",
      borderRadius: "10px",
      [theme.breakpoints.down("sm")]: {
        height: "150px",
      }
    },
    radiogroup: {
      display: "flex",
      justifyContent: "flexStart",
      alignItems: "center"
    }
  };
});

const InvestorType = (props) => {
  const formik = props.formik;
  const { classes } = useStyles();

  return (
    <Container>
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          What type of investor are you? {formik?.values?.userType}
        </Typography>
        <RadioGroup aria-label="investorType" name="userType" defaultValue="a" value={formik.values.userType} onChange={formik.handleChange}>
          <Box className={classes.investortype} my={4}>
            <Box className={classes.radiogroup}>
              <Box>
                <Radio
                  value="a"
                  inputProps={{ 'aria-label': 'A' }}
                />
              </Box>
              <Box>
                <Typography variant="h6">Restricted Investor</Typography>

                <Typography variant="body1">
                  Crowd investors limited to investing 10% of wealth. Cannot
                  investbut may view all opportunities on this platform
                </Typography>

              </Box>
            </Box>
          </Box>

          <Box className={classes.investortype} my={4}>
            <Box className={classes.radiogroup}>
              <Box >
                <Radio
                  value="b"
                  inputProps={{ 'aria-label': 'B' }}
                />
              </Box>
              <Box>
                <Typography variant="h6">Restricted Investor</Typography>

                <Typography variant="body1">
                  Crowd investors limited to investing 10% of wealth. Cannot
                  investbut may view all opportunities on this platform
                </Typography>

              </Box>
            </Box>
          </Box>

          <Box className={classes.investortype} my={4}>
            <Box className={classes.radiogroup}>
              <Box >
                <Radio
                  value="c"
                  inputProps={{ 'aria-label': 'C' }}
                />
              </Box>
              <Box>
                <Typography variant="h6">Restricted Investor</Typography>

                <Typography variant="body1">
                  Crowd investors limited to investing 10% of wealth. Cannot
                  investbut may view all opportunities on this platform
                </Typography>

              </Box>
            </Box>
          </Box>
          <Box className={classes.investortype} my={4}>
            <Box className={classes.radiogroup}>
              <Box >
                <Radio
                  value="d"
                  inputProps={{ 'aria-label': 'D' }}
                />
              </Box>
              <Box>
                <Typography variant="h6">Restricted Investor</Typography>

                <Typography variant="body1">
                  Crowd investors limited to investing 10% of wealth. Cannot
                  investbut may view all opportunities on this platform
                </Typography>

              </Box>
            </Box>
          </Box>
          <Box className={classes.investortype} my={4}>
            <Box className={classes.radiogroup}>
              <Box >
                <Radio
                  value="e"
                  inputProps={{ 'aria-label': 'E' }}
                />
              </Box>
              <Box>
                <Typography variant="h6">Restricted Investor</Typography>

                <Typography variant="body1">
                  Crowd investors limited to investing 10% of wealth. Cannot
                  investbut may view all opportunities on this platform
                </Typography>

              </Box>
            </Box>
          </Box>
        </RadioGroup>
        <Box my={4}>
          <Typography sx={{ fontSize: { lg: "16px", sm: "14", xs: "12" } }}>
            Crowd investors limited to investing 10% of wealth. Cannot
            investbut may view all opportunities on this platform
          </Typography>
        </Box>
        <Box my={4}>
          <Typography sx={{ fontSize: { lg: "16px", sm: "14", xs: "12" }, fontWeight: "bold" }}>
            Restricted Investor
          </Typography>

          <Typography sx={{ fontSize: { lg: "16px", sm: "14", xs: "12" } }}>
            Crowd investors limited to investing 10% of wealth. Cannot
            investbut may view all opportunities on this platform
          </Typography>
        </Box>
        <Box my={4}>
          <Typography sx={{ fontSize: { lg: "16px", sm: "14", xs: "12" }, fontWeight: "bold" }}>
            High Net Worth Individual
          </Typography>

          <Typography sx={{ fontSize: { lg: "16px", sm: "14", xs: "12" } }}>
            Can invest in simple deals. A Certified High Net Worth Individual
            may view all opportunities on this platform and invest in simple
            deals. Certified High Net Worth Individual A Certified High Net
            Worth Individual is an individual who has signed, within the
            period of twelve months ending with the day on which the
            communication is made, a statement in the following terms: High
            Net Worth Individual Statement I make this statement so that I can
            receive promotional communications which are exempt from the
            restriction on promotion of non-mainstream pooled investments. The
            exemption relates to certified high net worth individual and I
            declare that I qualify as such because at least one of the
            following applies to me:{" "}
          </Typography>
        </Box>

        <Box my={4}>
          <Typography sx={{ fontSize: { lg: "18px", sm: "16", xs: "14" }, fontWeight: "bold" }}>
            By completing this online registration, I confirm the information
            provided to be true and accurate, and agree to the Terms of
            Website Use, the Privacy Policy, and the Confidentiality Statement
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

InvestorType.propTypes = {
  formik: PropTypes.object
};

export default InvestorType;
