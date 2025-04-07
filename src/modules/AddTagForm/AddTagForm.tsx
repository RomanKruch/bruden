import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import { onAxiosError } from '../../helpers/onAxiosError';
import { useAppDispatch } from '../../redux/hooks';
import Loader from '../../UI/Loader/Loader';
import './AddTagForm.scss';

interface ITag {
  name: string;
  img: string;
  imgId: string;
  _id: string;
}

const AddTagForm = () => {
  const [tag, setTag] = useState<ITag>();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      img: '',
    },
    onSubmit: (values, helpers) => {
      const data = new FormData();

      data.append('img', values.img);
      data.append('name', values.name);

      setLoading(true);
      axios
        .post('/tags', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(({ data }) => {
          setTag(data);
          helpers.resetForm();
        })
        .catch(err => onAxiosError(err, dispatch))
        .finally(() => setLoading(false));
    },
  });

  return (
    <>
      <SectionTitle text="Tag" />

      <form onSubmit={formik.handleSubmit} className="adminPage_form">
        <label className="adminPage_label">
          Name:
          <input
            className="adminPage_inp"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </label>
        <label className="adminPage_label">
          Img:
          <input
            type="file"
            name="img"
            onChange={event => {
              const file = event.currentTarget.files
                ? event.currentTarget.files[0]
                : null;
              if (file) {
                formik.setFieldValue('img', file);
              }
            }}
          />
        </label>

        <button type="submit" className="adminPage_btn">
          {loading ? <Loader /> : 'Create'}
        </button>
      </form>
      {tag && (
        <div className="tagForm_item">
          <img src={tag.img} alt={tag.name} width="360px" height="290px" />
          <h3 className="tagForm_item_title">{tag.name}</h3>
        </div>
      )}
    </>
  );
};

export default AddTagForm;
