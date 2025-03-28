import { useAppSelector } from '../../redux/hooks';
import { createPortal } from 'react-dom';
import Notification from '../../components/Notification/Notification';
import './NotificationContainer.scss'

const notificationRoot = document.getElementById('notification_root') as HTMLElement;

export const NotificationContainer = () => {
  const notifications = useAppSelector(state => state.notifications.notifications);

  return createPortal(
    <div className='notifications_container'>
      {notifications.map(n => (
        <Notification key={n.id} item={n} />
      ))}
    </div>,
    notificationRoot,
  );
};
