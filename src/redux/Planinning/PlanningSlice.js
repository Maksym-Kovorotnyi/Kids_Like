import { fetchCurrentUser } from '../Auth/AuthOperations';
import { refreshTaskDay } from './PlanningOperations';

const { createSlice } = require('@reduxjs/toolkit');

const planningInitialState = {
  taskInfo: null,
  days: [false, false, false, false, false, false, false],
};

const planningSlice = createSlice({
  name: 'planning',
  initialState: planningInitialState,
  reducers: {
    addWeekdayCheck(state, { payload }) {
      state.days.splice(...payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.taskInfo = action.payload.week;
      })
      .addCase(refreshTaskDay.fulfilled, (state, action) => {
        console.log(action);
      });
  },
});

export const planningReducer = planningSlice.reducer;
export const { addWeekdayCheck } = planningSlice.actions;
