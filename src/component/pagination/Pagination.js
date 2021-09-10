import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChane: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChane: null,
};

export default function Pagination(props) {
  const { pagination, onPageChane } = props;
  const { count_per_page, current_page } = pagination;

  //handle...
  const handlePageCHange = (newPage) => {
    if (onPageChane) {
      onPageChane(newPage);
    }
  };
  return (
    <div className="pagination-container">
      <div>
        <button
          className="pagination-button"
          disabled={current_page <= 1}
          onClick={() => handlePageCHange(current_page - 1)}
        >
          PREV
        </button>
        <button
          className="pagination-button"
          disabled={current_page >= count_per_page}
          onClick={() => handlePageCHange(current_page + 1)}
        >
          NEXT
        </button>
      </div>

      <h1>this is page number :{current_page}</h1>
    </div>
  );
}
