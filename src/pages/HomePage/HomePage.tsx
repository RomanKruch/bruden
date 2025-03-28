import Hero from "../../modules/Hero/Hero";
import ShopByCategory from "../../modules/ShopByCategory/ShopByCategory";
import VideoSection from "../../modules/VideoSection/VideoSection";
import DealOfWeek from "../../modules/DealOfWeek/DealOfWeek";
import Baner from "../../modules/Baner/Baner";
import LastNews from "../../modules/LastNews/LastNews";
import FitsAnyStyle from "../../modules/FitsAnyStyle/FitsAnyStyle";
import SpecialProducts from "../../modules/SpecialProducts/SpecialProducts";
import { Outlet } from "react-router-dom";

const HomePage = () => (
    <main>
        <Hero />
        <ShopByCategory />
        <VideoSection />
        <DealOfWeek />
        <Baner /> 
        {/* <LastNews /> */}
        <FitsAnyStyle />
        <SpecialProducts />

        <Outlet/>
    </main>
)

export default HomePage;