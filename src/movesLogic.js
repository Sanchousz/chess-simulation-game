import { isAGoodMove, isOnBoardLimits, isOccupied } from './functions';
// slightly inspired from https://codereview.stackexchange.com/questions/53875/generating-possible-chess-moves

const findBestQueenMove = (position, teammatesPositions, opponentsPosition) => {
  const { row, column } = position;

  // checking the diagonals
  for (let j = column + 1, i = row + 1; j <= 8 && i <= 8; j++, i++) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  for (let j = column - 1, i = row + 1; j >= 1 && i <= 8; j--, i++) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  for (let j = column + 1, i = row - 1; j <= 8 && i >= 1; j++, i--) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  for (let j = column - 1, i = row - 1; j >= 1 && i >= 1; j--, i--) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  // checking the vertical and horizontal moves
  for (let i = row - 1; i >= 1; i--) {
    let newPosition = { isOnBoard: true, row: i, column };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  for (let i = row + 1; i <= 8; i++) {
    let newPosition = { isOnBoard: true, row: i, column };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  for (let j = column - 1; j >= 1; j--) {
    let newPosition = { isOnBoard: true, row, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  for (let j = column + 1; j <= 8; j++) {
    let newPosition = { isOnBoard: true, row, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  return false;
};

const findBestKnightMove = (
  position,
  teammatesPositions,
  opponentsPosition
) => {
  const { row, column } = position;
  const rowMove = [2, 1, -1, -2, -2, -1, 1, 2];
  const columnMove = [1, 2, 2, 1, -1, -2, -2, -1];
  let newPosition;

  for (let i = 0; i < 8; i++) {
    newPosition = {
      isOnBoard: true,
      row: row + rowMove[i],
      column: column + columnMove[i],
    };
    if (!isOnBoardLimits(newPosition.row, newPosition.column)) {
      continue;
    } else if (
      isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1
    )
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }
  return false;
};

const findBestBishopMove = (
  position,
  teammatesPositions,
  opponentsPosition
) => {
  const { row, column } = position;

  // checking the diagonals
  for (let j = column + 1, i = row + 1; j <= 8 && i <= 8; j++, i++) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  for (let j = column - 1, i = row + 1; j >= 1 && i <= 8; j--, i++) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  for (let j = column + 1, i = row - 1; j <= 8 && i >= 1; j++, i--) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  for (let j = column - 1, i = row - 1; j >= 1 && i >= 1; j--, i--) {
    let newPosition = { isOnBoard: true, row: i, column: j };
    if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition) === -1)
      break;
    else if (isAGoodMove(newPosition, teammatesPositions, opponentsPosition)) {
      return newPosition;
    }
  }

  return false;
};

const findRandomMove = (pieceName, position, teammatesPositions) => {
  const { row, column } = position;
  let rowMove, columnMove;
  let newPosition;

  switch (pieceName) {
    case 'queen':
      rowMove = [0, -1, -1, -1, 0, 1, 1, 1];
      columnMove = [1, 1, 0, -1, -1, -1, 0, 1];
      break;
    case 'bishop':
      rowMove = [-1, -1, 1, 1];
      columnMove = [1, -1, -1, 1];
      break;
    case 'knight':
      rowMove = [2, 1, -1, -2, -2, -1, 1, 2];
      columnMove = [1, 2, 2, 1, -1, -2, -2, -1];
      break;
    default:
      return -1;
  }

  for (let i = 0; i < 8; i++) {
    newPosition = {
      isOnBoard: true,
      row: row + rowMove[i],
      column: column + columnMove[i],
    };
    if (
      isOnBoardLimits(newPosition.row, newPosition.column) &&
      !isOccupied(teammatesPositions, newPosition)
    )
      break;
  }
  return newPosition;
};

export {
  findBestQueenMove,
  findBestKnightMove,
  findBestBishopMove,
  findRandomMove,
};
