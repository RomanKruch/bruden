import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ITag } from '../../types/Types';
import { onAxiosError } from '../../helpers/onAxiosError';

export const onGetTags = createAsyncThunk<ITag[], void, { rejectValue: null }>(
  'tags',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get('/tags');
      return data.map((tag: ITag) => ({ ...tag, active: false }));
    } catch (err: any) {
      onAxiosError(err, dispatch)
      return rejectWithValue(null);
    }
  },
);
