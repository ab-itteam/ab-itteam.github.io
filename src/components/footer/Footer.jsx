import React, {Component} from 'react';
import './Footer.css'
import SocialIcons from "../SocialIcons";
import {Link} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footerContainer">
                    <div className="FooterOnThisWebsite footerItem">
                        <h2>On this website</h2>
                        <ul>
                            <li><Link to="#">LINK</Link></li>
                            <li><Link to="#">LINK</Link></li>
                            <li><Link to="/tos">TOS</Link></li>
                            <li><Link to="/privacy">Privacy</Link></li>
                        </ul>
                    </div>
                    <div className="FooterOurSpecializations footerItem">
                        <h2>Our Specializations</h2>
                        <ul>
                            <li><Link to="#">LINK</Link></li>
                            <li><Link to="#">LINK</Link></li>
                            <li><Link to="#">LINK</Link></li>
                        </ul>
                    </div>
                    <div className="FooterKeepInTouch footerItem">
                        <h2>Keep In Touch</h2>
                        <SocialIcons/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;