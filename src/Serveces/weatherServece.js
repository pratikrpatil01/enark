import axios from "axios";

export const fetchWeather = async (city) => {
  const apiKey = "fbf3e003286bd928634bf255a83c9d44";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return error.response;
  }
};
