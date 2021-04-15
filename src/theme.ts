import { createMuiTheme } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { faIR } from "@material-ui/core/locale";
export const theme = createMuiTheme(
  {
    typography: {
      fontFamily: ["IranSans", "tahoma"].join(","),
    },
    palette: {
      primary: teal,
      secondary: {
        main: "#69f0ae",
      },
      type: "dark",
    },
  },
  faIR
);
