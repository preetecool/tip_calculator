import React from 'react'

import Total from './input/Total'
import Tip from './input/Tip'
import NumPeople from './input/NumPeople'



const inputs = () => {

   


    return (
        <>  
            <span>Bill Amount</span>
            <Total/>
            <br/>
            <span>Select Tip %</span>
            <Tip/>
            <br/>
            <span>Number of People</span>
            <NumPeople/>
        </>
    )
}

export default inputs
