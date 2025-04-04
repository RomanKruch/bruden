import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { addNotification } from '../redux/notifications/notificationsSlice';
import { AppDispatch } from '../redux/store';
import { AxiosError } from 'axios';

export interface ErrorResponse {
  message?: string | string[];
}

export const onAxiosError = (
  err: AxiosError<ErrorResponse>,
  dispatch: AppDispatch | ThunkDispatch<unknown, unknown, UnknownAction>,
): void => {
  const message = err.response?.data.message;

  if (Array.isArray(message)) {
    message.forEach((item: string) =>
      dispatch(addNotification({ message: item, type: 'error' })),
    );
  } else if (typeof message === 'string') {
    dispatch(addNotification({ message, type: 'error' }));
  } else {
    dispatch(
      addNotification({ message: 'Something went wrong', type: 'error' }),
    );
  }
};
