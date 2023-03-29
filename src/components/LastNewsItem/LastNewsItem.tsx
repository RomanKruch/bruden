import './LastNewsItem.scss';

interface IProps {
    imgRef: string;
    data: string;
    title: string;
    description: string;
}

const LastNewsItem = ({ imgRef, data, title, description }: IProps) => (
    <>
        <p className="lastNewsItem_data">{data}</p>
        <img src={imgRef} alt="img" className='lastNewsItem_img'/>
        <h3 className="lastNewsItem_title">{title}</h3>
        <p className="lastNewsItem_description">{description}</p>
        <a href="/" className="lastNewsItem_link">Read more</a>
    </>
);

export default LastNewsItem;