import React, {Component} from 'react';
import './SocialIcons.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebook,
    faMediumM,
    faGithub,
} from '@fortawesome/fontawesome-free-brands'

const iconSize = '2x';

class SocialIcons extends Component {
    render() {
        return (
            <div id="socialIconsContainer">
                <div className="socialIconsWrapper">
                    <ul>
                        <a href="https://www.facebook.com/pg/ABITBUCHAREST">
                            <li className="facebook"><FontAwesomeIcon icon={faFacebook} size={iconSize}/></li>
                        </a>
                        <a href="https://twitter.com/abitbucharest">
                            <li className="twitter"><FontAwesomeIcon icon={faTwitter} size={iconSize}/></li>
                        </a>

                        <a href="https://medium.com/ab-it">
                            <li className="medium"><FontAwesomeIcon icon={faMediumM} size={iconSize}/></li>
                        </a>
                        <a href="https://github.com/ab-itteam">
                            <li className="github"><FontAwesomeIcon icon={faGithub} size={iconSize}/></li>
                        </a>
                    </ul>
                </div>
            </div>)
    }
}

export default SocialIcons