import Routing from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from './Themes.js';
import GlobalStyle from "./Themes.js";
import React from "react";


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routing />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
