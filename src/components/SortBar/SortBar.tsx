import Grid from '../../assets/icons/shop/grid-icon.svg?react';
import GridActive from '../../assets/icons/shop/grid-icon-active.svg?react';
import List from '../../assets/icons/shop/list-icon.svg?react';
import ListActive from '../../assets/icons/shop/list-icon-active.svg?react';
import { TListView, TSelectValues } from '../../types/Types';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import './SortBar.scss';

interface IProps {
  listView: TListView;
  setListView: React.Dispatch<React.SetStateAction<TListView>>;
  sortValue: TSelectValues;
  setSortValue: React.Dispatch<React.SetStateAction<TSelectValues>>;
}

const SortBar = ({
  listView,
  setListView,
  sortValue,
  setSortValue,
}: IProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value as TSelectValues);
  };

  return (
    <div className="sortBar">
      <div className="sortBar_wrap">
        <button
          type="button"
          className="sortBar_btn"
          onClick={() => setListView('grid')}
        >
          {listView === 'grid' ? <GridActive /> : <Grid />}
        </button>
        <button
          type="button"
          className="sortBar_btn"
          onClick={() => setListView('list')}
        >
          {listView === 'list' ? <ListActive /> : <List />}
        </button>
        <p className="sortBar_subtitle">Showing 1-12 of 15 results</p>
      </div>

      <Select
        value={sortValue}
        onChange={handleChange}
        sx={{
          height: '40px',
        }}
        className="sortBar_select"
      >
        <MenuItem value="def" className="sortBar_select_item">
          Default sorting
        </MenuItem>
        <MenuItem value="priceUp" className="sortBar_select_item">
          sort by price &#8593;
        </MenuItem>
        <MenuItem value="priceDown" className="sortBar_select_item">
          sort by price &#8595;
        </MenuItem>
        <MenuItem value="rating" className="sortBar_select_item">
          sort by rating
        </MenuItem>
      </Select>
    </div>
  );
};

export default SortBar;
