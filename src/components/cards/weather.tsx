import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { getWeatherResult } from "../../api/openWeatherApi";
import { WeatherResult } from "../../api/weatherResult";

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
    fontSize: theme.typography.h2.fontSize,
  },
  minMax: {
    fontSize: theme.typography.h6.fontSize,
  },
}));
export const Weather: React.FunctionComponent<{}> = () => {
  const [weatherResult, setWeatherResult] = React.useState<WeatherResult>();
  const classes = useStyles();

  React.useEffect(() => {
    getWeatherResult().then((weatherResult) => {
      console.log(weatherResult);
      setWeatherResult(weatherResult);
    });
  }, []);

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader} title="آب و هوا"></CardHeader>
      <CardContent>
        <Grid container>
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
    </Card>
  );
};

export default Weather;
