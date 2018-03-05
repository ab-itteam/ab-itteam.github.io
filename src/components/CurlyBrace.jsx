import React, {Component} from 'react';
import './CurlyBrace.css';
class CurlyBrace extends Component {

    render() {
        return (
                <div className="CurlyBraceContainer">
                        <hr className="brace" style={{transform:(this.props.data.inverted ? 'rotate(180deg)' : 'rotate(0deg)')}}/>
                </div>

        )
    }
}

export default CurlyBrace