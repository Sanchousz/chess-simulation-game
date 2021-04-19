const addToHistory = (pieceName, oldPosition, newPosition) => {
  return {
    type: 'ADD_TO_HISTORY',
    pieceName,
    oldPosition,
    newPosition,
  };
};

const cleanUpHistory = () => {
  return {
    type: 'CLEAN_UP_HISTORY',
  };
};

export { addToHistory, cleanUpHistory };
