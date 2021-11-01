import React, {useState} from 'react';

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
    <div>
      <span>Size:</span>
      <input min="0" type="number" value={size} onChange={handleChangeSize}></input>
      <button onClick={generateCounter}>generate</button>
    </div>
  );
}

export default CounterSizeGenerator;