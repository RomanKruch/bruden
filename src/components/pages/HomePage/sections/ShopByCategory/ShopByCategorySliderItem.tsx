import { ITag } from "../../../../../Types";
import { Link } from "react-router-dom";

interface IProps {
    tag: ITag
}

const ShopByCategorySliderItem = ({ tag }: IProps) => (
    <Link to='/shop'>
        <img src={tag.img} alt={tag.name} width='360' height='290'/>
        <h3 className="shopByCat_item_title">{tag.name}</h3>
    </Link>
)

export default ShopByCategorySliderItem;