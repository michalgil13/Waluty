import React from 'react'

//generates a "text" form for enter value to convert
const SimpleCalc = (props) => {
    const From = (props.valueFrom/props.valueFrom).toFixed(2)
    const To = (props.valueTo/props.valueFrom).toFixed(2)
    const userTo = (props.userValue*To).toFixed(2)
    
    return(
        <div>
                {props.valueFrom > 0 && props.valueTo > 0 ?
                    <div>
                        <p>{From} {props.baseFrom} = {To} {props.baseTo}</p>
                        <div className="baseInput">
                            <input
                                name="userValue"
                                placeholder="Wpisz własną wartość"
                                value={props.userValue}
                                onChange={props.handleChange}
                            />
                        </div>
                        <p>{props.userValue} {props.baseFrom} = {userTo} {props.baseTo}</p>
                    </div>
                    :
                    <div>
                        <p>Wybierz waluty</p>
                    </div>
                }
        </div>
    )
}

export default SimpleCalc
