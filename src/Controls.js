import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import { randomlyPlacePieces, movePieces } from './functions';
import { cleanUpHistory } from './actions/historyManipulations';
import './App.css';
import store from './store/store';

const Controls = () => {
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
    blacksPositions.filter((element) => element.isOnBoard) &&
    whitesPositions.filter((element) => element.isOnBoard);

  // useRef(() => {
  //   console.log(canContinueGame);
  // });

  useInterval(() => {
    canContinueGame().length !== 0 ? setIsStoped(false) : setIsStoped(true);
    if (!isPaused && !isStoped) {
      setMovesCounter(movesCounter + 1);
      movePieces(movesCounter, whitesPositions, blacksPositions);
    }
    console.log(canContinueGame());
  }, 400);

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
