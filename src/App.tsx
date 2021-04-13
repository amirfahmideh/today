import React from "react";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import "./app.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
  appBar: {
    margin: 0,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  card: {},
  container: {
    padding: 10,
  },
}));

export const App: React.FunctionComponent<{}> = () => {
  const [drawerOpen, setDrawerOpenState] = React.useState(false);
  const classes = useStyles();
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
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => {
          setDrawerOpenState(false);
        }}
      >
        put whatever you want in here!
      </Drawer>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <CardHeader title="آب و هوا"></CardHeader>
          <CardContent>18 Degree</CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default App;
