import videoImgRef from '../../assets/images/videoSection/videoSection.png' 
import ShopNowBtn from '../../UI/ShopNowBtn/ShopNowBtn';
import './VideoSection.scss'

const VideoSection = () => (
    <section className='videoSection'>
        <div className="container">
            <img src={videoImgRef} alt="video" width='1160' height='700'/>
            <h2 className="videoSection_title">
                An addition to all your fits
            </h2>

            <ShopNowBtn type='white' className='videoSection_btn'/>
        </div>
    </section>
);

export default VideoSection;