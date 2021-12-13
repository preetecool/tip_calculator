import React, {useContext} from 'react'

import dollarSign from '../../images/icon-dollar.svg'

import { tipContext } from '../Context'


const Total = () => {

    const {setTotal, total} = useContext(tipContext)

    const handleTotal = (e) => {

        let copiedTotal = e.target.value;
        setTotal(copiedTotal)
        
    }


    return (
        
        <div className="icon-input-wrapper">  
            <img className="icon" src={dollarSign}/>
                <input onChange={ handleTotal} className="total-wrapper" type="number"></input>
            
            
        </div>
    )
}

export default Total
