import React, { useState } from "react";
import { Wrapper } from "./Wrapper";
import { Counter } from "./counter/Counter";

const App = () => {
  return (
    <Wrapper>
      <Counter defaultValue={0} />
      <Counter defaultValue={5} />
    </Wrapper>
  );
};

export default App;
