import React, { Component } from 'react'
import gatsbyicon from './gatsby.svg'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="has-text-centered">
                        <p className="is-size-5">Developed with <span style={{ color: "#fa4659"}}>♥</span> by <a target="_blank" href="https://www.linkedin.com/in/francoesparza/">Franco Esparza</a> </p>
                        <p className="is-size-5">Powered by <a target="_blank" href="https://www.gatsbyjs.org"><img style={{ width: "100px", height: "auto", verticalAlign: "middle" }} src={gatsbyicon} alt="Gatsby Js"/></a></p>
                        
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

