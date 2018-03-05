import {faDiscord, faSlackHash, faTelegram, faWhatsapp} from "@fortawesome/fontawesome-free-brands";
import React, {Component} from 'react';
import './ChatBoxIcons.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const iconSize = '2x';

class ChatBoxIcons extends Component {
    render() {
        return (
            <div id="socialIconsContainer">
                <div className="socialIconsWrapper">
                    <ul>
                        <a href="https://t.me/meiremans">
                            <li className="telegram"><FontAwesomeIcon icon={faTelegram} size={iconSize}/></li>
                        </a>
                        <a href="https://discord.gg/TZv2CJ3">
                            <li className="discord"><FontAwesomeIcon icon={faDiscord} size={iconSize}/></li>
                        </a>
                        <a href="https://join.slack.com/t/ab-itguest/shared_invite/enQtMzIwNTExMzkyMjA4LWMzOWEyNDgxMjUwMTA2ZmI2NTFkMWM3YjA3ZDBjYTI2ODVkNzYzOWRkYjNiMWI0MzRiNzYxZWUyYjI3MmY4NTQ">
                            <li className="slack"><FontAwesomeIcon icon={faSlackHash} size={iconSize}/></li>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+40725238232&text=contact%20from%20website">
                            <li className="whatsapp"><FontAwesomeIcon icon={faWhatsapp} size={iconSize}/></li>
                        </a>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ChatBoxIcons;