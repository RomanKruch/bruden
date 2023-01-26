import { useState } from "react";
import SectionTitle from "../../../../SectionTitle/SectionTitle";
import { ITag } from "../Shop/types";
import './ProductTag.scss';

interface IProps {
    tags: ITag[];
    setTags: React.Dispatch<React.SetStateAction<ITag[]>>
}

const ProductTag = ({ tags, setTags}: IProps) => {
    const onTagToggle = (idToToggle: string) => {
        setTags(tags.map(tag => tag.id === idToToggle ? {...tag, active: !tag.active} : tag));
    }

    return (
    <div className="productTag">
        <SectionTitle text="Product tags" className="productTag_title"/>

        <ul className="productTag_list">
            {tags.map(({ tag, id, active }) => (
                <li className="productTag_item" key={id}>
                    <button className={`productTag_btn ${active && 'productTag_btn-active'}`} onClick={() => onTagToggle(id)}>{tag}</button>
                </li>
            ))}
        </ul>
    </div>
)};

export default ProductTag;