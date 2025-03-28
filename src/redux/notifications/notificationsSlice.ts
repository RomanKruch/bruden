import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface INotification {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

interface NotificationsState {
  notifications: INotification[];
}

const initialState: NotificationsState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<{ message: string; type?: "success" | "error" | "info" }>) => {
      const { message, type = "info" } = action.payload;
      state.notifications.push({ id: nanoid(), message, type });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((n) => n.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
