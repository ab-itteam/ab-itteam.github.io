import React, {Component} from 'react';
import './WindowsStyleButton.css'


class WindowsStyleButton extends Component {
    render() {
        return (
                <div className="toggle-component">
                    <label className="toggle">
                        <input type="checkbox" checked={this.props.checked} readOnly/>
                        <div data-off="" data-on=""></div>
                    </label>
                </div>
        )
    }
}

export default WindowsStyleButton;