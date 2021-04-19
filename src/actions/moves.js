const changeWhiteQueenPosition = (position) => {
  return {
    type: 'MOVE_WHITE_QUEEN',
    isOnBoard: position.isOnBoard,
    row: position.row,
    column: position.column,
  };
};
const changeWhiteKnightPosition = (position) => {
  return {
    type: 'MOVE_WHITE_KNIGHT',
    isOnBoard: position.isOnBoard,
    row: position.row,
    column: position.column,
  };
};
const changeWhiteBishopPosition = (position) => {
  return {
    type: 'MOVE_WHITE_BISHOP',
    isOnBoard: position.isOnBoard,
    row: position.row,
    column: position.column,
  };
};

const changeBlackQueenPosition = (position) => {
  return {
    type: 'MOVE_BLACK_QUEEN',
    isOnBoard: position.isOnBoard,
    row: position.row,
    column: position.column,
  };
};
const changeBlackBishopPosition = (position) => {
  return {
    type: 'MOVE_BLACK_BISHOP',
    isOnBoard: position.isOnBoard,
    row: position.row,
    column: position.column,
  };
};
const changeBlackKnightPosition = (position) => {
  return {
    type: 'MOVE_BLACK_KNIGHT',
    isOnBoard: position.isOnBoard,
    row: position.row,
    column: position.column,
  };
};
const takeWhiteQueen = () => {
  return {
    type: 'TAKE_WHITE_QUEEN',
  };
};
const takeWhiteKnight = () => {
  return {
    type: 'TAKE_WHITE_KNIGHT',
  };
};
const takeWhiteBishop = () => {
  return {
    type: 'TAKE_WHITE_BISHOP',
  };
};

const takeBlackQueen = () => {
  return {
    type: 'TAKE_BLACK_QUEEN',
  };
};
const takeBlackBishop = () => {
  return {
    type: 'TAKE_BLACK_BISHOP',
  };
};
const takeBlackKnight = () => {
  return {
    type: 'TAKE_BLACK_KNIGHT',
  };
};

export {
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
};
