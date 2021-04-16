import { useSelector } from 'react-redux';
import BlackQueen from './pieces/BlackQueen';
import WhiteQueen from './pieces/WhiteQueen';
import BlackKnight from './pieces/BlackKnight';
import WhiteKnight from './pieces/WhiteKnight';
import BlackBishop from './pieces/BlackBishop';
import WhiteBishop from './pieces/WhiteBishop';

const Squares = () => {
  const whiteQueenPosition = useSelector((state) => state.whiteQueenPosition);
  const whiteKnightPosition = useSelector((state) => state.whiteKnightPosition);
  const whiteBishopPosition = useSelector((state) => state.whiteBishopPosition);

  const blackQueenPosition = useSelector((state) => state.blackQueenPosition);
  const blackKnightPosition = useSelector((state) => state.blackKnightPosition);
  const blackBishopPosition = useSelector((state) => state.blackBishopPosition);

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
