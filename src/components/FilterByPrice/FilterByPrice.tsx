import { useState } from 'react';
import Slider from '@mui/material/Slider';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import { TPriceFilterValue } from '../../types/Types';
import './FilterByPrice.scss';

interface IProps {
  setPriceFilterValue: React.Dispatch<React.SetStateAction<TPriceFilterValue>>;
}

const FilterByPrice = ({ setPriceFilterValue }: IProps) => {
  const [value, setValue] = useState([0, 199]);

  const labelFormat = (labelValue: number) => {
    return `${labelValue}$`;
  };

  const handleChange = (_: any, newValue: number | TPriceFilterValue) => {
    setValue(newValue as TPriceFilterValue);
  };

  return (
    <div className="filterByPrice">
      <SectionTitle text="Filter by price" className="filterByPrice_title" />

      <Slider
        max={199}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={labelFormat}
        size="small"
        sx={{
          color: '#7F7F7F',
          marginBottom: '20px',
          '& .MuiSlider-thumb': {
            color: '#292A33',
          },
        }}
      />

      <button
        type="button"
        className="filterByPrice_btn"
        onClick={() => setPriceFilterValue(value)}
      >
        filter
      </button>
      <p className="filterByPrice_price">
        Price: ${value[0]} - ${value[1]}
      </p>
    </div>
  );
};

export default FilterByPrice;
