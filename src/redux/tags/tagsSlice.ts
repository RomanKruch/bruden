import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { onGetTags } from './tagsOperations';
import { ITag } from '../../types/Types';

const initialState: ITag[] = [];

const toggleTag = (tag: ITag, payload: string) =>
  tag._id === payload ? { ...tag, active: !tag.active } : tag;

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    onToggleTag: (state, { payload }: PayloadAction<string>) =>
      state.map(tag => toggleTag(tag, payload)),
  },
  extraReducers: builder => {
    builder.addCase(onGetTags.fulfilled, (_, { payload }) => payload);
  },
});

export const { onToggleTag } = tagsSlice.actions;
export default tagsSlice.reducer;
