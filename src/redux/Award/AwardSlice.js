const { createSlice } = require('@reduxjs/toolkit');

const awardInitialState = {
  ruGifts: [
    {
      title: 'Sweets',
      price: 40,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(8).png',
      isSelected: false,
      id: 1,
    },
    {
      title: 'Go to the movie',
      price: 90,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(9).png',
      isSelected: false,
      id: 2,
    },
    {
      title: 'Gift',
      price: 100,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(10).png',
      isSelected: false,
      id: 3,
    },
    {
      title: 'Pizza evening',
      price: 90,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(11).png',
      isSelected: false,
      id: 4,
    },
    {
      title: 'Party with friends',
      price: 120,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(12).png',
      isSelected: false,
      id: 5,
    },
    {
      title: 'Go to the Mac',
      price: 80,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(13).png',
      isSelected: false,
      id: 6,
    },
    {
      title: 'Wish',
      price: 200,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(14).png',
      isSelected: false,
      id: 7,
    },
    {
      title: 'Go to the katok',
      price: 100,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(15).png',
      isSelected: false,
      id: 8,
    },
  ],
};

const awardSlice = createSlice({
  name: 'award',
  initialState: awardInitialState,
  extraReducers: builder => {
    //   builder
  },
});

export const awardReducer = awardSlice.reducer;
