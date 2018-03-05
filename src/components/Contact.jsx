import React, {Component} from 'react';
import './Contact.css';
import ContactButton from "./ContactButton";
import SocialIcons from "./SocialIcons";
import { faPhone,faEnvelope } from '@fortawesome/fontawesome-free-solid'
import ChatBoxIcons from "./ChatBoxIcons";

const email = {
    link: "mailto:nick@ab-it.io",
    covered:"nick@ab-it.io",
    littleBox : "Recommended",
    text: 'E-mail',
    faIcon : faPhone
};

const phone = {
    link: "tel:+40 725 238 232",
    covered:"+40 725 238 232",
    littleBox : "Extra awkward",
    text : "Phone",
    faIcon : faEnvelope
};

class Contact extends Component {

    render() {
        return (
            <div className="reachOut">
                <div className="reachOutTitle">
                    <h1><em>Reach Out</em> to us</h1>
                </div>
                <div className="reachOutButtons">
                    <h2>Traditional</h2>
                    <ContactButton data={email}/>
                    <ContactButton data={phone}/>
                </div>
                <div className="reachOutChatBox">
                    <h2> Not so traditional </h2>
                    <ChatBoxIcons/>
                </div>
                <div className="reachOutSocialMedia">
                    <h2> Social Media </h2>
                    <SocialIcons/>
                </div>
            </div>
        )
    }
}

export default Contact