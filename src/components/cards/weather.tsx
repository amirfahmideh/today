import React from "react";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getWeatherResult } from "../../api/openWeatherApi";
import { WeatherResult } from "../../api/weatherResult";
import clsx from "clsx";
import { FormattedFromUnix } from "../../helper/dateHelper";

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
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
  signSpacing: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
      setWeatherResult(weatherResult);
    });
  }, []);

  return (
    <Card className={classes.card}>
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
              <Typography>طلوع</Typography>
              <Typography>
                <b>
                  {FormattedFromUnix(
                    weatherResult?.sys.sunset ?? 0,
                    "hh:mm:ss"
                  )}
                </b>
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography>غروب</Typography>
              <Typography>
                <b>
                  {FormattedFromUnix(
                    weatherResult?.sys.sunrise ?? 0,
                    "HH:mm:ss"
                  )}
                </b>
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography>سرعت باد</Typography>
              <Typography>
                <b>{weatherResult?.wind.speed}</b>
                <span className={classes.signSpacing}>meter/sec</span>
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography>درجه باد</Typography>
              <Typography>
                <b>{weatherResult?.wind.deg}</b>
                <span className={classes.signSpacing}>degree</span>
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography>رطوبت</Typography>
              <Typography>
                <b>{weatherResult?.main.humidity}</b>
                <span className={classes.signSpacing}>%</span>
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Typography>فشار</Typography>
              <Typography>
                <b>{weatherResult?.main.pressure}</b>
                <span className={classes.signSpacing}>hpa</span>
              </Typography>
            </Grid>
          </Grid>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default Weather;
