import React from "react";
import Container from "@mui/material/Container";
import TwinHeading from "components/TwinHeading/TwinHeading";
import { FETCH_TEAM_MEMBER_DATA } from "graphql/query/cms_query_gql";
import { useQuery } from "@apollo/client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

import backgroundimg from "assets/images/landing/ourteamback.png";
import { ReactComponent as LinkedIn } from "assets/images/landing/in.svg";
import { DocumentRenderer } from "@keystone-6/document-renderer";

const useStyles = makeStyles()((theme) => {
  return {
    background: {
      backgroundImage: `url(${backgroundimg})`,
      width: "100%",
      height: "auto",
      backgroundSize: "100% 100%",
      padding: "20px 0px",
      margin: "30px 0px",
      [theme.breakpoints.down("md", "sx")]: {
        backgroundColor: "#E7E7E7",
        marginTop: "0px"
      },
    },
    container: {
      maxWidth: "max(calc(100% - 40px), 80%)",
      margin: "0 auto"
    },
    teamCard: {
      minWidth: "300px",
      maxWidth: "24%",
      margin: "5px",
      "&.	MuiCardMedia-root": {
        padding: "10px"
      }
    },
    cardContainer: {
      width: "100%",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "stretch"
    },
    memberName: {
      fontWeight: 500
    },
    titleContainer: {
      display: "flex",
      justifyContent: "space-between"
    }
  };
});

const OurTeam = () => {
  const { classes } = useStyles();

  const { data } = useQuery(FETCH_TEAM_MEMBER_DATA);

  const [membersData, setMembersData] = React.useState([]);

  React.useEffect(() => {
    if (data) {
      setMembersData(data?.teamMembers);
    }
  }, [data]);

  return (
    <div className={classes.background}>
      <Container maxWidth="xl">
        <div className={classes.container}>
          <TwinHeading text="Notre équipe" />
          <div className={classes.cardContainer}>
            {membersData.map((member) => (
              <Card className={classes.teamCard} sx={{ padding: "10px" }} key={member?.id}>
                <CardMedia component="img" height="auto"
                  image={`${process.env.REACT_APP_CMS_HOST}${member?.image?.url}`}
                  alt={member?.memberName}
                />
                <CardContent sx={{ padding: "10px 0px 0px 0px", marginBottom: "0px" }}>
                  <div className={classes.titleContainer}>
                    <div className={classes.memberName}>{member?.memberName}</div>
                    <div>
                      <a href=""><LinkedIn /></a>
                    </div>
                  </div>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontStyle: "italic",
                      marginTop: "-13px",
                      marginBottom: "10px",
                      fontSize: "16px",
                    }}
                  >
                    {member?.memberRole}
                  </Typography>
                  <div>
                    <DocumentRenderer document={member?.textContent?.document} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
