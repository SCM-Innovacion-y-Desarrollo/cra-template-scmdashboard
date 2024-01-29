import { createTheme } from "@mui/material";
import { amber, blue, blueGrey, brown, green, purple, red } from "@mui/material/colors";

//https://zenoo.github.io/mui-theme-creator/
//https://mui.com/material-ui/customization/default-theme/
const LightTheme = createTheme({
    palette:{
        mode: "light",
        primary: {
            main: purple[500],
        },
        secondary: {
            main: brown[500],
        },
        success:{
            main: green[500],
            contrastText: "#fff"
        },
        warning: {
            main: amber[500],
            contrastText: "#fff"
        },
        error: {
            main: red[500],
        },
        info:{
            main: blue[500],
        }
    },
});

const DarkTheme = createTheme({
    palette:{
        mode: "dark",
        background: {
            default: '#000',
            paper: "#000"
        },
        primary: {
            main: purple[900],
        },
        secondary: {
            main: brown[900],
        },
        success:{
            main: green[900],
            contrastText: "#fff"
        },
        warning: {
            main: amber[900],
            contrastText: "#fff"
        },
        error: {
            main: red[900],
        },
        info:{
            main: blue[900],
        }
    }
});

const CustomTheme = createTheme({
    palette:{
        background: {
            default: blueGrey[900],
            paper: "#000"
        },
        primary: {
            main: purple[900],
        },
        secondary: {
            main: brown[900],
        },
        success:{
            main: green[900],
            contrastText: "#fff"
        },
        warning: {
            main: amber[900],
            contrastText: "#fff"
        },
        error: {
            main: red[900],
        },
        info:{
            main: blue[900],
        }
    }
});

export {
    LightTheme,
    DarkTheme,
    CustomTheme
}