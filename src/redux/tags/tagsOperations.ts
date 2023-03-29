import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import NotificationManager from "react-notifications/lib/NotificationManager";
import { ITag } from "../../types/Types";
  

export const onGetTags = createAsyncThunk<ITag[], void, {rejectValue: null}>('tags',
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await axios.get('/tag');
            return data.data.tags.map((tag: ITag) => ({...tag, active: false}));
        } catch {
            // NotificationManager.warning('User error :(', '', 5000);
            return rejectWithValue(null);
        }
    }
)
