import { buyGifts, getGifts } from './AwardOperations';

const { createSlice } = require('@reduxjs/toolkit');

const awardInitialState = {
  gifts: [],
  giftIds: [],
};

const awardSlice = createSlice({
  name: 'award',
  initialState: awardInitialState,
  reducers: {
    addGiftId(state, { payload }) {
      state.giftIds.push(payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getGifts.fulfilled, (state, { payload }) => {
        state.gifts = payload;
      })
      .addCase(buyGifts.fulfilled, (state, { payload }) => {
        console.log(payload);
      });
  },
});

export const awardReducer = awardSlice.reducer;
export const { addGiftId } = awardSlice.actions;
