import { ReactElement } from 'react';
import './IconBtn.scss';

interface IProps {
  onClick: () => void;
  children: ReactElement | string;
}

const IconBtn = ({ onClick, children }: IProps) => (
  <button type="button" className="iconBtn" onClick={onClick}>
    {children}
  </button>
);

export default IconBtn;
