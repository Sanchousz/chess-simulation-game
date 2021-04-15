import { createStore, compose } from 'redux';

class PiecePosition {
  constructor(isOnBoard, row, column) {
    this.isOnBoard = isOnBoard;
    this.row = row;
    this.column = column;
  }
}

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);

const piecesPositionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        movesHistory: state.movesHistory.concat({
          id: action.id,
          pieceName: action.pieceName,
          oldPosition: action.oldPosition,
          newPosition: action.newPosition,
        }),
      };
    case 'CLEAN_UP_HISTORY':
      return {
        ...state,
        movesHistory: [],
      };
    case 'MOVE_WHITE_QUEEN':
      return {
        ...state,
        whiteQueenPosition: {
          isOnBoard: action.isOnBoard,
          row: action.row,
          column: action.column,
        },
      };
    case 'MOVE_WHITE_KNIGHT':
      return {
        ...state,
        whiteKnightPosition: {
          isOnBoard: action.isOnBoard,
          row: action.row,
          column: action.column,
        },
      };
    case 'MOVE_WHITE_BISHOP':
      return {
        ...state,
        whiteBishopPosition: {
          isOnBoard: action.isOnBoard,
          row: action.row,
          column: action.column,
        },
      };
    case 'MOVE_BLACK_QUEEN':
      return {
        ...state,
        blackQueenPosition: {
          isOnBoard: action.isOnBoard,
          row: action.row,
          column: action.column,
        },
      };
    case 'MOVE_BLACK_KNIGHT':
      return {
        ...state,
        blackKnightPosition: {
          isOnBoard: action.isOnBoard,
          row: action.row,
          column: action.column,
        },
      };
    case 'MOVE_BLACK_BISHOP':
      return {
        ...state,
        blackBishopPosition: {
          isOnBoard: action.isOnBoard,
          row: action.row,
          column: action.column,
        },
      };
    default:
      return state;
  }
};

const store = finalCreateStore(piecesPositionReducer, {
  whiteQueenPosition: new PiecePosition(true, 1, 1),
  whiteKnightPosition: new PiecePosition(true, 1, 2),
  whiteBishopPosition: new PiecePosition(true, 1, 3),
  blackQueenPosition: new PiecePosition(true, 8, 1),
  blackKnightPosition: new PiecePosition(true, 8, 2),
  blackBishopPosition: new PiecePosition(true, 8, 3),
  movesHistory: [],
});

export default store;
