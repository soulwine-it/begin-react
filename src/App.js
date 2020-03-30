import React from "react";
import Hello from "./Hello.js";
import "./App.css";
import Wrapper from "./Wrapper.js";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
