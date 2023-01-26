import Hero from "./sections/Hero/Hero";
import ShopByCategory from "./sections/ShopByCategory/ShopByCategory";
import VideoSection from "./sections/VideoSection/VideoSection";
import DealOfWeek from "./sections/DealOfWeek/DealOfWeek";
import Baner from "./sections/Baner/Baner";
import LastNews from "./sections/LastNews/LastNews";
import FitsAnyStyle from "./sections/FitsAnyStyle/FitsAnyStyle";
import SpecialProducts from "./sections/SpecialProducts/SpecialProducts";

const HomePage = () => (
    <main>
        <Hero />
        <ShopByCategory />
        <VideoSection />
        <DealOfWeek />
        <Baner /> 
        <LastNews />
        <FitsAnyStyle />
        <SpecialProducts />
    </main>
)

export default HomePage;