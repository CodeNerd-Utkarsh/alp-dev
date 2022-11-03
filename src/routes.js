import React, { Suspense } from "react";
import { makeStyles } from "tss-react/mui";
import ResponsiveAppBar from "components/Header/Header";
import ResponsiveFooter from "components/Footer/Footer";
import ScrollToTop from "helpers/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Landing = React.lazy(() => import("./pages/Landing/Landing"));
const NoMatch = React.lazy(() => import("./pages/NoMatch/NoMatch"));
const CompanyProfile = React.lazy(() => import("./pages/CompanyProfile/CompanyProfile"));
const InvestorSignUp = React.lazy(() => import("./pages/Signup/InvestorSignUp"));
const Funding = React.lazy(() => import("./pages/Funding/Funding"));
const Team = React.lazy(() => import("./pages/team/Team"));
const Pharmacool = React.lazy(() => import("./pages/DealDetail/DealDetail"));
const DealHistory = React.lazy(() => import("./pages/DealHistory/DealHistory"));



const useStyles = makeStyles()((theme) => {
  return {
    root: {
      flexGrow: 1,
      paddingTop: "7px",
      [theme.breakpoints.down('sm')]: {
        paddingTop: "23px"
      },
      minHeight: "100vh",
      margin: "0 auto",
    },
  };
});

export const AppRouter = () => {
  const { classes } = useStyles();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ResponsiveAppBar />
      <div className={classes.root}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="company/:id">
              <Route index element={<CompanyProfile />} />
              <Route path="account" element={<CompanyProfile />} />
              <Route path="dashboard" element={<CompanyProfile />} />
            </Route>
            <Route path="sign-up" element={<InvestorSignUp />} />
            <Route path="funding" element={<Funding />} />
            <Route path="team" element={<Team />} />
            <Route path="pharmacool" element={<Pharmacool />} />
            <Route path="deal-history" element={<DealHistory />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
      </div>
      <ResponsiveFooter />
    </BrowserRouter>
  );
};
