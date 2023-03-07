import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { onGetTags } from './tagsOperations';
import { ITag } from '../../../Types';

const initialState: ITag[] = [];

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    onToggleTag: (state,  {payload}: PayloadAction<string>) => state.map(tag => tag._id === payload ? {...tag, active: !tag.active} : tag)
  },
  extraReducers: builder => {
    builder
      .addCase(onGetTags.fulfilled, (_, {payload}) => payload)
    }
});

export const { onToggleTag } = tagsSlice.actions
export default tagsSlice.reducer;
