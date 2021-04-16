import { useState } from 'react';
import {
  Grid,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import store from './store/store';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const HistoryTable = () => {
  const [moves, setMoves] = useState(store.getState().movesHistory);
  const updateTable = () => {
    setMoves(store.getState().movesHistory);
  };

  store.subscribe((state) => updateTable(state));

  return (
    <Grid container justify='center'>
      <Grid item xs={11} sm={8} md={6} lg={3} xl={3}>
        <TableContainer
          className='table-container'
          elevation={4}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Piece</StyledTableCell>
                <StyledTableCell align='center'>From</StyledTableCell>
                <StyledTableCell align='center'>To</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {moves.length > 0 ? (
                moves.map((move) => (
                  <StyledTableRow key={move.id}>
                    <TableCell>{move.pieceName}</TableCell>
                    <TableCell align='center'>{move.oldPosition}</TableCell>
                    <TableCell align='center'>{move.newPosition}</TableCell>
                  </StyledTableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align='center'>
                    <Typography>
                      Moves history will be displayed here <br />
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default HistoryTable;
