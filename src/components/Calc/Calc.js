import React, { Component } from 'react';
import CalcChoose from './CalcChoose';
import SimpleCalc from './SimpleCalc'

class Calc extends Component{
    constructor(){
        super()
        this.state = {
            rates: [],
            base: [],
            isLoaded: false,
            valueFrom: [],
            baseFrom: "",
            valueTo: [],
            baseTo: "",
            userValue: ""
        }   
    }

    //fetching the latest data with PLN currency as base
    componentDidMount(){
        fetch("https://api.exchangeratesapi.io/latest?base=PLN")
        .then(data => data.json())
        .then(data => {
            this.setState({
                rates: data.rates,
                isLoaded: true
            })
        })
    }

    //handles changes of date fields (1, 2) and text field for converting currencies (3)
    handleChange = (e) => {
        const { name, value } = e.target
        if(name === "baseFrom" && value !== "-----"){
            this.setState({
                valueFrom: this.state.rates[`${value}`],
                [name]: value
            })
        }
        if(name === "baseTo" && value !== "-----"){
            this.setState({
                valueTo: this.state.rates[`${value}`],
                [name]: value
            })
        }
        if(name === "userValue" && (!isNaN(value) || value==='.')){
            this.setState({
                [name]: value
            })
        }
    }

    render(){
        const {rates, valueFrom, valueTo, baseFrom, baseTo, userValue} = this.state
        return(
            <div>
                <h3>Przeliczanie kursów</h3>
                {this.state.isLoaded ? <CalcChoose rates={rates} handleChange={(e) => this.handleChange(e)}/> : ""}
                <SimpleCalc 
                    valueFrom={valueFrom} 
                    valueTo={valueTo} 
                    baseFrom={baseFrom} 
                    baseTo={baseTo} 
                    userValue={userValue}
                    handleChange={(e) => this.handleChange(e)}
                />
            </div>
        )
    }

}

export default Calc
