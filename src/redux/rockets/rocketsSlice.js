import { createSlice } from '@reduxjs/toolkit';
import img from '../../assets/space-x1.jpg';

const imgSpace = img;

const initialState = {
  rockets: [
    {
      id: 1,
      img: imgSpace,
      title: 'Falcon 1',
      text: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    },
    {
      id: 2,
      img: imgSpace,
      title: 'Falcon 2',
      text: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    },
  ],
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
