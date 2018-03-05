import React, {Component} from 'react';
import './ContactButton.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class ContactButton extends Component {

    render() {
        return (
            <div className="ContactButtonwrapper">


                <a href={this.props.data.link} target="_blank" className="contact-button">
                    {this.props.data.text}
                    <i className={`contactButtonLogo ${this.props.data.faIcon}`}/>
                    <FontAwesomeIcon icon = {this.props.data.faIcon} className="contactButtonLogo"/>
                    <span>{this.props.data.covered}</span>
                    <div className="littleBox">{this.props.data.littleBox}</div>
                </a>
            </div>
        )
    }
}
            export default ContactButton
