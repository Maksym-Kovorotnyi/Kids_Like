import { getGifts } from './AwardOperations';

const { createSlice } = require('@reduxjs/toolkit');

const awardInitialState = {
  gifts: [],
  giftIds: [],
};

const awardSlice = createSlice({
  name: 'award',
  initialState: awardInitialState,
  extraReducers: builder => {
    builder.addCase(getGifts.fulfilled, (state, action) => {
      state.gifts = action.payload;
    });
  },
});

export const awardReducer = awardSlice.reducer;
