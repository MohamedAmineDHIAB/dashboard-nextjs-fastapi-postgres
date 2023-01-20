import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: 16,
                    "&.Mui-selected": {
                        backgroundColor: "black",
                    },
                    textTransform: "none",
                    fontFamily: "Fredoka One",
                    letterSpacing: "0.05rem",
                },
            },
        },
    },
    typography: {
        fontFamily: "Noto Sans Display",
        fontSize: 14,
    },
    palette: {
        primary: {
            main: "#6251ED",
            light: "#A49AF0",
            dark: "#4E3FBA",
        },
        secondary: {
            main: "#6251ED",
            light: "#A49AF0",
            dark: "#4E3FBA",
        },
        error: {
            main: "#F07775",
            dark: "#F07775",
        },
        success: {
            main: "#A3D9C5",
            dark: "#64DFB2",
        },
    },
});
