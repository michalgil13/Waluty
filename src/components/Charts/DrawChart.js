import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

//draws a currency changes chart for selected currencies 
class DrawChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            xLabels: props.xLabels,
            USD: props.USD,
            CHF: props.CHF,
            JPY: props.JPY,
            CNY: props.CNY,
            GBP: props.GBP,
            EUR: props.EUR,
            AUD: props.AUD,
            NOK: props.NOK
        }
    }

    render(){
        return(
            <div className="chart">
            <Line
                
                data={{
                    labels: this.props.xLabels,
                    datasets: [{ 
                        data: this.props.EUR,
                        label: "EUR",
                        borderColor: "#FFCC00",
                        fill: false
                    }, { 
                        data: this.props.USD,
                        label: "USD",
                        borderColor: "#3C3B6E",
                        fill: false
                    }, { 
                        data: this.props.CHF,
                        label: "CHF",
                        borderColor: "#87b218",
                        fill: false
                    }, { 
                        data: this.props.GBP,
                        label: "GBP",
                        borderColor: "#5B2000",
                        fill: false
                    }, { 
                        data: this.props.CNY,
                        label: "CNY",
                        borderColor: "#DE2910",
                        fill: false
                    }, { 
                        data: this.props.JPY,
                        label: "JPY",
                        borderColor: "#0094FF",
                        fill: false
                    }, { 
                        data: this.props.AUD,
                        label: "AUD",
                        borderColor: "#55D6BE",
                        fill: false
                    }, { 
                        data: this.props.NOK,
                        label: "NOK",
                        borderColor: "#2E5EAA",
                        fill: false
                    }
                    ]
                }}
                options={{
                    title:{
                        display: true,
                        text: 'Zmiana kursów walut w stosunku do PLN',
                        fontSize: 25
                    },
                    legend:{
                        display: true,
                        position: "bottom"
                    },
                    
                }}
            />
            </div>
        )
    }
}

export default DrawChart;
