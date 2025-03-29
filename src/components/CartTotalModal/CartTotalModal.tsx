import { useNavigate } from 'react-router-dom';
import Modal from '../../UI/Modal/Modal';
import './CartTotalModal.scss';

const CartTotalModal = () => {
  const navigate = useNavigate();

  const onClose = () => {
    navigate('/cart');
  };
  return (
    <Modal onClose={onClose}>
      <div className="cartTotalModal">
        <h2 className="cartTotalModal_title">Totals:</h2>
        <p className="cartTotalModal_description">
          Oops! You've stumbled upon a not-so-real online store. This is
          actually just a project for my portfolio, but I truly appreciate you
          taking the time to check it out! Feel free to look around—your visit
          means a lot to me. 😊
        </p>
      </div>
    </Modal>
  );
};

export default CartTotalModal;
