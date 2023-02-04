import { count } from "./atom";
import { useAtom } from "jotai";

import "./App.css";
import Home from "./Home";
const App = () => {
  const [countValue, setCountValue] = useAtom(count);
  const increment = () => {
    setCountValue((countValue) => countValue + 1);
  };
  const decrement = () => {
    if(countValue > 0){ setCountValue((countValue) => countValue - 1)}
  };

  return (
    <main>
    <Home/>
    <section className="app">
    <h1>Count State management with Jotai</h1>
      <h1>{countValue}</h1>
      <div className="btn">
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </section>        
    </main>
  );
};

export default App;
