import { toggleTaskStatus } from './TaskOperations';

const { createSlice } = require('@reduxjs/toolkit');

const taskInitialState = {
  tasks: [],
  balance: null,
  rewardsGained: 0,
  rewardsPlanned: 0,
  isLoading: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState: taskInitialState,
  extraReducers: builder => {
    builder
      .addCase(toggleTaskStatus.fulfilled, (state, action) => {
        state.balance = action.payload.updatedBalance;
        state.rewardsGained = action.payload.updatedWeekGainedRewards;
        state.tasks = action.payload.data;
        state.isLoading = false;
      })
      .addCase(toggleTaskStatus.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const taskReducer = taskSlice.reducer;
