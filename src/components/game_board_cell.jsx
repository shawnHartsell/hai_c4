import React from 'react';
import { Button } from 'react-bootstrap';

const GameBoardCell = ({ playerId, onTakeTurn }) => { //jscs:ignore requireShorthandArrowFunctions
  return (
    <Button
      className="game-board-cell"
      bsSize='large'
      bsStyle={
        playerId === 1 ? 'primary' :
        playerId === 2 ? 'danger' :
        'default'
      }
      onClick={onTakeTurn}
      playerId={playerId}
      disabled={playerId ? true : false} >
    </Button>);
};

export default GameBoardCell;
