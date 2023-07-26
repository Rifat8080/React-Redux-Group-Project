/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
