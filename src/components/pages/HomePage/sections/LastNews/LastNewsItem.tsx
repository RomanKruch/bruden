interface IProps {
    imgRef: string;
    data: string;
    title: string;
    description: string;
}

const LastNewsItem = ({ imgRef, data, title, description }: IProps) => (
    <>
        <p className="lastNews_item_data">{data}</p>
        <img src={imgRef} alt="img" className='lastNews_item_img'/>
        <h3 className="lastNews_item_title">{title}</h3>
        <p className="lastNews_item_description">{description}</p>
        <a href="/" className="lastNews_item_link">Read more</a>
    </>
);

export default LastNewsItem;