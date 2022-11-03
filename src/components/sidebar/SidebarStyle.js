import { makeStyles } from "tss-react/mui";
const drawerWidth = 350;

export const SidebarStyle = makeStyles()((theme) => {
  return {
    sidedrawer: {
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
        backgroundColor:"#4CBFD0",
        flexShrink: 0,
      },
    },
  };
});