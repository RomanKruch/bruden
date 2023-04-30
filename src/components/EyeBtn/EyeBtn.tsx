import { ReactComponent as Eye } from "../../assets/icons/dealOfWeek/Deal-of-the-week-eye.svg";
import { useState } from "react";
import { IProduct } from "../../types/Types"
import IconBtn from "../../UI/IconBtn/IconBtn";
import ProductModal from "../ProductModal/ProductModal";

interface IProps {
    product: IProduct;
}

const EyeBtn = ({ product }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <IconBtn onClick={() => setIsOpen(true)}><Eye /></IconBtn>
            
            {isOpen && <ProductModal product={product} setIsOpen={setIsOpen}/>}
        </>
    )
}

export default EyeBtn;