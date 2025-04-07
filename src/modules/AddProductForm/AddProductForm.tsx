import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import SelectListType from '../../UI/SelectListType/SelectListType';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import ProductGridItem from '../../components/ProductGridItem/ProductGridItem';
import ProductListItem from '../../components/ProductListItem/ProductListItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';

import { TListView } from '../../types/Types';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import Loader from '../../UI/Loader/Loader';
import { onAxiosError } from '../../helpers/onAxiosError';

interface ITag {
  name: string;
  img: string;
  imgId: string;
  _id: string;
}

const initialValues = {
  title: '',
  price: 0,
  description: '',
  totalQty: 1,
  rating: 0,
  smallImg: '',
  largeImg: '',
};

const AddProductForm = () => {
  const [product, setProduct] = useState(null);
  const [tags, setTags] = useState<ITag[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>();
  const [listView, setListView] = useState<TListView>('grid');
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get('/tags').then(({ data }) => setTags(data));
  }, []);

  const formik = useFormik({
    initialValues,

    onSubmit: (values, helpers) => {
      const data = new FormData();

      const { smallImg, largeImg, ...body } = values;
      if (!smallImg) {
        data.append('smallImg', largeImg);
      } else {
        data.append('smallImg', smallImg);
      }
      data.append('largeImg', largeImg);
      const tag = tags.find(item => item.name === selectedTag);
      data.append('tag', tag?._id ?? '');
      Object.entries(body).forEach(([key, value]) => {
        data.append(key, value + '');
      });

      setLoading(true);
      axios
        .post('/products', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(({ data }) => {
          setProduct(data);
          helpers.resetForm();
        })
        .catch(err => onAxiosError(err, dispatch))
        .finally(() => setLoading(false));
    },
  });

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedTag(event.target.value);
  };

  return (
    <>
      <SectionTitle text="Products" className="adminPage_title" />

      <form onSubmit={formik.handleSubmit} className="adminPage_form">
        <label className="adminPage_label">
          Title:
          <input
            className="adminPage_inp"
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </label>
        <label className="adminPage_label">
          Price:
          <input
            className="adminPage_inp"
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          $
        </label>
        <label className="adminPage_label">
          Description:
          <textarea
            className="adminPage_inp"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            cols={30}
            rows={10}
          ></textarea>
        </label>
        <label className="adminPage_label">
          total qty:
          <input
            className="adminPage_inp"
            type="number"
            name="totalQty"
            value={formik.values.totalQty}
            onChange={formik.handleChange}
          />
        </label>

        <label className="adminPage_label">
          Rating:
          <input
            className="adminPage_inp"
            type="number"
            name="rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
          />
        </label>
        <label className="adminPage_label">
          tag:
          <Select
            value={selectedTag}
            onChange={handleChange}
            sx={{
              height: '40px',
            }}
            className="sortBar_select"
          >
            {tags.map(item => (
              <MenuItem
                key={item._id}
                value={item.name}
                className="sortBar_select_item"
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </label>
        <label className="adminPage_label">
          Small img:
          <input
            type="file"
            name="smallImg"
            onChange={event => {
              const file = event.currentTarget.files
                ? event.currentTarget.files[0]
                : null;
              if (file) {
                formik.setFieldValue('smallImg', file);
              }
            }}
          />
        </label>
        <label className="adminPage_label">
          Large img:
          <input
            type="file"
            name="largeImg"
            onChange={event => {
              const file = event.currentTarget.files
                ? event.currentTarget.files[0]
                : null;
              if (file) {
                formik.setFieldValue('largeImg', file);
              }
            }}
          />
        </label>

        <button type="submit" className="adminPage_btn" disabled={loading}>
          {loading ? <Loader /> : 'Create'}
        </button>
      </form>
      {product && (
        <>
          <div className="adminPage_select_wrap">
            <SelectListType listView={listView} setListView={setListView} />
          </div>
          {listView === 'grid' ? (
            <div className="admin_product_wrap">
              <ProductGridItem product={product} />
            </div>
          ) : (
            <ProductListItem product={product} />
          )}
        </>
      )}
      <Outlet />
    </>
  );
};

export default AddProductForm;
