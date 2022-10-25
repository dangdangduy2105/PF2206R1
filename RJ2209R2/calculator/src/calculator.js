import {Component} from 'react'

class Calculator extends Component {

    constructor(props){
        super(props)

        // const num1 = parseInt(document.getElementById('num1'))
        // const num2 = parseInt(document.getElementById('num2'))
        let num1 = document.querySelector('#num1').value
        let num2 = document.querySelector('#num2').value

        this.state = {
            number1: num1,
            number2: num2,
            total: '',
        }
    }
    summation = () => {
        this.total = this.number1 + this.number2
    }
    subtraction = () => {
        this.total = this.number1 - this.number2
    }
    multiplication = () => {
        this.total = this.number1 * this.number2
    }
    division = () => {
        this.total = this.number1 / this.number2
    }

    render (){
        return (
            <div>
                <input type="text" id="num1"/>
                <input type="text" id="num2"/>
                <button id="sum" onClick={this.summation}>+</button>
                <button id="sub" onClick={this.subtraction}>-</button>
                <button id="mul" onClick={this.multiplication}>*</button>
                <button id="div" onClick={this.division}>/</button>
                <p id="result">{this.state.total}</p>
            </div>
        );
    }
  }

export default Calculator;
