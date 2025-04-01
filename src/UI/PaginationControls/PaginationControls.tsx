import './PaginationControls.scss';

interface IProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}

const PaginationControls = ({ currentPage, setCurrentPage, limit }: IProps) => {
  return (
    <div className="paginationControls">
      <button
        className="paginationControls_btn"
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(state => state - 1)}
      >
        {'<'}
      </button>

      <button className="paginationControls_btn">{currentPage}</button>

      <button
        className="paginationControls_btn"
        disabled={currentPage === limit}
        onClick={() => setCurrentPage(state => state + 1)}
      >
        {'>'}
      </button>
    </div>
  );
};

export default PaginationControls;
