import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { valuesApi } from '../../api/valuesApi';
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

export const asyncUpdateValuesThunk = createAsyncThunk(
  'values/asyncUpdateValues',
  async (body: any) => {
    try {
      const response = await valuesApi.update(body);
      console.log(response);
    } catch (error) {}
  }
);
