import store from './store/store';
import {
  changeWhiteQueenPosition,
  changeWhiteKnightPosition,
  changeWhiteBishopPosition,
  changeBlackQueenPosition,
  changeBlackKnightPosition,
  changeBlackBishopPosition,
} from './actions/moves';

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

const randomlyPlacePieces = () => {
  let alreadyOccupied = [];

  let position = generateRandomPosition();
  store.dispatch(changeWhiteQueenPosition(position));
  alreadyOccupied.push(position);

  do {
    position = generateRandomPosition();
  } while (isOccupied(alreadyOccupied, position));
  store.dispatch(changeWhiteKnightPosition(position));
  alreadyOccupied.push(position);

  do {
    position = generateRandomPosition();
  } while (isOccupied(alreadyOccupied, position));
  store.dispatch(changeWhiteBishopPosition(position));
  alreadyOccupied.push(position);

  do {
    position = generateRandomPosition();
  } while (isOccupied(alreadyOccupied, position));
  store.dispatch(changeBlackQueenPosition(position));
  alreadyOccupied.push(position);

  do {
    position = generateRandomPosition();
  } while (isOccupied(alreadyOccupied, position));
  store.dispatch(changeBlackBishopPosition(position));
  alreadyOccupied.push(position);

  do {
    position = generateRandomPosition();
  } while (isOccupied(alreadyOccupied, position));
  store.dispatch(changeBlackKnightPosition(position));
  alreadyOccupied.push(position);
};

const moveBlackBishop = () => {
  let position = generateRandomPosition();
  store.dispatch(changeBlackBishopPosition(position));
};

export { randomlyPlacePieces, generateCellAdress, moveBlackBishop };
