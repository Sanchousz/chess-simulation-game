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
import {
  findBestQueenMove,
  findBestBishopMove,
  findBestKnightMove,
  findRandomMove,
} from './movesLogic';

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

const isOnBoardLimits = (row, column) => {
  return row >= 1 && row <= 8 && column >= 1 && column <= 8;
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

const writeToHistory = (name, color, oldPosition, newPosition) => {
  store.dispatch(
    addToHistory(
      `${color} ${name}`,
      generateCellAdress(oldPosition),
      generateCellAdress(newPosition)
    )
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
        return true;
      } else if (
        JSON.stringify(store.getState().whiteKnightPosition) ===
        JSON.stringify(position)
      ) {
        store.dispatch(takeWhiteKnight());
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

const movePieces = (teammatesPositions, opponentsPositions, color) => {
  let newPosition = false,
    oldPosition,
    pieceToMove,
    i = 0;

  for (i = 0; i < 2; i++) {
    if (store.getState()[`${color}KnightPosition`].isOnBoard === true) {
      oldPosition = store.getState()[`${color}KnightPosition`];
      pieceToMove = 'knight';
      newPosition = checkPositionsForKnight(
        store.getState()[`${color}KnightPosition`],
        teammatesPositions,
        opponentsPositions,
        i
      );
      if (newPosition) break;
    }
    if (store.getState()[`${color}BishopPosition`].isOnBoard === true) {
      oldPosition = store.getState()[`${color}BishopPosition`];
      pieceToMove = 'bishop';
      newPosition = checkPositionsForBishop(
        store.getState()[`${color}BishopPosition`],
        teammatesPositions,
        opponentsPositions,
        i
      );
      if (newPosition) break;
    }
    if (store.getState()[`${color}QueenPosition`].isOnBoard === true) {
      oldPosition = store.getState()[`${color}QueenPosition`];
      pieceToMove = 'queen';
      newPosition = checkPositionsForQueen(
        store.getState()[`${color}QueenPosition`],
        teammatesPositions,
        opponentsPositions,
        i
      );
      if (newPosition) break;
    }
  }

  moveAPiece(pieceToMove, color, newPosition);

  let opponentColor = color === 'white' ? 'black' : 'white';
  if (i === 0) takeAPiece(newPosition, opponentColor);
  if (typeof oldPosition !== 'undefined')
    writeToHistory(pieceToMove, color, oldPosition, newPosition);
};

const isAGoodMove = (newPosition, teammatesPositions, opponentsPositions) => {
  if (isOccupied(teammatesPositions, newPosition)) return -1;
  else if (isOccupied(opponentsPositions, newPosition)) {
    return true;
  }
  return false;
};

const checkPositionsForQueen = (
  oldPosition,
  teammatesPositions,
  opponentsPosition,
  step
) => {
  let newPosition = findBestQueenMove(
    oldPosition,
    teammatesPositions,
    opponentsPosition
  );

  if (step === 1) {
    newPosition = findRandomMove('queen', oldPosition, teammatesPositions);
  }

  return newPosition;
};

const checkPositionsForBishop = (
  oldPosition,
  teammatesPositions,
  opponentsPosition,
  step
) => {
  let newPosition = findBestBishopMove(
    oldPosition,
    teammatesPositions,
    opponentsPosition
  );

  if (step === 1) {
    newPosition = findRandomMove('bishop', oldPosition, teammatesPositions);
  }

  console.log(newPosition);

  return newPosition;
};

const checkPositionsForKnight = (
  oldPosition,
  teammatesPositions,
  opponentsPosition,
  step
) => {
  let newPosition = findBestKnightMove(
    oldPosition,
    teammatesPositions,
    opponentsPosition
  );

  if (step === 1) {
    newPosition = findRandomMove('knight', oldPosition, teammatesPositions);
  }

  return newPosition;
};

const moveAPiece = (pieceName, color, newPosition) => {
  switch (pieceName) {
    case 'knight':
      color === 'white'
        ? store.dispatch(changeWhiteKnightPosition(newPosition))
        : store.dispatch(changeBlackKnightPosition(newPosition));
      break;
    case 'bishop':
      color === 'white'
        ? store.dispatch(changeWhiteBishopPosition(newPosition))
        : store.dispatch(changeBlackBishopPosition(newPosition));
      break;
    case 'queen':
      color === 'white'
        ? store.dispatch(changeWhiteQueenPosition(newPosition))
        : store.dispatch(changeBlackQueenPosition(newPosition));
      break;
    default:
      return null;
  }
};

export {
  randomlyPlacePieces,
  movePieces,
  isAGoodMove,
  takeAPiece,
  findFreePosition,
  isOnBoardLimits,
  isOccupied,
};
