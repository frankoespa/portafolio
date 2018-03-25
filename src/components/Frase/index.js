import React, { Component } from 'react'
import './index.scss'

class Frase extends Component {

    constructor(props) {
        super(props);
        this.cambiarFrase = this.cambiarFrase.bind(this);
        this.frases = [
            { cita: 'If your business is not on the internet, then your business will be out of business', autor: 'Bill Gates' },
            { cita: 'The art challenges the technology, and the technology inspires the art', autor: 'John Lasseter' },
            { cita: 'Don’t compare yourself with anyone in this world. If you do so, you are insulting yourself', autor: 'Bill Gates' },
            { cita: 'Im convinced that about half of what separates successful entrepreneurs from the nonsuccessful ones is pure perseverance', autor: 'Steve Jobs' },
            { cita: "Life is fragile. We're not guaranteed a tomorrow so give it everything you've got", autor: 'Tim Cook' },
            { cita: 'The biggest risk is not taking any risk', autor: 'Mark Zuckerberg' }];
        this.state = { frase: this.frases[0] }
    }

    cambiarFrase() {
        var count = 1;
        var total = this.frases.length;


        setInterval(() => {

            if (count == total) {
                count = 1;
                this.setState({ frase: this.frases[0] })
            } else {
                this.setState({
                    frase: this.frases[count]
                }, () => {
                    count++
                })
            }


        }, 10000)
    }

    componentDidMount() {
        this.cambiarFrase()

    }

    render() {
        return (
            <div className="section im-fondo im-back1">
                <div className="container">
                    <h4 className="title has-text-weight-normal is-4 has-text-white has-text-centered">" {this.state.frase.cita} "</h4>
                    <h5 className="subtitle is-5 has-text-centered has-text-weight-light has-text-white">{this.state.frase.autor}</h5>
                </div>
            </div>
        );
    }
}

export default Frase;