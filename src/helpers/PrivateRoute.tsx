import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../redux/store';

const PrivateRoute = () => {
  const isLogged = useSelector((state: IState) => state.user.isLogged);
  return isLogged ? <Outlet /> : <Navigate to="/bruden/auth" />;
};

export default PrivateRoute;
