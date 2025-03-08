import './IconBtn.scss';

interface IProps {
  onClick: () => void;
  children: JSX.Element;
}

const IconBtn = ({ onClick, children }: IProps) => (
  <button type="button" className="iconBtn" onClick={onClick}>
    {children}
  </button>
);

export default IconBtn;
