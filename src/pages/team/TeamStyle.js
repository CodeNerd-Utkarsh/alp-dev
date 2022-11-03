import { makeStyles } from "tss-react/mui";

export const TeamStyle = makeStyles()(() => {
  return {
    contact: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"

    },
    userprofileimg: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    userprofileeditfileld: {
      width: ' 100%',
      height: "40px",
      background: 'linear-gradient(to left, white -6% ,#C4C4C4 117%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      marginTop: "50px",
    },
    profilehedfield: {
      fontSize: "18px"
    },
    profileansfield: {
      fontSize: "30px",
      fontWeight: "bold"
    }
  };
});
