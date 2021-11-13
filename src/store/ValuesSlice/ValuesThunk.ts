import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { valuesApi } from '../../api/valuesApi';
//ts
import { setStep } from './ValuesSlice';

import { values } from '../../ts/values';
import { addNotification, removeNotification } from '../notifier/notifierSlice';

export const asyncGetValuesThunk = createAsyncThunk(
  'values/asyncGetValues',
  async () => {
    try {
      const response: AxiosResponse<values> = await valuesApi.get();
      return response.data;
    } catch (error) {}
  }
);

export const asyncUpdateValuesThunk = createAsyncThunk(
  'values/asyncUpdateValues',
  async (body: any, { dispatch }) => {
    try {
      const response = await valuesApi.update(body);
      if (response.status === 200) {
        await dispatch(
          addNotification({
            message: 'data was updated',
            variant: 'success',
          })
        );
      }
      await dispatch(removeNotification([]));
      return 'success';
    } catch (error) {}
  }
);
