import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: true,
  error: '',
};
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets: (state, action) => {
      state.rockets = action.payload;
    },
    toggleReservation: (state, action) => {
      const { rocketId, isReserved } = action.payload;
      const rocket = state.rockets.find((r) => r.id === rocketId);
      if (rocket) {
        rocket.reserved = isReserved;
      }
    },
  },
});

export const { setRockets, toggleReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
