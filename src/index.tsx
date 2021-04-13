import React from "react";
import dom from "react-dom";
import "./index.css";
import App from "./app";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { faIR } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    typography: {
      fontFamily: ["Iran Sans", "tahoma"].join(","),
    },
    palette: {
      type: "dark",
    },
  },
  faIR
);
dom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
