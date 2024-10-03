import React, { useState, useEffect } from "react";

import {
  Card,
  Box,
  CardContent,
  Typography,
  Grid2,
  TextField,
  Button,
} from "@mui/material";
import {
  fetchWeatherFailure,
  fetchWeatherSuccess,
} from "../../Store/Reducers/weatherReducer";
import { fetchWeather } from "../../Serveces/weatherServece";
import { useSelector, useDispatch } from "react-redux";

const Weather = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("pune");
  const { weatherData, error } = useSelector((state) => state.weather);

  const getWeatherData = async () => {
    const response = await fetchWeather(city);
    if (response.status === 200) {
      alert("Weather data fetched successfully");
      dispatch(fetchWeatherSuccess(response?.data));
    } else {
      dispatch(fetchWeatherFailure(response?.data));
      alert(error?.message);
    }
  };
  const handleCity = (event) => {
    const { value } = event.target;
    setCity(value);
  };
  return (
    <Grid2>
      <Typography variant="h3">Weather Page</Typography>

      <Grid2 continer justifyContent="center">
        <>
          <Grid2 item xs={12} md={8} lg={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                flexGrow: 1,
                backgroundColor: "#2D3E50",
                color: "#fff",
                borderRadius: 4,
                boxShadow: 3,
              }}
            >
              <CardContent item xs={12} md={8} lg={6}>
                <Typography variant="h4" component="div" align="center">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </Typography>
                <Typography variant="subtitle1" align="center" gutterBottom>
                  {new Date().toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  my={2}
                >
                  <img
                    src={
                      weatherData.weather
                        ? `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`
                        : null
                    }
                    alt="weather icon"
                  />
                </Box>
                <Typography variant="h3" align="center">
                  {Math.round(weatherData?.main?.temp)}°C
                </Typography>
                <Typography variant="h6" align="center">
                  {weatherData.weather[0]
                    ? weatherData?.weather[0]?.description
                    : null}
                </Typography>
              </CardContent>
              <CardContent item xs={12}>
                {" "}
                <Grid2
                  container
                  sx={{ height: "70px" }}
                  spacing={2}
                  justifyContent="center"
                >
                  <Grid2 item>
                    <TextField
                      fullWidth
                      size="small"
                      label="Search location"
                      variant="standard"
                      value={city}
                      onChange={handleCity}
                      sx={{
                        backgroundColor: "",
                        borderRadius: 1,
                        height: "30px",
                      }}
                    />
                  </Grid2>
                  <Grid2 item>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={getWeatherData}
                      sx={{ height: "30px", marginTop: "16px" }}
                      size="small"
                      disabled={!city}
                    >
                      Search
                    </Button>
                  </Grid2>
                </Grid2>
                <Typography variant="h6" gutterBottom>
                  NAME: {weatherData?.name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  TEMP: {Math.round(weatherData?.main?.temp)}°C
                </Typography>
                <Typography variant="h6" gutterBottom>
                  HUMIDITY: {weatherData?.main?.humidity}%
                </Typography>
                <Typography variant="h6" gutterBottom>
                  WIND SPEED: {weatherData?.wind?.speed} m/s
                </Typography>
                <Box mt={2}>
                  <Typography variant="subtitle1" gutterBottom>
                    Forecast:
                  </Typography>
                  <Box display="flex" justifyContent="space-around">
                    <Box textAlign="center">
                      <Typography variant="body1">Thu</Typography>
                      <Typography variant="body2">29°C</Typography>
                    </Box>
                    <Box textAlign="center">
                      <Typography variant="body1">Wed</Typography>
                      <Typography variant="body2">30°C</Typography>
                    </Box>
                    <Box
                      textAlign="center"
                      bgcolor="#fff"
                      color="#000"
                      p={1}
                      borderRadius={2}
                    >
                      <Typography variant="body1">Mon</Typography>
                      <Typography variant="body2">32°C</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        </>
      </Grid2>
    </Grid2>
  );
};

export default Weather;
