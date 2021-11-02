import React, {useState} from 'react';
import '../styles/CounterSizeGenerator.css';

function CounterSizeGenerator(props) {
  const [size, setSize] = useState(0);

  function handleChangeSize(event) {
// event.target.value => String
    const value = event.target.value.length === 0 ? 0 : event.target.value;

    setSize(parseInt(value));
  }

  function generateCounter() {
    console.log('size', size);
    props.updateCounterSize(size);
  }

  return (
    <div className="CounterSizeGenerator">
      <span>Size:</span>
      <input min="0" type="number" value={size} onChange={handleChangeSize} className="CounterInput"></input>
      <button onClick={generateCounter} className="CounterGeneratorButton">generate</button>
    </div>
  );
}

export default CounterSizeGenerator;