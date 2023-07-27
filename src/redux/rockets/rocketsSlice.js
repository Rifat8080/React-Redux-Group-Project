/* eslint-disable max-len */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: true,
  error: '',
};

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
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
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const { rocketId } = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = true;
        localStorage.setItem('rocketsData', JSON.stringify(state.rockets));
      }
    },
    cancelReserveRocket: (state, action) => {
      const { rocketId } = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = false;
        localStorage.setItem('rocketsData', JSON.stringify(state.rockets));
      }
    },
    initializeReservedRockets: (state) => {
      const storedData = localStorage.getItem('rocketsData');
      if (storedData) {
        const rocketsData = JSON.parse(storedData);
        state.rockets = rocketsData;
      }
      state.isLoading = false;
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

export const { reserveRocket, cancelReserveRocket, initializeReservedRockets } = rocketsSlice.actions;

export default rocketsSlice.reducer;
