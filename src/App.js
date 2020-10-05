import React from "react";

import MemoryGame from "./pages/MemoryGame";
import GlobalStyle from "./helpers/styles/styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <MemoryGame />
    </div>
  );
}

export default App;
