import axios from "axios";
import { WeatherResult } from "./weatherResult";
export const getWeatherResult = (): Promise<WeatherResult> => {
  const api_key = "2f6ba57fc56bca4b09deabe261e6064e";
  var api_url = `https://api.openweathermap.org/data/2.5/weather?q=mashhad&appid=${api_key}&units=metric`;
  return axios
    .get(api_url)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => 0);
};
