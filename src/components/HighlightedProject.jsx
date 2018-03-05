import React, {Component} from 'react';
import './HighlightedProject.css';
import Phone from "./Phone";


class HighlightedProject extends Component {
    render() {
        return (
            <div className="HighlightedProjectContainer">
                <h1>A project on which we are <em>proud</em></h1>
                <Phone/>
                <h2>an IOS,Android and Windows Phone app</h2>
                <p>
                    Medibib is a startup selling medical products online. <br/>
                    They reached out to us to write their backend system and supply them with an app.<br />
                    It was our honour to program their system.<br/>
                    With this app users are able to scan their medical products and get the manual straight on their phones.<br/>
                </p>
            </div>
        )
    }
}

export default HighlightedProject
