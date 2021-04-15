import Squares from './Squares';
import './Board.css';

const initChar = (char, row, column) => {
  return <h4 style={{ gridRow: row, gridColumn: column }}> {char} </h4>;
};

const createDigitsColumns = () => {
  let elements = [];
  for (let i = 1; i <= 8; i++) {
    elements.push(initChar(`${i}`, i + 1, 1));
    elements.push(initChar(`${i}`, i + 1, 10));
  }
  return elements;
};

const createLettersRows = () => {
  let elements = [];
  for (let i = 1; i <= 8; i++) {
    elements.push(initChar(String.fromCharCode(96 + i), 1, i + 1));
    elements.push(initChar(String.fromCharCode(96 + i), 10, i + 1));
  }
  return elements;
};

const Board = () => {
  const digits = createDigitsColumns();
  const letters = createLettersRows();
  return (
    <div className='Board'>
      {digits.map((element) => element)}
      {letters.map((element) => element)}
      <Squares />
    </div>
  );
};

export default Board;
