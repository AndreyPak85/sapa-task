import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ValuesSlice from './ValuesSlice/ValuesSlice';
import notifierSlice from './notifier/notifierSlice';

const rootReducer = combineReducers({
  values: ValuesSlice,
  notifier: notifierSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
