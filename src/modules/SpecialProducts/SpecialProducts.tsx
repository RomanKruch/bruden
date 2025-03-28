import { useState } from 'react';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import './SpecialProducts.scss';
import axios from 'axios';
import { useAppDispatch } from '../../redux/hooks';
import { addNotification } from '../../redux/notifications/notificationsSlice';

const SpecialProducts = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post('subscribe', { email });
      dispatch(addNotification({ message: data.message, type: 'success' }));
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="specialProducts">
      <div className="container">
        <SectionTitle text="Special Products" />
        <p className="specialProducts_subtitle">
          Register now to get updates on promotions
        </p>
        <form className="specialProducts_form" onSubmit={onSubmit}>
          <input
            type="text"
            className="specialProducts_inp"
            value={email}
            onChange={onChange}
          />
          <button
            type="submit"
            className="specialProducts_btn"
            disabled={loading}
          >
            subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SpecialProducts;
