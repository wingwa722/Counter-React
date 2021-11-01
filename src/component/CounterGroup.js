import React, {useState, useEffect} from 'react';
import Counter from './Counter'

function CounterGroup(props) {
  const [counterList, setCounterList] = useState([]);
  
  useEffect(() => {
    const counters = new Array(props.counterSize).fill(Date.now());
    setCounterList(counters);
  }, [props.counterSize]);

  function increaseSum() {
      props.increaseSum()
  }

  function decreaseSum() {
    props.decreaseSum()
}

  return (
    <div>
      {counterList.map((item, index) => (
        <Counter key={item+index} increaseSum={increaseSum} decreaseSum={decreaseSum}></Counter>
      ))}
    </div>
  );
}

export default CounterGroup;