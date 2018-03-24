import React, { Component } from 'react'

class Stack extends Component {
    render() {
        return (
            <div className=" section im-back2 im-sombra-box">
                <div className="container">
                    <div className="columns is-multiline is-mobile">
                        <div className="column has-text-centered">
                            <i className="fab fa-node-js" style={{ color: "#90C53F", fontSize: "12rem" }}></i>                      
                        </div>
                        <div className="column has-text-centered">
                            <i className="fab fa-html5" style={{ color: "#F16528", fontSize: "12rem" }}></i>                         
                        </div>
                        <div className="column has-text-centered">
                            <i className="fab fa-css3-alt" style={{ color: "#369DD7", fontSize: "12rem" }}></i>                          
                        </div>
                        <div className="column has-text-centered">
                            <i className="fab fa-js" style={{ color: "#F0DA50", fontSize: "12rem" }}></i>                          
                        </div>
                        <div className="column has-text-centered">
                            <i className="fab fa-react" style={{ color: "#61DAFB", fontSize: "12rem" }}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stack;