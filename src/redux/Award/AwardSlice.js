const { createSlice } = require('@reduxjs/toolkit');

const awardInitialState = {
  giftIds: [],
};

const awardSlice = createSlice({
  name: 'award',
  initialState: awardInitialState,
  extraReducers: builder => {
    //   builder
  },
});

export const awardReducer = awardSlice.reducer;
