import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { getWeatherResult } from "../../api/openWeatherApi";
import { WeatherResult } from "../../api/weatherResult";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  card: {},
  cardHeader: {
    textAlign: "center",
  },
  gridItem: {
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
  },
  degree: {
    fontSize: theme.typography.h3.fontSize,
  },
  minMax: {
    fontSize: theme.typography.h6.fontSize,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
export const Weather: React.FunctionComponent<{}> = () => {
  const [weatherResult, setWeatherResult] = React.useState<WeatherResult>();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();

  React.useEffect(() => {
    getWeatherResult().then((weatherResult) => {
      console.log("Weather Result:", weatherResult);
      setWeatherResult(weatherResult);
    });
  }, []);

  return (
    <Card className={classes.card}>
      {/* <CardHeader className={classes.cardHeader} title="آب و هوا"></CardHeader> */}
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridItem}>
            {weatherResult && (
              <div>
                <span className={classes.minMax}>
                  ({weatherResult.main.temp_min}-{weatherResult.main.temp_max})
                </span>
                <span className={classes.degree}>
                  {weatherResult.main.temp}&deg;<sup>c</sup>
                </span>
              </div>
            )}
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            {weatherResult && (
              <img
                alt={weatherResult.weather[0].description}
                src={`http://openweathermap.org/img/wn/${weatherResult.weather[0].icon}@2x.png`}
              ></img>
            )}
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            {weatherResult && <p>{weatherResult.weather[0].description}</p>}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="بیشتر"
        >
          <ExpandMoreIcon></ExpandMoreIcon>
        </IconButton>
      </CardActions>
      <CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid container spacing={6}>
            <Grid item className={classes.gridItem}>
              <Typography>سرعت باد</Typography>
              <Typography>
                <b>{weatherResult?.wind.speed}</b>
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography>درجه باد</Typography>
              <Typography>
                <b>{weatherResult?.wind.deg}</b>
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography>رطوبت</Typography>
              <Typography>
                <b>{weatherResult?.main.humidity}</b>
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography>فشار</Typography>
              <Typography>
                <b>{weatherResult?.main.pressure}</b>
              </Typography>
            </Grid>
          </Grid>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default Weather;
