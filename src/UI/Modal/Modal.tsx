import { JSX, useCallback, useEffect, useRef, useState } from 'react';
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const onClickOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  const onClick = useCallback(() => {
    setIsClosing(true);
    timeoutRef.current = setTimeout(onClose, 300);
  }, [isClosing]);

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
