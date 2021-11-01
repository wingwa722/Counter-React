import React from 'react';
import {useState} from 'react'
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroup from './CounterGroup'
import CounterSum from './CounterSum';

function MultiCounter() {
  const [counterSize, setCounterSize]= useState(0);
  const [sum, setSum] = useState(0);

  function updateCounterSize(size) {
    setCounterSize(size);
    setSum(0);
  }

  function increaseSum(){
    setSum(sum+1);
  }

  function decreaseSum(){
    setSum(sum-1);
  }

  return (
    <div>
      <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
      <CounterGroup counterSize={counterSize} increaseSum={increaseSum} decreaseSum={decreaseSum}></CounterGroup>
      <CounterSum sum={sum}></CounterSum>
    </div>
  );
}

export default MultiCounter;