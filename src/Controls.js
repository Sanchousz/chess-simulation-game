import { useState, useRef, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import {
  randomlyPlacePieces,
  moveBlackBishop,
  generateCellAdress,
} from './functions';
import store from './store/store';
import { cleanUpHistory, addToHistory } from './actions/historyManipulations';
import './App.css';

const Controls = () => {
  const [isPaused, setIsPaused] = useState(true);

  let i = 0;

  const playGame = () => setIsPaused(false);
  const pauseGame = () => setIsPaused(true);

  useInterval(() => {
    if (!isPaused) {
      i++;
      const oldPosition = store.getState().blackBishopPosition;
      moveBlackBishop();
      const newPosition = store.getState().blackBishopPosition;
      store.dispatch(
        addToHistory(
          i,
          'Black Bishop',
          generateCellAdress(oldPosition),
          generateCellAdress(newPosition)
        )
      );
    }
  }, 1500);

  const simulateGame = () => {
    i = 0;
    setIsPaused(true);
    randomlyPlacePieces();
    store.dispatch(cleanUpHistory());
  };

  return (
    <Grid container justify='center'>
      <Grid xs={6} sm={4} lg={2} item container justify='space-between'>
        <Button
          className='smallButton'
          color='primary'
          variant='outlined'
          onClick={pauseGame}
        >
          Pause
        </Button>
        <Button
          className='smallButton'
          color='primary'
          variant='contained'
          onClick={playGame}
        >
          Play
        </Button>
        <Button
          className='fullWidthButton'
          variant='outlined'
          onClick={simulateGame}
        >
          New Simulation
        </Button>
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
