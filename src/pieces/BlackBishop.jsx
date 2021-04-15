import { ReactComponent as Figure } from '../assets/black-bishop.svg';

const BlackBishop = (props) => {
  const { row, column, isOnBoard } = props.position;
  return (
    <Figure
      style={{ gridRow: row, gridColumn: column }}
      className={isOnBoard ? 'OnBoard' : 'NotOnBoard'}
    />
  );
};

export default BlackBishop;
