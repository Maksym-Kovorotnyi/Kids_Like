import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';

export const getGifts = createAsyncThunk(
  'award/getGifts',
  async (__, thunkAPI) => {
    try {
      const response = axios.get(`/gift`);
    } catch (error) {
      console.log(error.message);
    }
  }
);
