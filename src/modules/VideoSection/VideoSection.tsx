import ShopNowBtn from '../../UI/ShopNowBtn/ShopNowBtn';
import './VideoSection.scss';
import video from '../../assets/video.mp4';

const VideoSection = () => (
  <section className="videoSection">
    <div className="container">
      <video width="100%" height="auto" loop muted autoPlay>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="videoSection_title">An addition to all your fits</h2>

      <ShopNowBtn type="white" className="videoSection_btn" />
    </div>
  </section>
);

export default VideoSection;
