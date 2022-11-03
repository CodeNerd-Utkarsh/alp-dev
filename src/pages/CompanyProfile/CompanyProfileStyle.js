import { makeStyles } from "tss-react/mui";

export const CompanyProfileStyle = makeStyles()(() => {
  return {
    userprofilemaincon: {
      padding: "30px",
     
    },
    userprofileimg:{
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    headerContainer:{
        width:' 100%',
        height:"40px",
        background: 'linear-gradient(to left, white -6% ,#C4C4C4 117%)',
                display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
       
        marginTop:"50px",
    },
    fieldName:{
        fontSize: "18px",
        width: "25%"
    },
    fieldValue:{
        fontSize: "30px", 
        fontWeight: "bold",
        width: "75%"
    }
  };
});
