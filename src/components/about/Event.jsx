import React, {Component} from 'react';

class Event extends Component {
    render() {
        return (
            <div className="findUsEvent">
                <a href={this.props.link} target="_blank"><h3>{this.props.event.title}</h3></a>
                <p>{this.props.event.date.toLocaleDateString()} </p>
                <p>{this.props.event.content}</p>
            </div>
        )
    }
}

export default Event;