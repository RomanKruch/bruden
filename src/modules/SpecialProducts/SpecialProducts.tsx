import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import './SpecialProducts.scss';

const SpecialProducts = () => (
    <section className='specialProducts'>
        <div className="container">
            <SectionTitle text='Special Products'/>
            <p className="specialProducts_subtitle">Register now to get updates on promotions </p>
            <form action="#" className="specialProducts_form">
                <input type="text" className='specialProducts_inp'/>
                <button type='button' className='specialProducts_btn'>subscribe</button>
            </form>
        </div>
    </section>
);

export default SpecialProducts;