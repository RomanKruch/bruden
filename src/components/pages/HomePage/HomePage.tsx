import Hero from "./sections/Hero/Hero";
import ShopByCategory from "./sections/ShopByCategory/ShopByCategory";
import VideoSection from "./sections/VideoSection/VideoSection";
import DealOfWeek from "./sections/DealOfWeek/DealOfWeek";

const HomePage = () => (
    <main>
        <Hero />
        <ShopByCategory />
        <VideoSection />
        <DealOfWeek />
    </main>
)

export default HomePage;