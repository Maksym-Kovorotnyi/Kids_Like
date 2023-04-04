const { createSlice } = require('@reduxjs/toolkit');

const taskInitialState = {
  title: '',
  reward: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState: taskInitialState,
  extraReducers: builder => {
    //   builder
  },
});

export const taskReducer = taskSlice.reducer;
