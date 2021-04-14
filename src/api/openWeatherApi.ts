import axios from "axios";
export const getWeatherResult = (): Promise<number> => {
  const api_key = "2f6ba57fc56bca4b09deabe261e6064e";
  var api_url = `http://api.openweathermap.org/data/2.5/weather?q=mashhad&appid=${api_key}&units=metric`;
  return axios
    .get(api_url)
    .then(({ data }) => {
      console.log(data);
      console.log("Temp:", data.main.temp);
      return data.main.temp;
    })
    .catch((e) => 0);
};
