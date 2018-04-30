import React from 'react';
import Router from './Router'

import { ThemeProvider } from 'emotion-theming'
import theme from '../styles/theme'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    );
  }
}

export default App;
