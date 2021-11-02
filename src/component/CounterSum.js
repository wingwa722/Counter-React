import React from "react";
import '../styles/CounterSum.css';

function CounterSum (props){

    return(
        <div className="CounterSum">
            Sum: {props.sum}
        </div>
    );
}

export default CounterSum;