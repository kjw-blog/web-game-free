import React from 'react';
import Tr from './Tr';

const Table = ({ tableData, dispatch }) => {
  return (
    <table>
      {tableData.map((td, i) => (
        <Tr key={i} rowIndex={i} rowData={td} dispatch={dispatch} />
      ))}
    </table>
  );
};

export default Table;
