import React, {useContext} from 'react'
import peopleIcon from '../../images/icon-person.svg'

import { tipContext } from '../Context'


const NumPeople = () => {

    const {setNumPeople} = useContext(tipContext)

    const handleNumPeople = (e) => {

        let copiedNumPeople = e.target.value;
        setNumPeople(copiedNumPeople)
        
    }


    return (
          <div className="icon-input-wrapper">  
            <img className="icon" src={peopleIcon}/>
                <input onChange={handleNumPeople}className="total-wrapper" type="number"></input>
        </div>
       
    )
}

export default NumPeople
