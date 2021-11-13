import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { valuesApi } from '../../api/getValuesApi';
//ts
import { values } from '../../ts/values';

export const asyncGetValuesThunk = createAsyncThunk(
  'values/asyncGetValues',
  async () => {
    try {
      const response: AxiosResponse<values> = await valuesApi.get();
      return response.data;
    } catch (error) {}
  }
);
