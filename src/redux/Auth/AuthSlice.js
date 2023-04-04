const { createSlice } = require('@reduxjs/toolkit');

const authInitialState = {
  email: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    //   builder
  },
});

export const authReducer = authSlice.reducer;
