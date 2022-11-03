import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, TextField, Typography } from '@mui/material';

const OfficeDetails = (props) => {
  const formik = props.formik;

  return (
    <Box>
      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
        {" "}
        Investor Details
      </Typography>

      <Grid container spacing={6}>
        <Grid item md={6}>
          <TextField
            name="firstName"
            label="First name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            name="lastName"
            label="Last name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <TextField
            name="phoneNumber"
            label="Phone number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item md={6}>
          <TextField
            name="referrer"
            label="Referrer"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formik.values.referrer}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

OfficeDetails.propTypes = {
  formik: PropTypes.object
};

export default OfficeDetails;
