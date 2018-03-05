import React, {Component} from 'react';
import './CasesHero.css'
import Link from "react-router-dom/es/Link";
import TechnologiesEnum from "../../../enums/TechnologiesEnum";
let technology;

class CasesHero extends Component {

    render() {
        return (
            <div className="CasesHeroContainer">
                <div className="casesHero">
                    <h1>These are our <em>{TechnologiesEnum.properties[this.props.technology].name} cases</em></h1>
                    <p>With great love and craftmanship we forged these killer applications using {TechnologiesEnum.properties[this.props.technology].name} technology </p>
                    <p>We hope our clients enjoy them as much as we did building them.</p>
                </div>
            </div>
        )
    }
}

export default CasesHero