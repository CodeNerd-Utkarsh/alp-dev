import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme();
theme = responsiveFontSizes(theme);

let lightTheme = createTheme({
    palette: {
        primary: {
            light: "#84f2ff",
            main: "#4cbfd0",
            dark: "#008e9f",
            contrastText: "#000000"
        },
        secondary: {
            light: "#ffffff",
            main: "#efefef",
            dark: "#bdbdbd",
            contrastText: "#000000"
        },
        mode: "light",
    },
    typography: {
        fontFamily: [
            "Poppins",
        ]
    },
    spacing: 4,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            landing: 1100,
            lg: 1200,
            xl: 1536
        },
      
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none"
                },
         
            h4: {
                fontFamily: "Poppins",
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: "30px",
                textAlign: "left",
                color: "#383838",
                // lineHeight: 1.5,
                // marginTop: '18px',
                // marginBottom: '20px',
                [theme.breakpoints.down("lg")]: {
                  fontSize: "14px",
                  noWrap: true,
                },
            },
            h5: {
                fontFamily: "Poppins",
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: "18px",
                textAlign: "left",
                color: "#383838",
                // lineHeight: 1.5,
                // marginTop: '18px',
                // marginBottom: '20px',
                [theme.breakpoints.down("lg")]: {
                  fontSize: "14px",
                  noWrap: true,
                },
            },
            body1: {
                fontFamily: "Poppins",
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: "18px",
                textAlign: "left",
                color: "#383838",
                // lineHeight: 1.5,
                // marginTop: '18px',
                // marginBottom: '20px',
                [theme.breakpoints.down("lg")]: {
                  fontSize: "14px",
                  noWrap: true,
                },
            },

        },
        }
    }
});

lightTheme = responsiveFontSizes(lightTheme, { breakpoints: ["xs", "sm", "md", "lg", "xl"] });

export { lightTheme };
