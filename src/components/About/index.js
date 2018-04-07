import React, { Component } from 'react'

class About extends Component {

    render() {
        return (
            <div className="section">
                <div className="container">
                    <h1 className="title is-2 has-text-grey-dark has-text-centered"><span style={{ color: "#ff6b52" }}>&#123;</span> About Me <span style={{ color: "#ff6b52" }}>&#125;</span></h1>
                    <p className="has-text-weight-light has-text-centered">
                        I am an engineering student. <br/>
                        I like to participate in the analysis, design, implementation, testing and improvement of the systems. <br />
                        I am part of the Frontend Development world using React Js, although I also like to get involved in the Backend or develop for mobile.<br />
                        I consider myself a person with an analytical profile, with initiative and ability to solve problems, easy integration into work teams and good communication skills.<br />
                        I am a super fan of technology and I enjoy studying english, traveling, meeting people and doing sports.
                    </p>
                </div>

            </div>
        );
    }
}

export default About
