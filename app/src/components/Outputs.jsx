import React, {useContext, useState, useEffect} from 'react'
import { tipContext } from './Context'

const outputs = () => {

const {total, buttons,  numPeople } = useContext(tipContext)

const [tip, setTip] = useState(0)
const [totalPerson, setTotalPerson] = useState(0)



useEffect(()=> {

    const copiedButtons = [...buttons]
    let tipValue = 0;
    copiedButtons.filter(e => e.active === true).map((el) => {
        tipValue = total * el.amount / 100 / numPeople
        setTip(tipValue);
       
}) }, [total, numPeople])

useEffect(()=>{
    let totalPerPerson = tip + total / numPeople
    setTotalPerson(totalPerPerson)

,[total, numPeople, tip] })


    return (
        <>
            <div className="out-container">
                <div className="output-wrap">
                <span className="output-title">Tip Amount</span>
                <span className="output-small-text">/ person</span>
                </div>
                <span className="final-amount">${tip === 0 ? "0.00" : tip.toFixed(2)}</span>

            </div>
            
            <br/>

            <div className="out-container">
                <div className="output-wrap">
                <span className="output-title">Total</span>
                <span className="output-small-text">/ person</span>
                </div>
                <span className="final-amount">${tip === 0 ? "0.00" : totalPerson.toFixed(2)}</span>
            </div>
        </>
    )
}

export default outputs
