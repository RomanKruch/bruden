interface IProps {
    imgRef: string;
    text: string;
}

const ShopByCategorySliderItem = ({ imgRef, text }: IProps) => (
    <>
        <img src={imgRef} alt={text} width='360' height='290'/>
        <h3 className="shopByCat_item_title">{text}</h3>
    </>
)

export default ShopByCategorySliderItem;