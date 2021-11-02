import React from "react";
import { useSelector } from "react-redux";
import '../styles/CounterSum.css';

function CounterSum (){
    const sum = useSelector(state => state.sum)

    return(
        <div className="CounterSum">
            Sum: {sum}
        </div>
    );
}

export default CounterSum;