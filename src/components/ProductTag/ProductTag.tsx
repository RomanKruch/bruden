import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { ITag } from "../../types/Types";
import { useAppDispatch } from "../../redux/hooks";
import { onToggleTag } from "../../redux/tags/tagsSlice";
import './ProductTag.scss';

interface IProps {
    tags: ITag[];
}

const ProductTag = ({ tags }: IProps) => {
    const dispatch = useAppDispatch();
    const onClick = (idToToggle: string) => {
        dispatch(onToggleTag(idToToggle))
    }

    return (
    <div className="productTag">
        <SectionTitle text="Product tags" className="productTag_title"/>

        <ul className="productTag_list">
            {tags.map(({ name, _id, active }) => (
                <li className="productTag_item" key={_id}>
                    <button className={`productTag_btn ${active && 'productTag_btn-active'}`} onClick={() => onClick(_id)}>{name}</button>
                </li>
            ))}
        </ul>
    </div>
)};

export default ProductTag;