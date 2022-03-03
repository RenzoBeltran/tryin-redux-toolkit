// Duck pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    // it's okay to do this because immer makes it immutable
    // under the hood
    incremented(state) {
      state.value++;
    },
    // Amount added
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    }
    // reset
  }
})

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;