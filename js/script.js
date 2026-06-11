/* TYPING EFFECT */

const text =
"Web Developer | IoT Enthusiast | Manchester United Supporter";

let index = 0;

function typeEffect() {

    if(index < text.length){

        document.querySelector(".typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,80);
    }
}

window.onload = () => {

    typeEffect();

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 100
            },

            color: {
                value: "#dc2626"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 3
            },

            line_linked: {

                enable: true,

                distance: 150,

                color: "#dc2626",

                opacity: 0.4,

                width: 1
            },

            move: {

                enable: true,

                speed: 2
            }
        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "grab"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                }
            },

            modes: {

                grab: {
                    distance: 150
                },

                push: {
                    particles_nb: 4
                }
            }
        },

        retina_detect: true
    });

};