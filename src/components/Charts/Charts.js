import React, { Component } from 'react'
import ChartsChoose from './ChartsChoose'
import DrawChart from './DrawChart'


class Charts extends Component{
    constructor(){
        super()
        this.state = {
            allCurrencies: [],
            dateFrom: "",
            dateTo: "",
            isLoaded: false,
            dateEnd: "",
            ratesLatest: [],
            xLabels: [],
            USD: [],
            CHF: [],
            JPY: [],
            CNY: [],
            GBP: [],
            EUR: [],
            AUD: [],
            NOK: [],
        }
    }

    //fetching all the data from 04.01.1994 to latest available date
    componentDidMount(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(data => data.json())
        .then(data => {
            let tempDate = new Date(data.date)
            tempDate.setDate(tempDate.getDate())
            let yyyy = tempDate.getFullYear()
            let MM = ((tempDate.getMonth()+1) < 10 ? '0' : '') + (tempDate.getMonth()+1)
            let dd = ((tempDate.getDate()) < 10 ? '0' : '') + (tempDate.getDate())
            let dateEnd = `${yyyy}-${MM}-${dd}`
            this.setState({
                ratesLatest: data.rates,
                dateEnd: dateEnd
            })
            fetch(`https://api.exchangeratesapi.io/history?start_at=1999-01-04&end_at=${dateEnd}&base=PLN`)
                .then(data => data.json())
                .then(data => {
                    this.setState({
                        allCurrencies: data,
                        isLoaded: true,
                    })
                })

        })
    }

    //generates the tables of data to draw a chart
    getLabels(){
        const USD = []
        const CHF = []
        const JPY = []
        const CNY = []
        const GBP = []
        const EUR = []
        const AUD = []
        const NOK = []
        const xLabels = []
        const { dateFrom, dateTo } = this.state
        const rates = this.state.allCurrencies.rates
        const dateStart = new Date(dateFrom)
        const dateEnd = new Date(dateTo)

        while (dateStart <= dateEnd){
            dateStart.setDate(dateStart.getDate())
            let yyyy = dateStart.getFullYear()
            let MM = ((dateStart.getMonth()+1) < 10 ? '0' : '') + (dateStart.getMonth()+1)
            let dd = ((dateStart.getDate()) < 10 ? '0' : '') + (dateStart.getDate())
            if(typeof rates[`${yyyy}-${MM}-${dd}`] !== "undefined"){
                xLabels.push(`${yyyy}-${MM}-${dd}`)
                USD.push((1/rates[`${yyyy}-${MM}-${dd}`]["USD"]).toFixed(4))
                CHF.push((1/rates[`${yyyy}-${MM}-${dd}`]["CHF"]).toFixed(4))
                JPY.push((1/rates[`${yyyy}-${MM}-${dd}`]["JPY"]).toFixed(4))
                CNY.push((1/rates[`${yyyy}-${MM}-${dd}`]["CNY"]).toFixed(4))
                GBP.push((1/rates[`${yyyy}-${MM}-${dd}`]["GBP"]).toFixed(4))
                EUR.push((1/rates[`${yyyy}-${MM}-${dd}`]["EUR"]).toFixed(4))
                AUD.push((1/rates[`${yyyy}-${MM}-${dd}`]["AUD"]).toFixed(4))
                NOK.push((1/rates[`${yyyy}-${MM}-${dd}`]["NOK"]).toFixed(4))
                dateStart.setDate(dateStart.getDate()+1)
            } else {
                dateStart.setDate(dateStart.getDate()+1)
            }  
        }
        this.setState({
            xLabels: xLabels,
            USD: USD,
            CHF: CHF,
            JPY: JPY,
            CNY: CNY,
            GBP: GBP,
            EUR: EUR,
            AUD: AUD,
            NOK: NOK
        })
    }

    //handles all input fields in ChartsChoose component
    handleChange(e){
        const { name, value, type } = e.target
        if(type === "date"){
            this.setState({
                [name]: value
            }) 
        } else {
            this.getLabels()
        }
    }

    render(){
        const { dateFrom, dateTo, dateEnd, ratesLatest, USD, CHF, JPY, GBP, EUR, CNY, AUD, NOK, xLabels } = this.state
        return(
            <div>
                <h3>Generowanie wykresów</h3>
                <div className="container"><DrawChart USD={USD} CHF={CHF} JPY={JPY} CNY={CNY} GBP={GBP} EUR={EUR} AUD={AUD} NOK={NOK} xLabels={xLabels}/></div>
                <ChartsChoose dateFrom={dateFrom} dateTo={dateTo} dateEnd={dateEnd} ratesLatest={ratesLatest} handleChange={(e) => this.handleChange(e)}/>  
            </div>
        )
    }

    }


export default Charts
