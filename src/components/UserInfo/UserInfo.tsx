import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onLogout } from '../../redux/user/userOperations';
import './UserInfo.scss';

const UserInfo = () => {
  const dispatch = useAppDispatch();
  const { name, email } = useAppSelector(state => state.user.userInfo);

  const onClick = () => {
    dispatch(onLogout());
  };

  return (
    <div className="userInfo">
      <div className="userInfo_wrap">
        <p className="userInfo_name">Welcome {name}</p>
        <p className="userInfo_email">{email}</p>
      </div>
      <button className="userInfo_btn" onClick={onClick}>
        Logout <ExitToAppIcon />
      </button>
    </div>
  );
};

export default UserInfo;
