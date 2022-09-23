import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.categories);

  const checkStatusFetch = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <div className="categories-container">
        <p>
          the current state is:
          <hr />
          {selector}
        </p>
        <button type="button" onClick={checkStatusFetch}>
          check status
        </button>
      </div>
    </>
  );
};
export default Category;
