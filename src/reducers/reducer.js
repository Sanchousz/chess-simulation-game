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
    case 'TAKE_WHITE_QUEEN':
      return {
        ...state,
        whiteQueenPosition: {
          isOnBoard: false,
        },
      };
    case 'TAKE_WHITE_KNIGHT':
      return {
        ...state,
        whiteKnightPosition: {
          isOnBoard: false,
        },
      };
    case 'TAKE_WHITE_BISHOP':
      return {
        ...state,
        whiteBishopPosition: {
          isOnBoard: false,
        },
      };
    case 'TAKE_BLACK_QUEEN':
      return {
        ...state,
        blackQueenPosition: {
          isOnBoard: false,
        },
      };
    case 'TAKE_BLACK_KNIGHT':
      return {
        ...state,
        blackKnightPosition: {
          isOnBoard: false,
        },
      };
    case 'TAKE_BLACK_BISHOP':
      return {
        ...state,
        blackBishopPosition: {
          isOnBoard: false,
        },
      };
    default:
      return state;
  }
};

export { piecesPositionReducer };
