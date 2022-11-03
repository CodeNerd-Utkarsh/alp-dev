/* eslint-disable semi */
import React from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { SidebarStyle } from './SidebarStyle';
import { ListItemText } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import { ReactComponent as V1 } from "../../assets/images/profileimg/Vector1.svg";
import { ReactComponent as V2 } from "../../assets/images/profileimg/Vector2.svg";
import { ReactComponent as V3 } from "../../assets/images/profileimg/Vector3.svg";
import { ReactComponent as V4 } from "../../assets/images/profileimg/Vector4.svg";
import { ReactComponent as V5 } from "../../assets/images/profileimg/Vector5.svg";
import { useSelector } from "react-redux";

const drawerWidth = 300;

const Title = [
  {
    nameE: "Nom de l'entreprise",
    name: "Company Name    ",
    icon: <V1 />,

  },
  {
    nameE: "Historique d'activités",
    name: "Activity history",
    icon: <V2 />
  },
  {
    nameE: "Équipe",
    name: "Crew",
    icon: <V3 />
  },
  {
    nameE: "Détail sur l'entreprise ",
    name: "Company detail",
    icon: <V4 />
  },
  {
    nameE: "Coordonnées",
    name: "Contact information    ",
    icon: <V5 />
  },

];
const Sidebar = () => {
  const { classes } = SidebarStyle();
  const isEnglish = useSelector((state) => state.lang.value)

  if (!isEnglish) {
    return (
      <>
        <Drawer
          variant="permanent"
          anchor="left"
          className={classes.sidedrawer}
          sx={{
            zIndex: 1,
            width: { lg: drawerWidth, xs: "50px" },
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: { lg: drawerWidth, xs: "50px" },
              boxSizing: 'border-box',
            }
          }}
        >
          <List sx={{ marginTop: "80px", color: "white" }}>
            {Title.map((value, index) => (
              <ListItem key={index}>
                <ListItemIcon>{value?.icon}</ListItemIcon>
                <ListItemText primary={value?.nameE} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    );
  }
  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.sidedrawer}
        sx={{
          zIndex: 1,
          width: { lg: drawerWidth, xs: "50px" },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: { lg: drawerWidth, xs: "50px" },
            boxSizing: 'border-box',
          }
        }}
      >
        <List sx={{ marginTop: "80px", color: "white" }}>
          {Title.map((value, index) => (
            <ListItem key={index}>
              <ListItemIcon>{value?.icon}</ListItemIcon>
              <ListItemText primary={value?.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );

};

export default Sidebar;