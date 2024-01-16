import React, { memo, useCallback, useEffect, useRef } from 'react';
import { CLICK_CELL } from './TicTacToe';

const Td = memo(({ rowIndex, cellIndex, cellData, dispatch }) => {
  const ref = useRef([]);
  useEffect(() => {
    console.log(
      rowIndex === ref.current[0],
      cellIndex === ref.current[1],
      cellData === ref.current[2],
      dispatch === ref.current[3]
    );
    ref.current = [rowIndex, cellIndex, cellData, dispatch];
  }, [rowIndex, cellIndex, cellData, dispatch]);

  const onClickTd = useCallback(() => {
    if (cellData) {
      return;
    }

    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
});

export default Td;
