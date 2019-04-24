import React, { Component } from 'react';
import RatesList from './RatesList'
import RatesBase from './RatesBase';

class Currencies extends Component{
    constructor(){
        super()
        this.state = {
            rates: [],
            date: "",
            base: "PLN",
            isLoaded: false,
            urlDate: ""
        }   
    }

    //fetching the latest data and data from the previous day
    getData(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(data => data.json())
        .then(data => {
            let yestDate = new Date(data.date)
            yestDate.setDate(yestDate.getDate()-1)
            let yyyy = yestDate.getFullYear()
            let MM = ((yestDate.getMonth()+1) < 10 ? '0' : '') + (yestDate.getMonth()+1)
            let dd = ((yestDate.getDate()) < 10 ? '0' : '') + (yestDate.getDate())
            let urlDate = `${yyyy}-${MM}-${dd}`

            Promise.all([
                fetch("https://api.exchangeratesapi.io/latest?base=" + this.state.base)
                    .then(data => data.json()),
                fetch("https://api.exchangeratesapi.io/" + urlDate + "?base=" + this.state.base)
                    .then(data => data.json())
            ])
                .then(data => {
                    this.setState({
                        rates: [data[0].rates, data[1].rates],
                        date: data[0].date,
                        base: data[0].base,
                        isLoaded: true
                    })
                })

        })
    }

    //initial fetching data
    componentDidMount(){
        this.getData()
    }

    //handling currency changes and downloading new data
    handleChange = (e) => {
        const { name, value } = e.target
        if(name === "baseName" && value !== "-----"){
            this.setState({
                base: value
            })
            this.getData()
        }
    }

    render(){
        const {rates, base, date} = this.state
        return(
            <div>
                <h3>Aktualne kursy walut według Europejskiego Banku Centralnego</h3>
                <h3>
                    Przeliczane według kursu:
                    <br></br>
                    <img alt={base} src={"/images/" + base + ".png"}/>
                    {base}
                </h3>
                {this.state.isLoaded ? <RatesBase rates={rates} handleChange={(e) => this.handleChange(e)}/> : ""}
                {this.state.isLoaded ? <RatesList rates={rates} base={base} date={date}/> : "LOADING..."}
                <br></br>
            </div>
        )
    }

}

export default Currencies
