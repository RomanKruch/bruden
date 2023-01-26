import { ReactComponent as Eye } from "../../icons/dealOfWeek/Deal-of-the-week-eye.svg";
import { useState } from "react";
import { IProduct } from "../pages/ShopPage/sections/Shop/types";
import IconBtn from "../IconBtn/IconBtn";
import Modal from "../Modal/Modal";

interface IProps {
    product: IProduct;
}

const EyeBtn = ({ product }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <IconBtn onClick={() => setIsOpen(true)}><Eye /></IconBtn>
            
            {isOpen && <Modal product={product} setIsOpen={setIsOpen}/>}
        </>
    )
}

export default EyeBtn;