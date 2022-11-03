import { makeStyles } from "tss-react/mui";

export const pharmacoolStyle = makeStyles()(() => {
  return {
    firstSection:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:"30px"
    },
    userprofilemaincon: {
      padding: "30px",

    },
    userprofileimg: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    Pharmacooleditfileld:{
        width:' 100%',
        height:"40px",
        background: 'linear-gradient(to left, white -6% ,#C4C4C4 117%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:"20px",
        marginBottom:"20px"
    },
    profilehedfield: {
      fontSize: "18px"
    },
    // Pharmacooleditfileld: {
    
    //   height: "40px",
    //   background: 'linear-gradient(to left, white -6% ,#C4C4C4 117%)',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',

    //   marginTop: "10px",
    // },
    
    profileansfield: {
      fontSize: "30px",
      fontWeight: "bold"
    }
  };
});
