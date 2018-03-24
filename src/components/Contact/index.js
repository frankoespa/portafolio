import React, { Component } from 'react'
import './index.scss'
import git from './git.svg'
import linkedin from './linkedin.svg'

class Contact extends Component {
    render() {
        return (
            <div className="section im-back2 im-sombra-box">
                <h1 className="title is-2 has-text-white has-text-centered"><span style={{ color: "#ff6b52" }}>&#123;</span> Contact Me <span style={{ color: "#ff6b52" }}>&#125;</span></h1>
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="im-header has-text-white">GITHUB</p>
                            <a target="_blank" href="https://github.com/frankoespa">
                                <img className="im-social" src={git} alt="github" style={{ width: "100px" }} />
                            </a>
                        </div>

                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="im-header has-text-white">E-MAIL</p>
                            <h4 className="title has-text-weight-normal is-4 has-text-white has-text-centered">frankoespa@gmail.com</h4>   
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="im-header has-text-white">LINKEDIN</p>
                            <a target="_blank" href="https://www.linkedin.com/in/francoesparza">
                                <img className="im-social" src={linkedin} alt="linkedin" style={{ width: "100px" }} />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Contact;