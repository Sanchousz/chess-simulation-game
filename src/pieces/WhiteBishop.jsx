import { ReactComponent as Figure } from '../assets/white-bishop.svg';

const WhiteBishop = (props) => {
  const { row, column, isOnBoard } = props.position;
  return (
    <Figure
      style={{ gridRow: row, gridColumn: column }}
      className={isOnBoard ? 'OnBoard' : 'NotOnBoard'}
    />
  );
};

export default WhiteBishop;
