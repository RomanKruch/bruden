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

interface ITag {
  name: string;
  img: string;
  imgId: string;
  _id: string;
}

const AddProductForm = () => {
  const [product, setProduct] = useState(null);
  const [tags, setTags] = useState<ITag[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>();
  const [listView, setListView] = useState<TListView>('grid');

  useEffect(() => {
    axios.get('/tag').then(({ data }) => setTags(data.data.tags));
  }, []);

  const formik = useFormik({
    initialValues: {
      title: '',
      price: 0,
      description: '',
      totalQty: 1,
      img: '',
      largeImg: '',
    },
    onSubmit: values => {
      let data = new FormData();

      data.append('img', values.img);
      data.append('largeImg', values.largeImg);
      const tag = tags.find(item => item.name === selectedTag);
      data.append('data', JSON.stringify({ ...values, tag: tag?._id }));

      axios
        .post('/admin/product', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(({ data }) =>
          setProduct({ ...data.data.product, tag: data.data.product.tag.name }),
        );
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

        <button type="submit" className="adminPage_btn">
          Create
        </button>
      </form>
      {product && (
        <>
          <div className="adminPage_select_wrap">
            <SelectListType listView={listView} setListView={setListView} />
          </div>
          {listView === 'grid' ? (
            <ProductGridItem product={product} />
          ) : (
            <ProductListItem product={product} />
          )}
        </>
      )}
    </>
  );
};

export default AddProductForm;
