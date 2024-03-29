import React, { memo } from 'react';
import Td from './Td';

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {rowData.map((td, i) => (
        <Td
          key={i}
          rowIndex={rowIndex}
          cellIndex={i}
          cellData={td}
          dispatch={dispatch}
        ></Td>
      ))}
    </tr>
  );
});

export default Tr;
