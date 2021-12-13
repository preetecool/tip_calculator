import React, {useContext} from 'react'
import { tipContext } from './Context'

const outputs = () => {

const {total, buttons,  numPeople, finalTotal, setFinalTotal} = useContext(tipContext)


const handleTipAmount = () => {

    const copiedButtons = [...buttons]
    let value = 0;
    copiedButtons.filter(e => e.active === true).map((el) => {

        let parsedTotal = parseInt(total, 10);
        console.log(parsedTotal)
        return value = total * el.amount / 100
        
    })
    setFinalTotal({...finalTotal, tip: value})
   


}



    return (
        <>
            <div className="out-container">
                <div className="output-wrap">
                <span className="output-title">Tip Amount</span>
                <span className="output-small-text">/ person</span>
                </div>
                <span className="final-amount">{finalTotal.tip}</span>
                {/* <input type="text" className="final-amount" disabled={true} value={finalTotal.tip}/> */}
            </div>
            
            <br/>

            <div className="out-container">
                <div className="output-wrap">
                <span className="output-title">Total</span>
                <span className="output-small-text">/ person</span>
                </div>
                {/* <input onChange={handleTipAmount}className="final-amount" value={finalTotal.tip} disabled={true}/> */}
            </div>
        </>
    )
}

export default outputs
