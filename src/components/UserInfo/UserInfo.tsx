import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSelector, useDispatch } from 'react-redux';
import { onLogout } from '../../redux/user/userOperations';
import { IState } from '../../redux/store';
import './UserInfo.scss'

const UserInfo = () => {
    const dispatch = useDispatch();
    const {name, email} = useSelector((state: IState) => state.user.userInfo);

    return (
        <div className="userInfo">
            <div className="userInfo_wrap">
                <p className="userInfo_name">Welcome {name}</p>
                <p className="userInfo_email">{email}</p>
            </div>
            <button className="userInfo_btn" onClick={() => dispatch<any>(onLogout())}>Logout <ExitToAppIcon/></button>
        </div>
    )
};

export default UserInfo;