import React from 'react'
import { Button } from 'react-materialize'

const ChartsChoose = (props) => {
    const ratesNames = []
    Object.entries(props.ratesLatest).forEach(base => {
        ratesNames.push(base[0])
    })

    return(
        <div>
            <label htmlFor="dateFrom">Data początkowa:</label>
            <div className="dateChange">
            <input
                type="date"
                id="dateFrom"
                name="dateFrom"
                min="1999-01-04"
                max={props.dateEnd}
                value={props.dateFrom}
                onChange={props.handleChange}
            /> 
            </div>

            <label htmlFor="dateTo">Data końcowa:</label>
            <div className="dateChange">
            <input
                type="date"
                id="dateTo"
                name="dateTo"
                min="1999-01-04"
                max={props.dateEnd}
                value={props.dateTo}
                onChange={props.handleChange}
            /> 
            </div>

            <div>
                <Button
                node="a"
                waves="light"
                large
                style={{marginRight: '5px'}}
                onClick={props.handleChange}
                >
                    Generuj wykres
                </Button>
            </div>
            <br></br>
        </div>
    )
}

export default ChartsChoose