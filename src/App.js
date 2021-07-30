import React from "react";

import { Counter } from "./components/Counter/Counter.jsx";
import { CounterForm } from "./components/CounterForm/CounterForm.jsx";
import "./App.css";
import logo from "./logo.png";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          height={130}
          width={130}
        />
        <h1>diGrefg counter</h1>
      </header>
      <div className="App-body">
        <CounterForm onFormSubmit={(count) => setCount(count)} />
        <Counter count={count} />
      </div>
      <footer className="App-footer">
        <div>Made by David Casanellas</div>
        <div>{`<3`}</div>
        <div>with from Barcelona</div>
      </footer>
    </div>
  );
};

export default App;
