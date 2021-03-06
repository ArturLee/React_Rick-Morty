/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';

export default ({ totalPages, setPage }) => {
  const listItem = (number) => (
    <li key={number}>
      <a onClick={() => setPage(number)} href="!#">
        {number}
      </a>
    </li>
  );

  const list = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(listItem(i));
    }
    return (
      <ul>
        {' '}
        {items}
        {' '}
      </ul>
    );
  };

  return (
    <nav id="pagination">
      {list()}
    </nav>
  );
};
