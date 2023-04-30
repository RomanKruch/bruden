import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../redux/store';

const PublicRoute = () => {
  const isLogged = useSelector((state: IState) => state.user.isLogged);
  return !isLogged ? <Outlet /> : <Navigate to="/bruden" />;
};

export default PublicRoute;
