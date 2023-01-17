import SectionTitle from "../../../../SectionTitle/SectionTitle";

const DealOfWeek = () => (
    <section className="dealOfWeek">
        <div className="container">
            <SectionTitle text="Deal of the week"/>

            <ul className="dealOfWeek_list">
                <li className="dealOfWeek_item">
                    <h3 className="dealOfWeek_item_title"></h3>
                    <div className="dealOfWeek_item_rating"></div>
                    <p className="dealOfWeek_item_price"></p>
                    <p className="dealOfWeek_item_description"></p>
                    <div className="dealOfWeek_item_btn_wrap">
                        <button></button>
                        <input type="checkbox" />
                        <button></button>
                    </div>
                </li>

                <li className="dealOfWeek_item">
                    <h3 className="dealOfWeek_item_title"></h3>
                    <div className="dealOfWeek_ritem_ating"></div>
                    <p className="dealOfWeek_price"></p>
                    <p className="dealOfWeek_description"></p>
                </li>
            </ul>
        </div>
    </section>
);

export default DealOfWeek;