import React from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import "./app.css";
import Weather from "./components/cards/weather";
import MainDrawer from "./components/menu/mainDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.background.default,
    height: "100vh",
  },
  appBar: {
    margin: 0,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  container: {
    padding: 10,
    alignContent: "center",
  },
  cardItem: {
    alignContent: "center",
    margin: "auto",
  },
}));

export const App: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpenState] = React.useState(false);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setDrawerOpenState(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            امروز
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <MainDrawer
        openDrawer={isDrawerOpen}
        handleOnCloseDrawerClick={() => {
          setDrawerOpenState(false);
        }}
      />
      <Grid container className={classes.container}>
        <Grid xs={10} md={6} lg={4} item className={classes.cardItem}>
          <Weather />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
