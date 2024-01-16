import React, { useCallback, useReducer, useState } from 'react';
import Table from './Table';

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner 잘못된 사용법임 불변성을 유지해야함

      return {
        ...state,
        winner: action.winner,
      };

    case CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 문제 해결 가능
      tableData[action.row][action.cell] = state.turn;

      return { ...state, tableData };

    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('0');
  // const [tableData, setTableData] = useState([
  //   ['', '', ''],
  //   ['', '', ''],
  //   ['', '', ''],
  // ]);

  const onClickTable = useCallback(() => {
    dispatch({
      type: SET_WINNER,
      winner: 'O',
    });
  }, []);

  return (
    <>
      <Table
        onClick={onClickTable}
        tableData={state.tableData}
        dispatch={dispatch}
      />
      {state.winner && <div>{state.winner}님의 승리!</div>}
    </>
  );
};

export default TicTacToe;
