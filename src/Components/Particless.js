import React from 'react'
import Particle from 'react-particles-js'

function Particless() {
    return (
        <div>
            <Particle className="particle"
                params={{
                    "particles": {
                        "number": {
                            "value": 150,
                            "density": {
                                "enable": true
                            },

                        },
                        "shape": {
                            "type": "image",
                            "color": "",
                            "options": {
                                "image":
                                {
                                    src: "https://clipart-best.com/img/smoke/smoke-clip-art-101.png"

                                }
                            }
                        },

                        "size": {
                            "value": 200,
                            "random": false,
                            "anim": {
                                "speed": 0.4,
                                "size_min": 0.1
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "color": "#5A504D",
                            "width": 5000,
                            "opacity": 0.4
                        },
                        "move": {
                            "random": true,
                            "speed": 0.4,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble",
                                "speed": "0.2"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse",
                                "speed": "0.8"
                            }
                        },
                        "opacity": {
                            "value": 7,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "opacity_max": "0.1",
                                "sync": false
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 3,
                                "duration": 2,
                                "size": 0,
                                "opacity": 1
                            },
                            "repulse": {
                                "distance": 100,
                                "duration": 2
                            }
                        }
                    }
                }}    >

            </Particle>

        </div>
    )
}

export default Particless
