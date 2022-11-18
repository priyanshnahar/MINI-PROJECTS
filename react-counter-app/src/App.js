import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  function Increment(){
    setCounter(counter + 1)
  }

  function Decrement(){
    setCounter(counter - 1)
  }

  return (
    <div className='app'> 
      React Counter App 
         <div className='container'>{counter}</div>
         <div>
          <button className= 'button1' onClick={Increment}>INCREMENT</button>
          
          <button className= 'button2' onClick={Decrement}>DECREMENT</button>
          </div>
    </div>
  );
}

export default App;
