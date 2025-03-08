import './Modal.scss';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('modal_root') as HTMLElement;

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

const Modal = ({ setIsOpen, children }: IProps) => {
  const onClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return createPortal(
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal">
        <button
          type="button"
          className="modal_close_btn"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
