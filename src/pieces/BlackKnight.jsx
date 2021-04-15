import { ReactComponent as Figure } from '../assets/black-knight.svg';

const BlackKnight = (props) => {
  const { row, column, isOnBoard } = props.position;
  return (
    <Figure
      style={{ gridRow: row, gridColumn: column }}
      className={isOnBoard ? 'OnBoard' : 'NotOnBoard'}
    />
  );
};

export default BlackKnight;
