import { useState } from 'react';
import BlackQueen from './pieces/BlackQueen';
import WhiteQueen from './pieces/WhiteQueen';
import BlackKnight from './pieces/BlackKnight';
import WhiteKnight from './pieces/WhiteKnight';
import BlackBishop from './pieces/BlackBishop';
import WhiteBishop from './pieces/WhiteBishop';
import store from './store/store';

const Squares = () => {
  const [whiteQueenPosition, setWhiteQueenPosition] = useState(
    store.getState().whiteQueenPosition
  );

  const [whiteKnightPosition, setWhiteKnightPosition] = useState(
    store.getState().whiteKnightPosition
  );

  const [whiteBishopPosition, setWhiteBishopPosition] = useState(
    store.getState().whiteBishopPosition
  );

  const [blackQueenPosition, setBlackQueenPosition] = useState(
    store.getState().blackQueenPosition
  );

  const [blackKnightPosition, setBlackKnightPosition] = useState(
    store.getState().blackKnightPosition
  );
  const [blackBishopPosition, setBlackBishopPosition] = useState(
    store.getState().blackBishopPosition
  );

  const updatePositions = () => {
    setWhiteQueenPosition(store.getState().whiteQueenPosition);
    setWhiteKnightPosition(store.getState().whiteKnightPosition);
    setWhiteBishopPosition(store.getState().whiteBishopPosition);
    setBlackQueenPosition(store.getState().blackQueenPosition);
    setBlackKnightPosition(store.getState().blackKnightPosition);
    setBlackBishopPosition(store.getState().blackBishopPosition);
  };

  store.subscribe((state) => updatePositions(state));

  return (
    <div className='Squares'>
      <WhiteQueen position={whiteQueenPosition} />
      <WhiteKnight position={whiteKnightPosition} />
      <WhiteBishop position={whiteBishopPosition} />
      <BlackQueen position={blackQueenPosition} />
      <BlackKnight position={blackKnightPosition} />
      <BlackBishop position={blackBishopPosition} />
    </div>
  );
};

export default Squares;
