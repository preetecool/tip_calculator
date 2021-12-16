import React, {useState, createContext} from 'react'

export const tipContext = createContext(null);


const Context = ({children}) => {

    const [total, setTotal] = useState(undefined);

    const [buttons, setButtons] = useState([

        {amount: 5, active: false},
        {amount: 10, active: false},
        {amount: 15, active: false},
        {amount: 20, active: false},
        {amount: 25, active: false},

    ])

    const [numPeople, setNumPeople] = useState(null);


    return (
        <>
        <tipContext.Provider 
        value={{total, setTotal, buttons, setButtons, numPeople, setNumPeople, finalTotal, setFinalTotal}}>
            {children}
        </tipContext.Provider>
        </>
    )
}

export default Context
