import React from "react";
import '../Styles/Counter.css'


function Counter({ clicksNums }){

    return(
        <div className="counter">
          {clicksNums}
        </div>
    )
}

export default Counter;