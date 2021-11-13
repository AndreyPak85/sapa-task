import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ValuesSlice from './ValuesSlice/ValuesSlice';

const rootReducer = combineReducers({
  values: ValuesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
