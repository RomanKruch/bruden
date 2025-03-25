import { Outlet } from "react-router-dom";
import Shop from "../../modules/Shop/Shop";
import SpecialProducts from "../../modules/SpecialProducts/SpecialProducts";

const ShopPage = () => (
    <main>
        <Shop/>
        <SpecialProducts/>
        <Outlet/>
    </main>
)

export default ShopPage;