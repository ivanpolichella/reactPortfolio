import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                    <span className={classes.head}>SOBRE MI</span>
                    <h2 className={classes.heading}>Quien soy?</h2>
                    <div className={classes.About}>
                        <p> Nací el 30/07/1996 en La Plata,
                            Argentina. Soy Analista de Sistemas y
                            me apasiona el desarrollo de software,
                            poseo excelentes dotes comunicativos y
                            considero que el ámbito social, de
                            intercambio de opiniones es muy
                            importante para el dia a dia en el
                            trabajo de sistemas  </p>
                        <p className={classes.br}>Me gusta mucho explorar nuevas tecnologías y aprender de ellas.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;