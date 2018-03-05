import React, {Component} from 'react';
import './AboutHero.css'


class AboutHero extends Component {
    render() {
        return (
            <div>
                <div className="aboutHeroContainer">
                    <div className="aboutHero">
                        <h1>About <em>AB-IT</em></h1>
                        <p>AB-IT is focused on building quality applications for web & mobile. </p>
                        <p>Some extra information</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutHero;