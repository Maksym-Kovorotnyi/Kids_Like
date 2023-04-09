import { buyGifts, getGifts } from './AwardOperations';

const { createSlice } = require('@reduxjs/toolkit');

const awardInitialState = {
  gifts: [],
  giftIds: [],
};

const awardSlice = createSlice({
  name: 'award',
  initialState: awardInitialState,
  redusers: {
    addGiftId(state, { payload }) {
      console.log(payload);
      console.log(state);
    },
    addToBooks(state, { payload }) {
      state.books.push(payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getGifts.fulfilled, (state, action) => {
      state.gifts = action.payload;
    });
    // .addCase(buyGifts.fulfilled, (state, { payload }) => {
    //   state.giftIds = payload.giftIds;
    // });
  },
});

export const awardReducer = awardSlice.reducer;
export const { addGiftId } = awardSlice.actions;
