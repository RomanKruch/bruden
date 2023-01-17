import Hero from "../../Home/Hero/Hero";
import ShopByCategory from "../../Home/ShopByCategory/ShopByCategory";
import VideoSection from "../../Home/VideoSection/VideoSection";
import DealOfWeek from "../../Home/DealOfWeek/DealOfWeek";
import Slider from "../../swiper/swiper";

const HomePage = () => (
    <main>
        <Slider />
        {/* <Hero /> */}
        <ShopByCategory />
        <VideoSection />
        <DealOfWeek />
    </main>
)

export default HomePage;