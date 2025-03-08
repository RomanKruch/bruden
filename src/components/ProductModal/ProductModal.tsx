import { useState } from 'react';
import AddToCartBtn from '../../UI/AddToCartBtn/AddToCartBtn';
import { IProduct } from '../../types/Types';
import Modal from '../../UI/Modal/Modal';
import './ProductModal.scss'

interface IProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    product: IProduct;
}

const ProductModal = ({ product, setIsOpen }: IProps) => {
    const { title, description, price, img, tag, _id: id, totalQty } = product; 
    const [value, setValue] = useState(1);
    const [showInfo, setShowInfo] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.target.value;

        if(totalQty < value) {
           return  setValue(totalQty)
        }
        return  setValue(value);
    }

    return (
        <Modal setIsOpen={setIsOpen}>
            <div className='productModal'>
                <img src={img.large.ref} width='430' height='560' alt="" />
                <button type='button' className='productModal_moreBtn' onClick={() => setShowInfo(value => !value)}>!</button>
                <div className={`productModal_wrap ${showInfo ? 'productModal_wrap-show' : ''}`}>
                    <h2 className="productModal_title">{title}</h2>
                    <p className="productModal_price">C$ {price}</p>
                    <p className="productModal_description">{description}</p>
                    <p className="productModal_stock">{totalQty} in stock</p>
                    <form className="productModal_qty">
                        <label className="productModal_qty_label" htmlFor={id}>Qty:</label>
                        <input 
                            type="number" 
                            id={id} 
                            className='productModal_qty_inp' 
                            required 
                            maxLength={2}
                            value={value+''}
                            onChange={onChange}
                        />
                        <AddToCartBtn product={product} qty={+value}/>
                    </form>
                    <div className="productModal_info">
                        <p className="productModal_info_item">SKU:<span>NHL5-11</span></p>
                        <p className="productModal_info_item">Categories:<span>{tag.name}</span></p>
                        <p className="productModal_info_item">Tags:<span>{tag.name}</span></p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ProductModal;