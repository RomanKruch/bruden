import './BurgerBtn.scss';
import { useState } from 'react';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

const BurgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`burgerBtn ${isOpen ? 'burgerBtn-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
      </button>

      <BurgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default BurgerBtn;
