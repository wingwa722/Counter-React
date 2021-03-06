import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import '../styles/CounterSizeGenerator.css';

function CounterSizeGenerator(props) {
  const [size, setSize] = useState(0);
  const dispatch = useDispatch();
  const updateCounterSize = () =>{
        dispatch({ type: 'resetSum'})
        dispatch({ type: 'updateCounterSize', payload: size})
  }

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
      <button onClick={() => dispatch({ type: 'updateCounterSize', payload: size })} className="CounterGeneratorButton">generate</button>
    </div>
  );
}

export default CounterSizeGenerator;