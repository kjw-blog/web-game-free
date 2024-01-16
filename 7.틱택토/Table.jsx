import React from 'react';
import Tr from './Tr';

const Table = ({ onClick, tableData }) => {
  return (
    <table onClick={onClick}>
      {Array(tableData.length)
        .fill()
        .map((_, i) => (
          <Tr rowData={tableData[i]} />
        ))}
    </table>
  );
};

export default Table;
