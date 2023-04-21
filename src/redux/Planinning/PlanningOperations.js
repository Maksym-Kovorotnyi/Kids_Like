import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/Auth/AuthOperations';

export const refreshTaskDay = createAsyncThunk(
  'contacts/refreshTaskDay',
  async (id, thunkAPI) => {
    try {
      const value = thunkAPI.getState().auth.token;
      token.set(value);
      const body = thunkAPI.getState().planning.days;
      const response = await axios.patch(`/task/single-active/${id}`, body);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
