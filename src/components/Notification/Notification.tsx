import { useCallback, useEffect, useRef, useState } from 'react';
import {
  INotification,
  removeNotification,
} from '../../redux/notifications/notificationsSlice';
import { useAppDispatch } from '../../redux/hooks';
import './Notification.scss';

interface IProps {
  item: INotification;
}

const Notification = ({ item }: IProps) => {
  const { id, message, type } = item;
  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useAppDispatch();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => onClose(id), 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [id]);

  const onClose = useCallback(
    (id: string) => {
      if (isClosing) return;

      setIsClosing(true);
      timeoutRef.current = setTimeout(() => {
        dispatch(removeNotification(id));
        setIsClosing(false);
      }, 300);
    },
    [dispatch, isClosing],
  );

  return (
    <div
      className={`notification ${
        isClosing ? 'notification-closing' : ''
      } notification_${type} `}
      onClick={() => onClose(id)}
    >
      {message}
    </div>
  );
};

export default Notification;
