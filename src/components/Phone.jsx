import React, {Component} from 'react';
import './Phone.css';


class Phone extends Component {
    render() {
        return (
            <div className="phoneContainer">
                <div className="device">
                    <div className="display">
                        <div className="glass">
                            <div className="viewport"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Phone