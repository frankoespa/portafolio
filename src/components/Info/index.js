import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (
            <div className=" section tile is-ancestor">
                <div className="tile is-4 is-vertical is-parent">
                    <div className="tile is-child box im-back2 im-sombra-box">
                        <h4 className="title has-text-weight-normal is-4 has-text-white has-text-centered"><span className="im-puntos">STUDIES</span></h4>
                        <p className="has-text-weight-light has-text-centered has-text-white">Systems Analyst (UTN)</p>
                        <p className="has-text-weight-light has-text-centered has-text-white">Systems Engineering (UTN)</p>
                    </div>
                    <div className="tile is-child box im-back2 im-sombra-box">
                        <h4 className="title has-text-weight-normal is-4 has-text-white has-text-centered"><span className="im-puntos">LANGUAGES</span></h4>
                        <p className="has-text-weight-light has-text-centered has-text-white">Intermediate English</p>
                    </div>
                </div>
                <div className="tile is-parent">
                    <div className="tile is-child box im-back2 im-sombra-box">
                        <h4 className="title has-text-weight-normal is-4 has-text-white has-text-centered"><span className="im-puntos">OBJECTIVE</span></h4>
                        <p className="has-text-weight-light has-text-centered has-text-white">Belonging to a company that offers me the opportunity to continue developing in the labor and personal area, offers a good working environment and prioritizes the spirit of teamwork</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info