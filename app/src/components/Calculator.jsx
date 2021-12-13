import React from 'react'
import '../css/calculator.css'

import Inputs from './Inputs'
import Outputs from './Outputs'

const Calculator = () => {

    const blockInvalidChars = (e) => {
        const invalid = ["e", "E", "!", "@", "#", "$", "%", "^", "&","*","(",")", "-", "_", "=", "+"]
        if(invalid.includes(e.key)) e.preventDefault();
    }


    return (
        <div className="calculator-container">

            <div className="input-wrapper">
                 <Inputs onKeyDown={blockInvalidChars}/>
            </div>

            <div className="output-wrapper">
                <Outputs/>
            </div>

        </div>
    )
}

export default Calculator
