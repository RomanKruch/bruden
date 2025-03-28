import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ITag } from '../../types/Types';
import { addNotification } from '../notifications/notificationsSlice';

export const onGetTags = createAsyncThunk<ITag[], void, { rejectValue: null }>(
  'tags',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get('/tags');
      return data.map((tag: ITag) => ({ ...tag, active: false }));
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
      return rejectWithValue(null);
    }
  },
);
