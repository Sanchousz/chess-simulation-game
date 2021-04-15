import './App.css';
import './FontImports.css';
import Title from './Title';
import Board from './Board';
import Controls from './Controls';
import HistoryTable from './HistoryTable';

import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Title />
        <Board />
        <Controls />
        <HistoryTable />
      </ThemeProvider>
    </div>
  );
}

export default App;
