import React, {isValidElement, useContext} from 'react'
import { tipContext } from '../Context'

const Tip = () => {

const {buttons, setButtons} = useContext(tipContext)

const tipSelectHandler = (index) =>{

    const copiedButtons = [...buttons];

    
    copiedButtons.map((el)=> {
        if(el.active) return el.active = false;
    })
    
    copiedButtons[index].active = !copiedButtons[index].active;
    
    setButtons(copiedButtons);

}
    return (
        <div className="tip-select-wrapper">
           <>
           {buttons.map((el, index) => {
               return <button key ={index} onClick={()=>tipSelectHandler(index)}className={!el.active?"tip-btn": "tip-btn-active"}>{el.amount}%</button>
           })}
           </>
        </div>
    )
}

export default Tip
