import {
  fetchCurrentUser,
  logInUser,
  logOutUser,
  registerUser,
} from './AuthOperations';

const { createSlice } = require('@reduxjs/toolkit');

const authInitialState = {
  user: {},
  week: {},
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.week = action.payload.week;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.week = action.payload.week;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.week = action.payload.week;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
