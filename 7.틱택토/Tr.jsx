import React from 'react';
import Td from './Td';

const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {rowData.map((td, i) => (
        <Td
          rowIndex={rowIndex}
          cellIndex={i}
          cellData={td}
          dispatch={dispatch}
        ></Td>
      ))}
    </tr>
  );
};

export default Tr;
