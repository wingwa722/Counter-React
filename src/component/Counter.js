import React, { useState } from "react";
import { useDispatch } from "react-redux";
import '../styles/Counter.css';

function Counter(){
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();

    function increase(){
        setNumber(number+1);
        dispatch({type: 'updateCounterSum', payload: 1})
    }

    function decrease(){
        setNumber(number-1);
        dispatch({type: 'updateCounterSum', payload: -1})
    }

    return (
        <div className="Counter">
            <button onClick={increase} className="CounterButton">+</button>
            <span>{number}</span>
            <button onClick={decrease} className="CounterButton">-</button>
        </div>
    );
}

export default Counter;