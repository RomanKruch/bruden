import { createPortal } from 'react-dom';
import { useState } from 'react';
import './Modal.scss';
import products from '../../products';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import { IProduct } from '../pages/ShopPage/sections/Shop/types';

const modalRoot = document.getElementById('modal_root') as HTMLElement;

interface IProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    product: IProduct;
}

const Modal = ({ setIsOpen, product }: IProps) => {
    const { title, description, price, img, tag, id }= product; 
    const [value, setValue] = useState('1')

    const onClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    }

    return createPortal((
        <div className="modal_overlay" onClick={onClose}>
            <div className="modal">
                <button type='button' className='modal_close_btn' onClick={() => setIsOpen(false)}>X</button>
                <img src={img} width='430' height='560' alt="" />
                <div className="modal_wrap">
                    <h2 className="modal_title">{title}</h2>
                    <p className="modal_price">C$ {price}</p>
                    <p className="modal_description">{description}</p>
                    <p className="modal_stock">97 in stock</p>
                    <form className="modal_qty">
                        <label className="modal_qty_label" htmlFor={id}>Qty:</label>
                        <input 
                            type="number" 
                            id={id} 
                            className='modal_qty_inp' 
                            required 
                            maxLength={2}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        <AddToCartBtn product={product} qty={+value}/>
                    </form>
                    <div className="modal_info">
                        <p className="modal_info_item">SKU:<span>NHL5-11</span></p>
                        <p className="modal_info_item">Categories:<span>{tag}</span></p>
                        <p className="modal_info_item">Tags:<span>{tag}</span></p>
                    </div>
                </div>
            </div>
        </div>
    ), modalRoot)
};

export default Modal;