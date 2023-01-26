import './AddToCartBtn.scss';

interface IProps {
    className?: String; 
    
}

const AddToCartBtn = ({ className='' }: IProps) => (
    <button type="button" className={`addToCartBtn ${className}`}>Add to cart</button>
)

export default AddToCartBtn;