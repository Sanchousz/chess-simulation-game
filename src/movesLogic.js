import { isAGoodMove, findFreePosition, takeAPiece } from './functions';

const findBestQueenMove = (position, teammatesPositions, opponentsPosition) => {
  const { row, column } = position;

  // inspired from https://codereview.stackexchange.com/questions/53875/generating-possible-chess-moves

  // checking the diagonals moves
  for (let j = column + 1, i = row + 1; j <= 8 && i <= 8; j++, i++) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      console.log(newPosition);
      takeAPiece(newPosition, 'white');
      return newPosition;
    }
  }

  for (let j = column - 1, i = row + 1; j >= 1 && i <= 8; j--, i++) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      console.log(newPosition);
      takeAPiece(newPosition, 'white');
      return newPosition;
    }
  }

  for (let j = column + 1, i = row - 1; j <= 8 && i >= 1; j++, i--) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      console.log(newPosition);
      takeAPiece(newPosition, 'white');
      return newPosition;
    }
  }

  for (let j = column - 1, i = row - 1; j >= 1 && i >= 1; j--, i--) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      console.log(newPosition);
      takeAPiece(newPosition, 'white');
      return newPosition;
    }
  }

  // checking the vertical and horizontal moves
  for (let i = row - 1; i >= 1; i--) {
    let newPosition = { isOnBoard: true, row: i, column };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      console.log(newPosition);
      takeAPiece(newPosition, 'white');
      return newPosition;
    }
  }

  for (let i = row + 1; i <= 8; i++) {
    let newPosition = { isOnBoard: true, row: i, column };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      console.log(newPosition);
      takeAPiece(newPosition, 'white');
      return newPosition;
    }
  }

  for (let j = column - 1; j >= 1; j--) {
    let newPosition = { isOnBoard: true, row, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      console.log(newPosition);
      takeAPiece(newPosition, 'white');
      return newPosition;
    }
  }

  for (let j = column + 1; j <= 8; j++) {
    let newPosition = { isOnBoard: true, row, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      console.log(newPosition);
      takeAPiece(newPosition, 'white');
      return newPosition;
    }
  }

  return findFreePosition(teammatesPositions.concat(position));
};

export { findBestQueenMove };
