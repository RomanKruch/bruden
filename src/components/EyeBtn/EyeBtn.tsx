import Eye from '../../assets/icons/dealOfWeek/Deal-of-the-week-eye.svg?react';
import IconBtn from '../../UI/IconBtn/IconBtn';
import { useLocation, useNavigate } from 'react-router-dom';

interface IProps {
  id: string;
}

const EyeBtn = ({ id }: IProps) => {
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const path = routeLocation.pathname;

  const onOpenModal = () => {
    const fixPath = path === '/' ? path : path + '/';

    navigate(fixPath + id, { state: { from: path } });
  };
  return (
    <IconBtn onClick={onOpenModal}>
      <Eye />
    </IconBtn>
  );
};

export default EyeBtn;
