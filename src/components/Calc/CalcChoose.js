import React from 'react'

const CalcChoose = (props) => {
    const ratesNames = []
    Object.entries(props.rates).forEach(base => {
        ratesNames.push(base[0])
    })

    return(
        <div>
            <label htmlFor="selectFrom">Przelicz z:</label>
            <select 
                id="selectFrom"
                className="browser-default" 
                name="baseFrom"
                onChange={ props.handleChange}
            >
                <option key="0" value="-----">-----</option>
                {ratesNames.map(rName => 
                    <option key={ratesNames.indexOf(rName)+1}value={rName}>{rName}</option>
                )}
            </select>

            <label htmlFor="selectTo">Na:</label>
            <select 
                id="selectTo"
                className="browser-default" 
                name="baseTo"
                onChange={props.handleChange}
            >
                <option key="0" value="-----">-----</option>
                {ratesNames.map(rName => 
                    <option key={ratesNames.indexOf(rName)+1}value={rName}>{rName}</option>
                )}
            </select>

        </div>
    )
}

export default CalcChoose