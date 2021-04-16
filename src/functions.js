import store from './store/store';
import {
  changeWhiteQueenPosition,
  changeWhiteKnightPosition,
  changeWhiteBishopPosition,
  changeBlackQueenPosition,
  changeBlackKnightPosition,
  changeBlackBishopPosition,
  takeWhiteQueen,
  takeWhiteKnight,
  takeWhiteBishop,
  takeBlackQueen,
  takeBlackKnight,
  takeBlackBishop,
} from './actions/moves';
import { addToHistory } from './actions/historyManipulations';
import { findBestQueenMove } from './movesLogic';

const generateRandomPosition = () => {
  let row = Math.round(Math.random() * 7 + 1);
  let column = Math.round(Math.random() * 7 + 1);
  let isOnBoard = true;
  return {
    isOnBoard,
    row,
    column,
  };
};

const generateCellAdress = (position) => {
  const { row, column } = position;
  return `${String.fromCharCode(64 + column)}${row}`;
};

const isOccupied = (alreadyOccupied, position) => {
  return alreadyOccupied.some(
    (occupied) =>
      position.row === occupied.row && position.column === occupied.column
  );
};

const findFreePosition = (alreadyOccupied) => {
  let position;
  do {
    position = generateRandomPosition();
  } while (isOccupied(alreadyOccupied, position));
  return position;
};

const randomlyPlacePieces = () => {
  let alreadyOccupied = [];

  let position = generateRandomPosition();
  store.dispatch(changeWhiteQueenPosition(position));
  alreadyOccupied.push(position);

  position = findFreePosition(alreadyOccupied);
  store.dispatch(changeWhiteKnightPosition(position));
  alreadyOccupied.push(position);

  position = findFreePosition(alreadyOccupied);
  store.dispatch(changeWhiteBishopPosition(position));
  alreadyOccupied.push(position);

  position = findFreePosition(alreadyOccupied);
  store.dispatch(changeBlackQueenPosition(position));
  alreadyOccupied.push(position);

  position = findFreePosition(alreadyOccupied);
  store.dispatch(changeBlackBishopPosition(position));
  alreadyOccupied.push(position);

  position = findFreePosition(alreadyOccupied);
  store.dispatch(changeBlackKnightPosition(position));
  alreadyOccupied.push(position);
};

const takeAPiece = (position, color) => {
  switch (color) {
    case 'white':
      if (
        JSON.stringify(store.getState().whiteQueenPosition) ===
        JSON.stringify(position)
      ) {
        store.dispatch(takeWhiteQueen());
        console.log(
          JSON.stringify(store.getState().whiteQueenPosition),
          JSON.stringify(position)
        );
        return true;
      } else if (
        JSON.stringify(store.getState().whiteKnightPosition) ===
        JSON.stringify(position)
      ) {
        store.dispatch(takeWhiteKnight());
        console.log(
          JSON.stringify(store.getState().whiteKnightPosition),
          JSON.stringify(position)
        );
        return true;
      } else if (
        JSON.stringify(store.getState().whiteBishopPosition) ===
        JSON.stringify(position)
      ) {
        store.dispatch(takeWhiteBishop());
        return true;
      }
      break;
    case 'black':
      if (
        JSON.stringify(store.getState().blackQueenPosition) ===
        JSON.stringify(position)
      ) {
        store.dispatch(takeBlackQueen());
        return true;
      } else if (
        JSON.stringify(store.getState().blackKnightPosition) ===
        JSON.stringify(position)
      ) {
        store.dispatch(takeBlackKnight());
        return true;
      } else if (
        JSON.stringify(store.getState().blackBishopPosition) ===
        JSON.stringify(position)
      ) {
        store.dispatch(takeBlackBishop());
        return true;
      }
      break;
    default:
      return false;
  }
};

const movePieces = (id, whitesPositions, blacksPositions) => {
  moveBlackQueen(
    id,
    store.getState().blackQueenPosition,
    blacksPositions,
    whitesPositions
  );
};

const isAGoodMove = (newPosition, teammatesPositions, opponentsPosition) => {
  if (isOccupied(teammatesPositions, newPosition)) return -1;
  else if (isOccupied(opponentsPosition, newPosition)) {
    return true;
  }
  return false;
};

const moveBlackQueen = (
  moveId,
  oldPosition,
  teammatesPositions,
  opponentsPosition
) => {
  let newPosition = findBestQueenMove(
    oldPosition,
    teammatesPositions,
    opponentsPosition
  );

  store.dispatch(changeBlackQueenPosition(newPosition));
  store.dispatch(
    addToHistory(
      moveId,
      'Black Queen',
      generateCellAdress(oldPosition),
      generateCellAdress(newPosition)
    )
  );
};

export {
  randomlyPlacePieces,
  movePieces,
  isAGoodMove,
  takeAPiece,
  findFreePosition,
};
