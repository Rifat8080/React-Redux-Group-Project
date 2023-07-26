/* eslint-disable max-len */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: true,
  error: '',
};

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    flickr_images: rocket.flickr_images,
    text: rocket.description,
    reserved: false,
  }));
});
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleReservation: (state, action) => {
      const { rocketId, isReserved } = action.payload;
      state.rockets = state.rockets.map((rocket) => (rocket.id === rocketId ? { ...rocket, reserved: isReserved } : rocket));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
