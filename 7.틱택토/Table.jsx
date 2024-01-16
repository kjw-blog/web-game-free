import React from 'react';
import Tr from './Tr';

const Table = ({ onClick, tableData, dispatch }) => {
  return (
    <table>
      {tableData.map((td, i) => (
        <Tr rowIndex={i} rowData={td} dispatch={dispatch} />
      ))}
    </table>
  );
};

export default Table;
