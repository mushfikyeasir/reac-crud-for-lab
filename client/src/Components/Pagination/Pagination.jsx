import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate className='flex gap-10 justify-center text-center items-center btn-sm btn-success text-xl'
      previousLabel={'Previous'}
      nextLabel={'Next'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};

export default Pagination;
