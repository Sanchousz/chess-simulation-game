import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button, TextField } from '@material-ui/core';
import { randomlyPlacePieces, movePieces } from './functions';
import { cleanUpHistory } from './actions/historyManipulations';
import './App.css';
import store from './store/store';

const Controls = () => {
  const [delay, setDelay] = useState(1000);
  const [movesCounter, setMovesCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [isStoped, setIsStoped] = useState(false);

  const playGame = () => setIsPaused(false);
  const pauseGame = () => setIsPaused(true);

  const whitesPositions = useSelector((state) => [
    state.whiteQueenPosition,
    state.whiteKnightPosition,
    state.whiteBishopPosition,
  ]);

  const blacksPositions = useSelector((state) => [
    state.blackQueenPosition,
    state.blackKnightPosition,
    state.blackBishopPosition,
  ]);

  const canContinueGame = () =>
    blacksPositions.filter((element) => element.isOnBoard).length > 0 &&
    whitesPositions.filter((element) => element.isOnBoard).length > 0;

  const handleDelayChange = (e) => {
    const value = e.target.value;
    value > 0
      ? setDelay(e.target.value)
      : alert('Please, write a value bigger than 0');
  };

  useInterval(() => {
    canContinueGame() ? setIsStoped(false) : setIsStoped(true);
    if (!isPaused && !isStoped) {
      setMovesCounter(movesCounter + 1);
      movesCounter % 2 === 0
        ? movePieces(movesCounter, whitesPositions, blacksPositions, 'white')
        : movePieces(movesCounter, blacksPositions, whitesPositions, 'black');
    }
  }, delay);

  const simulateGame = () => {
    setIsStoped(false);
    setMovesCounter(0);
    setIsPaused(true);
    randomlyPlacePieces();
    store.dispatch(cleanUpHistory());
  };

  return (
    <Grid container justify='center'>
      <Grid xs={6} sm={4} lg={2} item container justify='space-between'>
        <Button
          className='small-button'
          color='primary'
          variant='outlined'
          onClick={pauseGame}
        >
          Pause
        </Button>
        <Button
          className='small-button'
          color='primary'
          variant='contained'
          onClick={playGame}
        >
          Play
        </Button>
        <Button
          className='full-width-button'
          variant='outlined'
          onClick={simulateGame}
        >
          New Simulation
        </Button>
        <TextField
          id='filled-number'
          label='Delay for a move (milisenconds)'
          type='number'
          value={delay}
          onChange={handleDelayChange}
          className='delay-input'
        />
      </Grid>
    </Grid>
  );
};

// Copied from https://codesandbox.io/s/329jy81rlm?file=/src/index.js:486-905
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Controls;
