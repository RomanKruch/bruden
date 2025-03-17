import  Grid  from '../../assets/icons/shop/grid-icon.svg?react';
import  GridActive  from '../../assets/icons/shop/grid-icon-active.svg?react';
import  List  from '../../assets/icons/shop/list-icon.svg?react';
import  ListActive  from '../../assets/icons/shop/list-icon-active.svg?react';
import { TListView } from '../../types/Types';

interface IProps {
  listView: TListView;
  setListView: React.Dispatch<React.SetStateAction<TListView>>;
}

const SelectListType = ({ listView, setListView }: IProps) => (
  <>
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
  </>
);

export default SelectListType;
