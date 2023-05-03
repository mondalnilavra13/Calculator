import React, { useState } from 'react';
import './styles.css';

function App() {
  const [result, setResult] = useState('');

  const handleClick = e => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='calculator'>
      <input type='text' value={result} />
      <div className='keypad'>
        <button className='operator' onClick={clear}>AC</button>
        <button className='operator' onClick={handleClick} name='/'>&divide;</button>
        <button onClick={handleClick} name='7'>7</button>
        <button onClick={handleClick} name='8'>8</button>
        <button onClick={handleClick} name='9'>9</button>
        <button className='operator' onClick={handleClick} name='*'>x</button>
        <button onClick={handleClick} name='4'>4</button>
        <button onClick={handleClick} name='5'>5</button>
        <button onClick={handleClick} name='6'>6</button>
        <button className='operator' onClick={handleClick} name='-'>-</button>
        <button onClick={handleClick} name='1'>1</button>
        <button onClick={handleClick} name='2'>2</button>
        <button onClick={handleClick} name='3'>3</button>
        <button className='operator' onClick={handleClick} name='+'>+</button>
        <button className='zero' onClick={handleClick} name='0'>0</button>
        <button onClick={handleClick} name='.'>.</button>
        <button className='operator' onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
