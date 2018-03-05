import React, {Component} from 'react';
import './CasesHero.css'
import Link from "react-router-dom/es/Link";


class CasesHero extends Component {
    render() {
        return (
            <div className="CasesHeroContainer">
                <div className="casesHero">
                    <h1>These are our <em>cases</em></h1>
                    <p>SME's and start-ups are running our applications daily. Also larger companies and individuals
                        love our commitment to quality and craftmanship.</p>
                    <p>Hereby we showcase some of our interesting cases.</p>
                </div>
            </div>
        )
    }
}

export default CasesHero