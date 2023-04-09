import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/Auth/AuthOperations';

axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';

export const getGifts = createAsyncThunk(
  'award/getGifts',
  async (__, thunkAPI) => {
    try {
      const value = thunkAPI.getState().auth.token;
      token.set(value);
      const response = await axios.get(`/gift`);
      return response.data.ruGifts;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const patchGifts = createAsyncThunk(
  'award/buyGifts',
  async ({ giftIds }, thunkAPI) => {
    try {
      const value = thunkAPI.getState().auth.token;
      token.set(value);
      const response = await axios.patch(`/gift`, { giftIds });
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }
);
