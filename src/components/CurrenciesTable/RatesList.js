import React from 'react'
import { Table } from 'react-materialize'

//draws table of exchange rates
const RatesList = (props) => {
    const ratesToday = Object.entries(props.rates[0])
    const ratesYesterday = Object.entries(props.rates[1])
    
    for(let i = 0; i < ratesYesterday.length; i++){
        if(ratesToday[i][0] === ratesYesterday[i][0]){
            ratesToday[i].push(ratesYesterday[i][1])
        }
    }

    return(
        <div>
            <h3>Dane na dzień</h3>
            <h3>{props.date}</h3>
            <Table centered striped>
                <thead>
                    <tr>
                        <th data-field="id">
                            Państwo
                        </th>
                        <th data-field="base">
                            Waluta
                        </th>
                        <th data-field="currency">
                            Kurs [{props.base}]
                        </th>
                        <th data-field="id">
                            Wzrost/Spadek
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ratesToday.map(todRate => 
                    <tr key={todRate[0]}>
                        <td>
                            <img alt={todRate[0]} src={"./images/" + todRate[0] + ".png"}/>
                        </td>
                        <td>
                            {todRate[0]}
                        </td>
                        <td>
                            {(1/todRate[1]).toFixed(5)}
                        </td>
                        <td>
                            {todRate[1] > todRate[2] ? 
                                <img alt="UP" src="/images/ArrUp.png"/>
                                : (todRate[1] < todRate[2] ?
                                <img alt="DOWN" src="/images/ArrDown.png"/>
                                :
                                <img alt="EQUAL" src="/images/Equal2.png"/>)
                                } 
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default RatesList
