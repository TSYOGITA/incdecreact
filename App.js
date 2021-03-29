import React, { useState } from 'react';

function App() {
  const state = useState();
  const [count, setCount] = useState(0);//initial
  const DecNum = () => {
    setCount(count - 1);
  };
  const IncNum = () => {
    setCount(count + 1);
   //console.log('clicked' + count++);
  };

  return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>CLICK ME + </button>
    <button onClick={DecNum}>CLICK ME - </button>
    </>
  );
}

export default App;
