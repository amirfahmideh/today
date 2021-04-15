import React from "react";
import dom from "react-dom";
import "./index.css";
import App from "./app";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

dom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
