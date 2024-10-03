// slices/weatherSlice.js

import { Warning } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    error: null,
  },
  reducers: {
    fetchWeatherSuccess: (state, action) => {
      console.warn(action.payload);
      
      state.loading = false;
      state.weatherData = action.payload;
    },
    fetchWeatherFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWeatherSuccess, fetchWeatherFailure } =
  weatherSlice.actions;
export default weatherSlice.reducer;
