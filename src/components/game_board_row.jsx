import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import GameBoardCell from './game_board_cell';
import { connect } from 'react-redux';

const GameBoardRow = ({ row, rowIndex, onTakeTurn }) => {
    const cells = row.map((cell, columnIndex) => { //jscs:ignore requireShorthandArrowFunctions
      return (<GameBoardCell
        key={rowIndex + ':' + columnIndex}
        playerId={cell}
        onTakeTurn={() => { onTakeTurn(rowIndex, columnIndex); }} />);
    });

    return (
      <ButtonToolbar className="game-board-row">
        <div className="game-cells-container">
          {cells}
        </div>
      </ButtonToolbar>
    );
  };

export default GameBoardRow;
