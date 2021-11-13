import { asyncGetValuesThunk } from './ValuesThunk';
import { createSlice } from '@reduxjs/toolkit';

interface IValuesSlice {
  isLoading: boolean;
  inputA: number | undefined;
  inputB: number | undefined;
  inputC: number | undefined;
  inputD: number | undefined;
  sumAB: number | undefined;
  sumABC: number | undefined;
}

const ValuesSliceState: IValuesSlice = {
  isLoading: false,
  inputA: 0,
  inputB: 0,
  inputC: 0,
  inputD: 0,
  sumAB: 0,
  sumABC: 0,
};

const ValuesSlice = createSlice({
  name: 'values',
  initialState: ValuesSliceState,
  reducers: {
    setInputA(state, action) {
      state.inputA = action.payload;
    },
    setInputB(state, action) {
      state.inputB = action.payload;
    },
    setInputC(state, action) {
      state.inputC = action.payload;
    },
    getSumAB(state, action) {
      state.sumAB = action.payload.inputA + action.payload.inputB;
    },
    getSumABC(state, action) {
      state.sumABC =
        action.payload.inputA + action.payload.inputB + action.payload.inputC;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetValuesThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(asyncGetValuesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.inputA = action.payload?.inputA;
      state.inputB = action.payload?.inputB;
      state.inputC = action.payload?.inputC;
      state.inputD = action.payload?.inputD;
      //   state.sumAB = action.payload!.inputA + action.payload!.inputB;
      //   state.sumABC =
      //     action.payload!.inputA +
      //     action.payload!.inputB +
      //     action.payload!.inputC;
    });
    builder.addCase(asyncGetValuesThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default ValuesSlice.reducer;
export const { getSumAB, getSumABC, setInputA, setInputB, setInputC } =
  ValuesSlice.actions;
