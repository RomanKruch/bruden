import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';

interface ITag {
  name: string;
  img: string;
  imgId: string;
  _id: string;
}

const AddTagForm = () => {
  const [tag, setTag] = useState<ITag>();

  const formik = useFormik({
    initialValues: {
      name: '',
      img: '',
    },
    onSubmit: values => {
      let data = new FormData();

      data.append('img', values.img);
      data.append('name', values.name);

      axios
        .post('/admin/tag', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => setTag(res.data.data.tag));
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
          Create
        </button>
      </form>
      {tag && (
        <div className="shopByCat_slider_item">
          <img src={tag.img} alt={tag.name} width="360" height="290" />
          <h3 className="shopByCat_item_title">{tag.name}</h3>
        </div>
      )}
    </>
  );
};

export default AddTagForm;
