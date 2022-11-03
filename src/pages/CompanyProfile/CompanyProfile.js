import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Grid } from '@mui/material';
import { CompanyProfileStyle } from './CompanyProfileStyle';
import Typography from '@mui/material/Typography';
import profile from '../../assets/images/profileimg.png';
import { styled } from "@mui/material/styles";
import Sidebar from 'components/sidebar/Sidebar';

const EditButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.primary.main,
  height: "inherit",
  borderTobRightRadius: "5px",
  paddingRight: "25px",
  paddingLeft: "25px",
  ":hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down("md")]: {
    paddingRight: "6px",
    paddingLeft: "6px",
  },
}));

const FieldContainer = styled("div")(() => ({
  display: "flex"
}));

const style = {
  fontSize: { lg: '16px', sm: '14px', xs: '12px' }

};



const CompanyProfile = () => {
  const { classes } = CompanyProfileStyle();
  const params = useParams();
  const { keycloak, initialized } = useKeycloak();
  const [isOwnProfile, setIsOwnProfile] = React.useState(false);

  React.useEffect(() => {
    if (initialized) {
      if (keycloak?.authenticated) {
        setIsOwnProfile(keycloak?.idTokenParsed?.sub === params?.id);
      }
    }
  }, [initialized, keycloak]);

  React.useEffect(() => {
    console.log(isOwnProfile);
  }, [isOwnProfile]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ bgcolor: 'background.default', p: { lg: 3 } }}>
        <Container maxWidth='xl'>
          <Typography sx={{ fontSize: "30px" }} gutterBottom>
            Profile
          </Typography>
          <Grid container spacing={2} justifyContent="space-between" alignItems="center" >
            <Grid item sm={5} xs={12}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={3} >
                  <img src={profile} style={{ width: "100%", height: "auto" }} />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontSize: { lg: '25px', sm: '20px', xs: '18px' } }}>
                    Nom Entreprise
                  </Typography>
                  <Typography sx={{ ...style }}>
                    Paris, France
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={7} xs={12} >
              <Grid container spacing={{ lg: 11, xs: 2 }}>
                <Grid item xs={4}>
                  <Typography component="p" sx={{ ...style }}>
                    Date d inscription:
                  </Typography>
                  <Typography sx={{ ...style, fontWeight: "bold" }}>
                    Janvier 20 2022
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ ...style }}>
                    Secteur:
                  </Typography>
                  <Typography sx={{ ...style, fontWeight: "bold" }}>
                    Applications mobiles
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ ...style }}>
                    Stage:
                  </Typography>
                  <Typography sx={{ ...style, fontWeight: "bold" }}>
                    Seed
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box className={classes.headerContainer}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              {"Information sur l'entreprise"}
            </Typography>
            {isOwnProfile && <EditButton>Modifier</EditButton>}
          </Box>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Nom:
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
              Prime
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Téléphone:
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
              9874563210
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Mobile:
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
              988988855662
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Industrie:
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
              Applications mobile
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Stage
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
              Seed
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Website:
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
              https://www.startup.fr
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Twitter:
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Parrain:
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Raison Sociale:
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
              SAS
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Valorisation:
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
              SAS
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Devise:
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
              EUR
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Montant levée (€) :
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
            </Typography>
          </FieldContainer>
          <FieldContainer>
            <Typography sx={{ ...style }} className={classes.fieldName}>
              Montant levée (€) :
            </Typography>
            <Typography sx={{ ...style }} className={classes.fieldValue}>
            </Typography>
          </FieldContainer>
          <Box className={classes.headerContainer}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              Adresse
            </Typography>
            {isOwnProfile && <EditButton>Modifier</EditButton>}
          </Box>
          <Grid container sx={{ padding: "30px" }}>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Adresse 1 :

                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>


                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Adresse 2 :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>


                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Ville:
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>


                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  État :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>

                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Code postal :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>


                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Pays :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>

                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >


                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography
                  sx={{ ...style, fontWeight: "bold" }}
                ></Typography>
              </Grid>
            </Grid>
          </Grid>

          <Box className={classes.headerContainer}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              Revaluation
            </Typography>
            {isOwnProfile && <EditButton>Modifier</EditButton>}
          </Box>
          <Grid container sx={{ padding: "30px" }}>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Valorisation ALP :

                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style, fontWeight: "bold" }}>


                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Dernière étude
                  :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>
                  20/01/2022

                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Ville:
                </Typography>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Typography sx={{ ...style }}>


                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  État :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>

                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Code postal :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>

                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Pays :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>

                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >


                </Typography>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                ></Typography>
              </Grid>
            </Grid>
          </Grid>
          <Box className={classes.headerContainer}>
            <Typography
              sx={{ ...style, fontWeight: "bold", paddingLeft: "30px" }}
            >
              Résumé
            </Typography>
            {isOwnProfile && <EditButton>Modifier</EditButton>}
          </Box>
          <Grid container sx={{ padding: "30px" }}>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >

                  Concept (1 ligne) :

                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>
                  Nous sommes le Gorillas de la pharmacie.

                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >
                  Business model :

                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>
                  Abonnement pour les pharmacies + pourcentage du CA du panier généré
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >
                  Secret Sauce  :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>
                  Seul spécialiste dans le domaine de la pharma
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >
                  Chiffres-clés :
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography sx={{ ...style }}>
                  340 pharmacies listées

                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style }}
                  className={classes.fieldName}
                >


                </Typography>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Typography
                  sx={{ ...style, fontWeight: "bold" }}
                ></Typography>
              </Grid>
            </Grid>
          </Grid>



        </Container>
      </Box>
    </Box>
  );
};

export default CompanyProfile;