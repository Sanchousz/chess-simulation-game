import { ReactComponent as Figure } from '../assets/white-queen.svg';

const WhiteQueen = (props) => {
  const { row, column, isOnBoard } = props.position;
  return (
    <Figure
      style={{ gridRow: row, gridColumn: column }}
      className={isOnBoard ? 'OnBoard' : 'NotOnBoard'}
    />
  );
};

export default WhiteQueen;
