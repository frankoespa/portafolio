import React, { Component } from 'react'
import programmerSvg from './programmer.svg'
import './index.scss'

class Skills extends Component {

    constructor(props) {
        super(props);
        this.skills1 = ['Javascript', 'Html 5', 'Css 3','React Js', 'Jquery', 'Node Js','Express Js','Web Components'];
        this.skills2 = ['Flexbox','POO','Git','Scrum','Mongo DB','Sql','Responsive Design']
    }
    

    render() {
        var skills1 = this.skills1.map((skill,key) =>
            <h5 key={key} className="title is-5 has-text-grey-dark im-robo is-uppercase has-text-centered">{skill}</h5>
        );
        var skills2 = this.skills2.map((skill,key) =>
            <h5 key={key} className="title is-5 has-text-grey-dark im-robo is-uppercase has-text-centered">{skill}</h5>
        );
        return (
            <div className="section">
                <div className="container">
                    <h1 className="title is-2 has-text-grey-dark has-text-centered"><span style={{ color: "#ff6b52" }}>&#123;</span> Skills <span style={{ color: "#ff6b52" }}>&#125;</span></h1>
                    
                    <div className="columns is-multiline is-mobile is-centered">
                        <div className="column is-11-mobile im-flexible">

                            <img id="im-programmer" src={programmerSvg} alt="Programmer"/>

                        </div>
                        <div className="column im-flexible">

                            {skills1}

                        </div>
                        <div className="column im-flexible">

                            {skills2}

                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;