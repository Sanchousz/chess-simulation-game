import { createStore, compose } from 'redux';
import { piecesPositionReducer } from '../reducers/reducer.js';

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
