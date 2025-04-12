import ShopNowBtn from '../../UI/ShopNowBtn/ShopNowBtn';
import './VideoSection.scss';

const VideoSection = () => (
  <section className="videoSection">
    <div className="container">
      <video
        width="100%"
        height="auto"
        autoPlay
        playsInline
        webkit-playsinline="true"
        muted
        loop
        controls={false}
      >
        <source
          src="https://res.cloudinary.com/drn4sj8ju/video/upload/v1744389951/Bruden/video_wevc5f.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h2 className="videoSection_title">An addition to all your fits</h2>

      <ShopNowBtn type="white" className="videoSection_btn" />
    </div>
  </section>
);

export default VideoSection;
