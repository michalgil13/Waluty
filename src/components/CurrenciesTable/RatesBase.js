import React from 'react'

const RatesBase = (props) => {
    const ratesNames = []
    Object.entries(props.rates[0]).forEach(base => {
        ratesNames.push(base[0])
    })

    return(
        <div>
            <label htmlFor="currencySelect">Wybierz walutę:</label>
            
            <select 
                id="currencySelect"
                className="browser-default" 
                name="baseName"
                onChange={(e) => props.handleChange(e)}
            >
                <option key="0" value="-----">-----</option>
                {ratesNames.map(rName => 
                    <option key={ratesNames.indexOf(rName)+1} value={rName} data-icon={"./images/" + rName + ".png"}> {rName}</option>
                )}
            </select>
        </div>
    )
}

export default RatesBase