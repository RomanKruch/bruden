import { JSX, useState } from 'react';
import './Modal.scss';
import { createPortal } from 'react-dom';
import Loader from '../Loader/Loader';
const modalRoot = document.getElementById('modal_root') as HTMLElement;

interface IProps {
  onClose: () => void;
  children?: JSX.Element | null;
  loading?: boolean;
}

const Modal = ({ onClose, children, loading = false }: IProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const onClickOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  const onClick = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return createPortal(
    <div
      className={`modal_overlay ${isClosing ? 'modal_overlay-closing' : ''}`}
      onMouseDown={onClickOver}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className={`modal ${isClosing ? 'modal-closing' : ''}`}>
          <button type="button" className="modal_close_btn" onClick={onClick}>
            X
          </button>
          {children}
        </div>
      )}
    </div>,
    modalRoot,
  );
};

export default Modal;
