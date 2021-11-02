import React, { useState } from "react";
import '../styles/Counter.css';

function Counter(props){
    const [number, setNumber] = useState(0);

    function increase(){
        setNumber(number+1);
        props.increaseSum();
    }

    function decrease(){
        setNumber(number-1);
        props.decreaseSum();
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