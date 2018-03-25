import React, { Component } from 'react'
import Link from 'gatsby-link'
import $ from 'jquery'
import './index.scss'
import perfil from './perfil.jpg'

class Header extends Component {

    componentDidMount() {
        var izq = $(this.izq);
        var der = $(this.der);
        this.Hportada = $(this.portada).height() / 3;
        this.Wportada = $(this.portada).width() / 2;
        izq.css({
            'border-right-width': `${this.Wportada.toString()}px`,
            'border-bottom-width': `${this.Hportada.toString()}px`
        });
        der.css({
            'border-left-width': `${this.Wportada.toString()}px`,
            'border-bottom-width': `${this.Hportada.toString()}px`
        });

        particlesJS('portada', {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 400
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 2,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 600
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 250,
                        "size": 0,
                        "duration": 2,
                        "opacity": 0,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        new TypeIt(this.consola, {
            strings: ['Hi','I am Franco Esparza', 'I ♥ the web', 'I ♥ to create things'],
            breakLines: false,
            deleteSpeed: 100,
            speed: 150,
            lifeLike: true,
            loop: true,
            loopDelay: 10000,
            nextStringDelay: 5000
        });

        $(window).resize(() => {
            this.Hportada = $(this.portada).height() / 3;
            this.Wportada = $(this.portada).width() / 2;
            izq.css({
                'border-right-width': `${this.Wportada.toString()}px`,
                'border-bottom-width': `${this.Hportada.toString()}px`
            });
            der.css({
                'border-left-width': `${this.Wportada.toString()}px`,
                'border-bottom-width': `${this.Hportada.toString()}px`
            });
        })

    }

    render() {
        return (
            <div id="portada" className="im-back1" ref={(portada) => { this.portada = portada }}>
                <div className="tria izq" ref={(izq) => { this.izq = izq }}></div>
                <div className="tria der" ref={(der) => { this.der = der }}></div>
                <div className="marco">
                    <img id="perfil" src={perfil} alt="Franco Esparza" />
                    <h1 id="consola" className="title has-text-weight-light has-text-white im-back2" ref={(consola) => { this.consola = consola }}></h1>
                </div>
            </div>
        );
    }
}

export default Header
